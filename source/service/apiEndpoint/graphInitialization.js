import {
  Graph as GraphModule,
  Context as ContextModule,
  Database as DatabaseModule,
  GraphTraversal as GraphTraversalModule,
  modelAdapter,
  Entity,
  defaultImplementationList,
} from '@dependency/graphTraversal'
const { Graph } = GraphModule,
  { Context } = ContextModule,
  { Database } = DatabaseModule,
  { GraphTraversal } = GraphTraversalModule
import * as graphData from './graphData.json'
import { bodyParserMiddleware } from '../../middleware/bodyParser.middleware.js'
import composeMiddleware from 'koa-compose'

const debugGraphMiddleware = targetMiddleware =>
  new Proxy(targetMiddleware, {
    apply: function(target, thisArg, argumentsList) {
      console.log(target.name, ' Openning.')
      let result = Reflect.apply(...arguments)
      console.log(target.name, ' Closing.')
      return result
    },
  })

// context that will be used by the graph traversal during execution.
const functionContext = {
    bodyParser: bodyParserMiddleware |> debugGraphMiddleware,
  },
  conditionContext = {}

export async function initializeGraph({ targetProjectConfig }) {
  // context
  let contextInstance = new Context.clientInterface({ targetProjectConfig, functionContext, conditionContext, implementationKey: { traversalInterception: 'handleMiddlewareNextCall' } })
  // database
  let concreteDatabaseBehavior = new Database.clientInterface({
    implementationList: { boltCypherModelAdapter: modelAdapter.boltCypherModelAdapterFunction({ url: { protocol: 'bolt', hostname: 'localhost', port: 7687 } }) },
    defaultImplementation: 'boltCypherModelAdapter',
  })
  let concereteDatabaseInstance = concreteDatabaseBehavior[Entity.reference.getInstanceOf](Database)
  let concereteDatabase = concereteDatabaseInstance[Database.reference.key.getter]()
  //! /////////////////////////////////////////////! DEBUG: commented out for debugging purposes
  // await concereteDatabase.loadGraphData({ nodeEntryData: graphData.node, connectionEntryData: graphData.edge })
  console.log(`• loaded service graph data.`)
  // traversal implementation
  let implementationList =
    defaultImplementationList
    |> (list => {
      // add specific graph dependent implementations
      // list.processData['someCustomImplementation'] = function() {}
      return list
    })
  let concreteGraphTraversalBehavior = new GraphTraversal.clientInterface({
    implementationList: { middlewareGraph: implementationList },
    defaultImplementation: 'middlewareGraph',
  })

  let configuredGraph = Graph.clientInterface({
    parameter: [
      {
        traversal: concreteGraphTraversalBehavior,
        database: concreteDatabaseBehavior,
        concreteBehaviorList: [contextInstance],
      },
    ],
  })

  return { createGraphMiddleware: createGraphMiddlewareFunction(configuredGraph), configuredGraph }
}

// Immediately executing middlewares in graph traversal.
const createGraphMiddlewareFunction = configuredGraph => ({ entrypointKey }) => async (context, next) => {
  let graph = new configuredGraph({ data: { middlewareParameter: { context } } })
  await graph.traverse({ nodeKey: entrypointKey }) // implementation key is derived from the graph nodes - usally 'immediatelyExecuteMiddleware'
  await next()
}

// Aggregating middleware approach - return a middleware array, then use koa-compose to merge the middlewares and execute it.
const createGraphMiddlewareFunctionApproad2 = configuredGraph => ({ entrypointKey }) => async (context, next) => {
  let graph = new configuredGraph({})
  let middlewareArray = await graph.traverse({ nodeKey: entrypointKey, implementationKey: { processData: 'returnMiddlewareFunction' } })
  await composeMiddleware(middlewareArray)(context, next)
}
