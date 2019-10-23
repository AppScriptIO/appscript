"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _getUrlPathAsArray = _interopRequireDefault(require("../conditionCheck/getUrlPathAsArray.js"));var _default =

async (context, next) => {
  let schemaController = await SchemaController.createContext({ portAppInstance: context.instance });
  let urlPathArray = await (0, _getUrlPathAsArray.default)(context.instance);
  let apiSchemaEntrypoint = urlPathArray.pop();
  let data = await schemaController.initializeNestedUnit({ nestedUnitKey: apiSchemaEntrypoint });
  context.body = data;
  await next();
};exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9zZXJ2aWNlL2FwaUVuZHBvaW50L21pZGRsZXdhcmUvYXBpU2NoZW1hLm1pZGRsZXdhcmUuanMiXSwibmFtZXMiOlsiY29udGV4dCIsIm5leHQiLCJzY2hlbWFDb250cm9sbGVyIiwiU2NoZW1hQ29udHJvbGxlciIsImNyZWF0ZUNvbnRleHQiLCJwb3J0QXBwSW5zdGFuY2UiLCJpbnN0YW5jZSIsInVybFBhdGhBcnJheSIsImFwaVNjaGVtYUVudHJ5cG9pbnQiLCJwb3AiLCJkYXRhIiwiaW5pdGlhbGl6ZU5lc3RlZFVuaXQiLCJuZXN0ZWRVbml0S2V5IiwiYm9keSJdLCJtYXBwaW5ncyI6InlMQUFBLG1HOztBQUVlLE9BQU9BLE9BQVAsRUFBZ0JDLElBQWhCLEtBQXlCO0FBQ3RDLE1BQUlDLGdCQUFnQixHQUFHLE1BQU1DLGdCQUFnQixDQUFDQyxhQUFqQixDQUErQixFQUFFQyxlQUFlLEVBQUVMLE9BQU8sQ0FBQ00sUUFBM0IsRUFBL0IsQ0FBN0I7QUFDQSxNQUFJQyxZQUFZLEdBQUcsTUFBTSxnQ0FBa0JQLE9BQU8sQ0FBQ00sUUFBMUIsQ0FBekI7QUFDQSxNQUFJRSxtQkFBbUIsR0FBR0QsWUFBWSxDQUFDRSxHQUFiLEVBQTFCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLE1BQU1SLGdCQUFnQixDQUFDUyxvQkFBakIsQ0FBc0MsRUFBRUMsYUFBYSxFQUFFSixtQkFBakIsRUFBdEMsQ0FBakI7QUFDQVIsRUFBQUEsT0FBTyxDQUFDYSxJQUFSLEdBQWVILElBQWY7QUFDQSxRQUFNVCxJQUFJLEVBQVY7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFVybFBhdGhBc0FycmF5IGZyb20gJy4uL2NvbmRpdGlvbkNoZWNrL2dldFVybFBhdGhBc0FycmF5LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoY29udGV4dCwgbmV4dCkgPT4ge1xuICBsZXQgc2NoZW1hQ29udHJvbGxlciA9IGF3YWl0IFNjaGVtYUNvbnRyb2xsZXIuY3JlYXRlQ29udGV4dCh7IHBvcnRBcHBJbnN0YW5jZTogY29udGV4dC5pbnN0YW5jZSB9KVxuICBsZXQgdXJsUGF0aEFycmF5ID0gYXdhaXQgZ2V0VXJsUGF0aEFzQXJyYXkoY29udGV4dC5pbnN0YW5jZSlcbiAgbGV0IGFwaVNjaGVtYUVudHJ5cG9pbnQgPSB1cmxQYXRoQXJyYXkucG9wKClcbiAgbGV0IGRhdGEgPSBhd2FpdCBzY2hlbWFDb250cm9sbGVyLmluaXRpYWxpemVOZXN0ZWRVbml0KHsgbmVzdGVkVW5pdEtleTogYXBpU2NoZW1hRW50cnlwb2ludCB9KVxuICBjb250ZXh0LmJvZHkgPSBkYXRhXG4gIGF3YWl0IG5leHQoKVxufVxuIl19