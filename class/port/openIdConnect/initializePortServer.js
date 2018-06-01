import views from 'koa-views'
import bodyParser from 'koa-bodyparser'
import { default as Application } from '../../Application.class.js'
import OpenIdConnectClass from 'appscript/class/port/openIdConnect/OpenIdConnect.class.js'
import implementMiddlewareOnModuleUsingJson from 'appscript/utilityFunction/middleware/implementMiddlewareOnModuleUsingJson.js' // Middleware extending server functionality
import implementConditionActionOnModuleUsingJson from 'appscript/utilityFunction/middleware/implementConditionActionOnModuleUsingJson.js'
import createStaticInstanceClasses from 'appscript/module/reusableNestedUnit'
import createClassInstancePerRequest from 'appscript/utilityFunction/middleware/createClassInstancePerRequest.middleware.js'
import koaMount from 'koa-mount' // mount koa app as middleware to another koa app

let MiddlewareController = createStaticInstanceClasses({
    Superclass: Application, 
    implementationType: 'Middleware',
    cacheName: true
})
let ConditionController = createStaticInstanceClasses({
    Superclass: Application, 
    implementationType: 'Condition',
    cacheName: true
})

export default ({} = {}) => async () => {
    let Class = OpenIdConnectClass
    /**
     * Ceates following routes: https://github.com/panva/node-oidc-provider/blob/master/lib/helpers/defaults.js#L210
     * add middlware to the oidc koa server array following instructions - https://github.com/panva/node-oidc-provider/blob/master/docs/configuration.md#registering-module-middlewares-helmet-ip-filters-rate-limiters-etc
     */
    Class.serverKoa.use(koaMount( // mount oidc koa app as middlewares
        '/' /* base path to mount to */,
        Class.openIdConnectServer.app
    ))
    let middlewareArray = [
        createClassInstancePerRequest(Class),
        // bodyParser(),
        // async (context, next) => {
        //     // instance.middlewareArray.push(middleware)
        //     // await context.req.setTimeout(0); // changes default Nodejs timeout (default 120 seconds).          
        //     await context.set('Access-Control-Allow-Origin', '*')
        //     await context.set('connection', 'keep-alive')
        //     await next()
        // },

        // Implement interaction for user consent - https://github.com/panva/node-oidc-provider/blob/master/docs/configuration.md#interaction

        async (context, next) => {
            console.log('Last Middleware reached.')
            await next()
        },
    ]
    Class.applyKoaMiddleware(middlewareArray)
    Class.createHttpServer()
}