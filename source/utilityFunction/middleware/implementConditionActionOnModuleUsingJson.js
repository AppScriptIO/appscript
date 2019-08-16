"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _ApplicationClass = _interopRequireDefault(require("../../class/Application.class.js"));
var _implementMiddlewareOnModuleUsingJson = _interopRequireDefault(require("./implementMiddlewareOnModuleUsingJson.js"));
var _graphTraversal = _interopRequireDefault(require("@dependency/graphTraversal"));
let MiddlewareController = (0, _graphTraversal.default)({
  Superclass: _ApplicationClass.default,
  implementationType: 'Middleware',
  cacheName: true });var _default =





({
  setting }) =>
{
  let executionType = setting.type;
  return async (context, next) => {
    let isCalledNext = false;

    switch (executionType) {
      case 'middlewareNestedUnit':

        const nestedUnitKey = setting.name;
        const portAppInstance = context.instance;
        let middlewareArray;
        let middlewareController = await MiddlewareController.createContext({ portAppInstance: portAppInstance });
        middlewareArray = await middlewareController.initializeNestedUnit({ nestedUnitKey: nestedUnitKey });
        if (process.env.SZN_DEBUG == 'true' && context.header.debug == 'true') {

          console.group(`🍊 Middleware Array:`);
          middlewareArray.map(middlewareNode => {
            console.log(middlewareNode.file.filePath);
          });
          console.groupEnd();
        }
        await (0, _implementMiddlewareOnModuleUsingJson.default)(middlewareArray)(context, next);
        isCalledNext = true;
        break;
      case 'functionMiddleware':

        let filePath = setting.name;
        let middleware = await require(`${filePath}`).default;
        await middleware(context, next);
        isCalledNext = true;
        break;
      case 'portClassMethodMiddleware':
        let methodName = setting.name;
        let token = await context.instance[methodName](context.request, context.response);
        context.body = token;
        break;
      case 'consoleLogMessage':
        console.log(setting.name);
        break;
      default:
        if (process.env.SZN_DEBUG == 'true') console.log("SZN - %c Setting (callback) doesn't match any kind.", _ApplicationClass.default.config.style.red);}

    return isCalledNext;
  };
};exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS91dGlsaXR5RnVuY3Rpb24vbWlkZGxld2FyZS9pbXBsZW1lbnRDb25kaXRpb25BY3Rpb25Pbk1vZHVsZVVzaW5nSnNvbi5qcyJdLCJuYW1lcyI6WyJNaWRkbGV3YXJlQ29udHJvbGxlciIsIlN1cGVyY2xhc3MiLCJBcHBsaWNhdGlvbiIsImltcGxlbWVudGF0aW9uVHlwZSIsImNhY2hlTmFtZSIsInNldHRpbmciLCJleGVjdXRpb25UeXBlIiwidHlwZSIsImNvbnRleHQiLCJuZXh0IiwiaXNDYWxsZWROZXh0IiwibmVzdGVkVW5pdEtleSIsIm5hbWUiLCJwb3J0QXBwSW5zdGFuY2UiLCJpbnN0YW5jZSIsIm1pZGRsZXdhcmVBcnJheSIsIm1pZGRsZXdhcmVDb250cm9sbGVyIiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxpemVOZXN0ZWRVbml0IiwicHJvY2VzcyIsImVudiIsIlNaTl9ERUJVRyIsImhlYWRlciIsImRlYnVnIiwiY29uc29sZSIsImdyb3VwIiwibWFwIiwibWlkZGxld2FyZU5vZGUiLCJsb2ciLCJmaWxlIiwiZmlsZVBhdGgiLCJncm91cEVuZCIsIm1pZGRsZXdhcmUiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1ldGhvZE5hbWUiLCJ0b2tlbiIsInJlcXVlc3QiLCJyZXNwb25zZSIsImJvZHkiLCJjb25maWciLCJzdHlsZSIsInJlZCJdLCJtYXBwaW5ncyI6InlMQUFBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLG9CQUFvQixHQUFHLDZCQUE0QjtBQUNyREMsRUFBQUEsVUFBVSxFQUFFQyx5QkFEeUM7QUFFckRDLEVBQUFBLGtCQUFrQixFQUFFLFlBRmlDO0FBR3JEQyxFQUFBQSxTQUFTLEVBQUUsSUFIMEMsRUFBNUIsQ0FBM0IsQzs7Ozs7O0FBU2UsQ0FBQztBQUNkQyxFQUFBQSxPQURjLEVBQUQ7QUFFVDtBQUNKLE1BQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxJQUE1QjtBQUNBLFNBQU8sT0FBT0MsT0FBUCxFQUFnQkMsSUFBaEIsS0FBeUI7QUFDOUIsUUFBSUMsWUFBWSxHQUFHLEtBQW5COztBQUVBLFlBQVFKLGFBQVI7QUFDRSxXQUFLLHNCQUFMOztBQUVFLGNBQU1LLGFBQWEsR0FBR04sT0FBTyxDQUFDTyxJQUE5QjtBQUNBLGNBQU1DLGVBQWUsR0FBR0wsT0FBTyxDQUFDTSxRQUFoQztBQUNBLFlBQUlDLGVBQUo7QUFDQSxZQUFJQyxvQkFBb0IsR0FBRyxNQUFNaEIsb0JBQW9CLENBQUNpQixhQUFyQixDQUFtQyxFQUFFSixlQUFlLEVBQUVBLGVBQW5CLEVBQW5DLENBQWpDO0FBQ0FFLFFBQUFBLGVBQWUsR0FBRyxNQUFNQyxvQkFBb0IsQ0FBQ0Usb0JBQXJCLENBQTBDLEVBQUVQLGFBQWEsRUFBRUEsYUFBakIsRUFBMUMsQ0FBeEI7QUFDQSxZQUFJUSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBWixJQUF5QixNQUF6QixJQUFtQ2IsT0FBTyxDQUFDYyxNQUFSLENBQWVDLEtBQWYsSUFBd0IsTUFBL0QsRUFBdUU7O0FBRXJFQyxVQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBZSxzQkFBZjtBQUNBVixVQUFBQSxlQUFlLENBQUNXLEdBQWhCLENBQW9CQyxjQUFjLElBQUk7QUFDcENILFlBQUFBLE9BQU8sQ0FBQ0ksR0FBUixDQUFZRCxjQUFjLENBQUNFLElBQWYsQ0FBb0JDLFFBQWhDO0FBQ0QsV0FGRDtBQUdBTixVQUFBQSxPQUFPLENBQUNPLFFBQVI7QUFDRDtBQUNELGNBQU0sbURBQXFDaEIsZUFBckMsRUFBc0RQLE9BQXRELEVBQStEQyxJQUEvRCxDQUFOO0FBQ0FDLFFBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0E7QUFDRixXQUFLLG9CQUFMOztBQUVFLFlBQUlvQixRQUFRLEdBQUd6QixPQUFPLENBQUNPLElBQXZCO0FBQ0EsWUFBSW9CLFVBQVUsR0FBRyxNQUFNQyxPQUFPLENBQUUsR0FBRUgsUUFBUyxFQUFiLENBQVAsQ0FBdUJJLE9BQTlDO0FBQ0EsY0FBTUYsVUFBVSxDQUFDeEIsT0FBRCxFQUFVQyxJQUFWLENBQWhCO0FBQ0FDLFFBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0E7QUFDRixXQUFLLDJCQUFMO0FBQ0UsWUFBSXlCLFVBQVUsR0FBRzlCLE9BQU8sQ0FBQ08sSUFBekI7QUFDQSxZQUFJd0IsS0FBSyxHQUFHLE1BQU01QixPQUFPLENBQUNNLFFBQVIsQ0FBaUJxQixVQUFqQixFQUE2QjNCLE9BQU8sQ0FBQzZCLE9BQXJDLEVBQThDN0IsT0FBTyxDQUFDOEIsUUFBdEQsQ0FBbEI7QUFDQTlCLFFBQUFBLE9BQU8sQ0FBQytCLElBQVIsR0FBZUgsS0FBZjtBQUNBO0FBQ0YsV0FBSyxtQkFBTDtBQUNFWixRQUFBQSxPQUFPLENBQUNJLEdBQVIsQ0FBWXZCLE9BQU8sQ0FBQ08sSUFBcEI7QUFDQTtBQUNGO0FBQ0UsWUFBSU8sT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQVosSUFBeUIsTUFBN0IsRUFBcUNHLE9BQU8sQ0FBQ0ksR0FBUixDQUFZLHFEQUFaLEVBQW1FMUIsMEJBQVlzQyxNQUFaLENBQW1CQyxLQUFuQixDQUF5QkMsR0FBNUYsRUFuQ3pDOztBQXFDQSxXQUFPaEMsWUFBUDtBQUNELEdBekNEO0FBMENELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0IGFzIEFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vY2xhc3MvQXBwbGljYXRpb24uY2xhc3MuanMnXG5pbXBvcnQgaW1wbGVtZW50TWlkZGxld2FyZU9uTW9kdWxlVXNpbmdKc29uIGZyb20gJy4vaW1wbGVtZW50TWlkZGxld2FyZU9uTW9kdWxlVXNpbmdKc29uLmpzJyAvLyBNaWRkbGV3YXJlIGV4dGVuZGluZyBzZXJ2ZXIgZnVuY3Rpb25hbGl0eVxuaW1wb3J0IGNyZWF0ZVN0YXRpY0luc3RhbmNlQ2xhc3NlcyBmcm9tICdAZGVwZW5kZW5jeS9ncmFwaFRyYXZlcnNhbCdcbmxldCBNaWRkbGV3YXJlQ29udHJvbGxlciA9IGNyZWF0ZVN0YXRpY0luc3RhbmNlQ2xhc3Nlcyh7XG4gIFN1cGVyY2xhc3M6IEFwcGxpY2F0aW9uLFxuICBpbXBsZW1lbnRhdGlvblR5cGU6ICdNaWRkbGV3YXJlJyxcbiAgY2FjaGVOYW1lOiB0cnVlLFxufSlcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gU2V0dGluZyBob2xkcyB0aGUganNvbiBjb25maWd1cmF0aW9ucy4gV2hlcmUgZWFjaCBqc29uIGlzIGNvbXBvc2VkIG9mIHNldHRpbmcudHlwZSwgc2V0dGluZy5uYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCAoe1xuICBzZXR0aW5nLCAvLyBjb25kaXRpb24gbmVzdGVkIHVuaXQgY2FsbGJhY2sgcHJvcGVydGllcydzIG9wdGlvbnMuXG59KSA9PiB7XG4gIGxldCBleGVjdXRpb25UeXBlID0gc2V0dGluZy50eXBlIC8vIGNvbmRpdGlvbiBjYWxsYmFjayBwcm9wZXJ0eVxuICByZXR1cm4gYXN5bmMgKGNvbnRleHQsIG5leHQpID0+IHtcbiAgICBsZXQgaXNDYWxsZWROZXh0ID0gZmFsc2VcbiAgICAvLyBjb25zb2xlLmxvZyhzZXR0aW5nKVxuICAgIHN3aXRjaCAoZXhlY3V0aW9uVHlwZSkge1xuICAgICAgY2FzZSAnbWlkZGxld2FyZU5lc3RlZFVuaXQnOlxuICAgICAgICAvLyBhd2FpdCBjb250ZXh0Lmluc3RhbmNlLmhhbmRsZU1pZGRsZXdhcmVOZXN0ZWRVbml0KHNldHRpbmcubmFtZSkgLy8gYW5vdGhlciB3YXkgaXMgdG8gY3JlYXRlIGEgbWV0aG9kIGluIHRoZSBpbnN0YW5jZSBjbGFzcy5cbiAgICAgICAgY29uc3QgbmVzdGVkVW5pdEtleSA9IHNldHRpbmcubmFtZVxuICAgICAgICBjb25zdCBwb3J0QXBwSW5zdGFuY2UgPSBjb250ZXh0Lmluc3RhbmNlXG4gICAgICAgIGxldCBtaWRkbGV3YXJlQXJyYXlcbiAgICAgICAgbGV0IG1pZGRsZXdhcmVDb250cm9sbGVyID0gYXdhaXQgTWlkZGxld2FyZUNvbnRyb2xsZXIuY3JlYXRlQ29udGV4dCh7IHBvcnRBcHBJbnN0YW5jZTogcG9ydEFwcEluc3RhbmNlIH0pXG4gICAgICAgIG1pZGRsZXdhcmVBcnJheSA9IGF3YWl0IG1pZGRsZXdhcmVDb250cm9sbGVyLmluaXRpYWxpemVOZXN0ZWRVbml0KHsgbmVzdGVkVW5pdEtleTogbmVzdGVkVW5pdEtleSB9KVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuU1pOX0RFQlVHID09ICd0cnVlJyAmJiBjb250ZXh0LmhlYWRlci5kZWJ1ZyA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAvLyBwcmludCBtaWRkbGV3YXJlIGZpbGUgcGF0aHNcbiAgICAgICAgICBjb25zb2xlLmdyb3VwKGDwn42KIE1pZGRsZXdhcmUgQXJyYXk6YClcbiAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkubWFwKG1pZGRsZXdhcmVOb2RlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1pZGRsZXdhcmVOb2RlLmZpbGUuZmlsZVBhdGgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBpbXBsZW1lbnRNaWRkbGV3YXJlT25Nb2R1bGVVc2luZ0pzb24obWlkZGxld2FyZUFycmF5KShjb250ZXh0LCBuZXh0KVxuICAgICAgICBpc0NhbGxlZE5leHQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdmdW5jdGlvbk1pZGRsZXdhcmUnOlxuICAgICAgICAvLyBhd2FpdCBjb250ZXh0Lmluc3RhbmNlLmhhbmRsZUZ1bmN0aW9uTWlkZGxld2FyZShzZXR0aW5nLm5hbWUpXG4gICAgICAgIGxldCBmaWxlUGF0aCA9IHNldHRpbmcubmFtZVxuICAgICAgICBsZXQgbWlkZGxld2FyZSA9IGF3YWl0IHJlcXVpcmUoYCR7ZmlsZVBhdGh9YCkuZGVmYXVsdFxuICAgICAgICBhd2FpdCBtaWRkbGV3YXJlKGNvbnRleHQsIG5leHQpXG4gICAgICAgIGlzQ2FsbGVkTmV4dCA9IHRydWVcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BvcnRDbGFzc01ldGhvZE1pZGRsZXdhcmUnOlxuICAgICAgICBsZXQgbWV0aG9kTmFtZSA9IHNldHRpbmcubmFtZVxuICAgICAgICBsZXQgdG9rZW4gPSBhd2FpdCBjb250ZXh0Lmluc3RhbmNlW21ldGhvZE5hbWVdKGNvbnRleHQucmVxdWVzdCwgY29udGV4dC5yZXNwb25zZSlcbiAgICAgICAgY29udGV4dC5ib2R5ID0gdG9rZW5cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbnNvbGVMb2dNZXNzYWdlJzpcbiAgICAgICAgY29uc29sZS5sb2coc2V0dGluZy5uYW1lKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52LlNaTl9ERUJVRyA9PSAndHJ1ZScpIGNvbnNvbGUubG9nKFwiU1pOIC0gJWMgU2V0dGluZyAoY2FsbGJhY2spIGRvZXNuJ3QgbWF0Y2ggYW55IGtpbmQuXCIsIEFwcGxpY2F0aW9uLmNvbmZpZy5zdHlsZS5yZWQpXG4gICAgfVxuICAgIHJldHVybiBpc0NhbGxlZE5leHRcbiAgfVxufVxuIl19