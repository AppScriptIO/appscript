"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.microservice = microservice;var _ApplicationClass = _interopRequireDefault(require("../class/Application.class.js"));
var _initializeDatabaseData = _interopRequireDefault(require("../utilityFunction/database/initializeDatabaseData.js"));

var _initializePortServer = _interopRequireDefault(require("../class/port/openIdConnect/initializePortServer.js"));
var _initializePortServer2 = _interopRequireDefault(require("../class/port/webappUI/initializePortServer.js"));
var _initializePortServer3 = _interopRequireDefault(require("../class/port/staticContent/initializePortServer.js"));
var _initializePortServer4 = _interopRequireDefault(require("../class/port/api/initializePortServer.js"));
var _initializePortServer5 = _interopRequireDefault(require("../class/port/webSocket/initializePortServer.js"));

async function microservice({ configuration, entrypointConditionKey, databaseData }) {
  await _ApplicationClass.default.eventEmitter.on('initializationEnd', async () => {
    await (0, _initializeDatabaseData.default)({
      databaseVersion: configuration.databaseVersion,
      databaseData })();

    console.groupCollapsed('Port classes initialization:');

    await (0, _initializePortServer.default)()();
    await (0, _initializePortServer2.default)()();
    await (0, _initializePortServer3.default)({ entrypointConditionKey })();
    await (0, _initializePortServer4.default)()();
    await (0, _initializePortServer5.default)()();
    console.groupEnd();
  });
  await _ApplicationClass.default.initialize();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9taWNyb3NlcnZpY2UvZW50cnlwb2ludC5qcyJdLCJuYW1lcyI6WyJtaWNyb3NlcnZpY2UiLCJjb25maWd1cmF0aW9uIiwiZW50cnlwb2ludENvbmRpdGlvbktleSIsImRhdGFiYXNlRGF0YSIsIkFwcGxpY2F0aW9uIiwiZXZlbnRFbWl0dGVyIiwib24iLCJkYXRhYmFzZVZlcnNpb24iLCJjb25zb2xlIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsImluaXRpYWxpemUiXSwibWFwcGluZ3MiOiJvTUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUEsWUFBZixDQUE0QixFQUFFQyxhQUFGLEVBQWlCQyxzQkFBakIsRUFBeUNDLFlBQXpDLEVBQTVCLEVBQXFGO0FBQ25GLFFBQU1DLDBCQUFZQyxZQUFaLENBQXlCQyxFQUF6QixDQUE0QixtQkFBNUIsRUFBaUQsWUFBWTtBQUNqRSxVQUFNLHFDQUF1QjtBQUMzQkMsTUFBQUEsZUFBZSxFQUFFTixhQUFhLENBQUNNLGVBREo7QUFFM0JKLE1BQUFBLFlBRjJCLEVBQXZCLEdBQU47O0FBSUFLLElBQUFBLE9BQU8sQ0FBQ0MsY0FBUixDQUF1Qiw4QkFBdkI7O0FBRUEsVUFBTSxzQ0FBTjtBQUNBLFVBQU0sdUNBQU47QUFDQSxVQUFNLG9DQUFrQyxFQUFFUCxzQkFBRixFQUFsQyxHQUFOO0FBQ0EsVUFBTSx1Q0FBTjtBQUNBLFVBQU0sdUNBQU47QUFDQU0sSUFBQUEsT0FBTyxDQUFDRSxRQUFSO0FBQ0QsR0FiSyxDQUFOO0FBY0EsUUFBTU4sMEJBQVlPLFVBQVosRUFBTjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmYXVsdCBhcyBBcHBsaWNhdGlvbiB9IGZyb20gJy4uL2NsYXNzL0FwcGxpY2F0aW9uLmNsYXNzLmpzJ1xuaW1wb3J0IGluaXRpYWxpemVEYXRhYmFzZURhdGEgZnJvbSAnLi4vdXRpbGl0eUZ1bmN0aW9uL2RhdGFiYXNlL2luaXRpYWxpemVEYXRhYmFzZURhdGEuanMnXG5pbXBvcnQgb0F1dGhJbml0aWFsaXplUG9ydFNlcnZlciBmcm9tICcuLi9jbGFzcy9wb3J0L29BdXRoL2luaXRpYWxpemVQb3J0U2VydmVyLmpzJ1xuaW1wb3J0IG9wZW5JZENvbm5lY3RJbml0aWFsaXplUG9ydFNlcnZlciBmcm9tICcuLi9jbGFzcy9wb3J0L29wZW5JZENvbm5lY3QvaW5pdGlhbGl6ZVBvcnRTZXJ2ZXIuanMnXG5pbXBvcnQgd2ViYXBwVUlJbml0aWFsaXplUG9ydFNlcnZlciBmcm9tICcuLi9jbGFzcy9wb3J0L3dlYmFwcFVJL2luaXRpYWxpemVQb3J0U2VydmVyLmpzJ1xuaW1wb3J0IHN0YXRpY0NvbnRlbnRJbml0aWFsaXplUG9ydFNlcnZlciBmcm9tICcuLi9jbGFzcy9wb3J0L3N0YXRpY0NvbnRlbnQvaW5pdGlhbGl6ZVBvcnRTZXJ2ZXIuanMnXG5pbXBvcnQgYXBpSW5pdGlhbGl6ZVBvcnRTZXJ2ZXIgZnJvbSAnLi4vY2xhc3MvcG9ydC9hcGkvaW5pdGlhbGl6ZVBvcnRTZXJ2ZXIuanMnXG5pbXBvcnQgd2Vic29ja2V0SW5pdGlhbGl6ZVBvcnRTZXJ2ZXIgZnJvbSAnLi4vY2xhc3MvcG9ydC93ZWJTb2NrZXQvaW5pdGlhbGl6ZVBvcnRTZXJ2ZXIuanMnXG5cbmFzeW5jIGZ1bmN0aW9uIG1pY3Jvc2VydmljZSh7IGNvbmZpZ3VyYXRpb24sIGVudHJ5cG9pbnRDb25kaXRpb25LZXksIGRhdGFiYXNlRGF0YSB9KSB7XG4gIGF3YWl0IEFwcGxpY2F0aW9uLmV2ZW50RW1pdHRlci5vbignaW5pdGlhbGl6YXRpb25FbmQnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgaW5pdGlhbGl6ZURhdGFiYXNlRGF0YSh7XG4gICAgICBkYXRhYmFzZVZlcnNpb246IGNvbmZpZ3VyYXRpb24uZGF0YWJhc2VWZXJzaW9uLFxuICAgICAgZGF0YWJhc2VEYXRhLFxuICAgIH0pKClcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdQb3J0IGNsYXNzZXMgaW5pdGlhbGl6YXRpb246JylcbiAgICAvLyBhd2FpdCBvQXV0aEluaXRpYWxpemVQb3J0U2VydmVyKCkoKVxuICAgIGF3YWl0IG9wZW5JZENvbm5lY3RJbml0aWFsaXplUG9ydFNlcnZlcigpKClcbiAgICBhd2FpdCB3ZWJhcHBVSUluaXRpYWxpemVQb3J0U2VydmVyKCkoKVxuICAgIGF3YWl0IHN0YXRpY0NvbnRlbnRJbml0aWFsaXplUG9ydFNlcnZlcih7IGVudHJ5cG9pbnRDb25kaXRpb25LZXkgfSkoKVxuICAgIGF3YWl0IGFwaUluaXRpYWxpemVQb3J0U2VydmVyKCkoKVxuICAgIGF3YWl0IHdlYnNvY2tldEluaXRpYWxpemVQb3J0U2VydmVyKCkoKVxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKVxuICB9KVxuICBhd2FpdCBBcHBsaWNhdGlvbi5pbml0aWFsaXplKCkgLy8gYWxsb3dzIGNhbGxpbmcgYSBjaGlsZCBjbGFzcyBmcm9tIGl0cyBwYXJlbnQgY2xhc3MuXG59XG5cbmV4cG9ydCB7IG1pY3Jvc2VydmljZSB9XG5cbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4vLyBUT0RPOiBjaGFuZ2UgYmFzZSB1cmwgYW5kIGFjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbiBoZWFkZXIgYWNjb3JkaW5nIHRvIERFUExPWU1FTlQgZW52aXJvbm1lbnRcblxuLy8gVE9ETzogQ3VzdG9tIERhdGFzZXQgU2NoZW1hL3N0cnVjdHVyZS9ibHVlcHJpbnQsIGRhdGEgZG9jdW1lbnQsIGNzdXN0b20gZGF0YXNldCB0eXBlLCBjdXN0b20gZmllbGRzLCBjdXN0b20gY29udGVudCB0eXBlLlxuLy8gVE9ETzogQ29uZGl0aW9uIFRyZWU6XG4vLyDigKIgQWJpbGl0eSB0byBkZWNpZGUgaW5zZXJ0aW9uIHBvc2l0aW9uIG9mIHVuaXQgaW4gc3VidHJlZS4gZS5nLiBiZWZvcmUsIGFmdGVyLCBmaXJzdCwgbGFzdC5cbi8vIOKAoiBDaGVjayBub24gaW1tZWRpYXRlIGNoaWxkcmVuIGZvciBlYWNoIGluc2VydGlvbiBwb2ludCB0byBpbnNlcnQgdGhlbSBpbiB0aGVpciBjb3JyZWN0IGRlc3RpbmF0aW9uLlxuLy8g4oCiIERlZmluZSB1bmlxdWUga2V5IGZvciBlYWNoIGNoaWxkLCB0byBhbGxvdyBpbnNlcnRpb24gaW50byBvdGhlciBpbnNlcnRlZCBjaGlsZHJlbi4gaS5lLiBleHRlbmRpbmcgZXhpc3RpbmcgdHJlZXMgd2l0aCBvdGhlciB0cmVlcyBhbmQgY2hpbGRyZW4uXG5cbi8vIFRPRE86IE1lcmdlIFJldXNhYmxlTmVzdGVkVW5pdCBpbXBsZW1lbnRhdGlvbnMgYW5kIG9yZ2FuaXplIHRoZW0gYWNjb3JkaW5nIHRvIHRoZSByZXF1aXJlbWVudHMgbGlrZSByZXR1cm5lZCB2YWx1ZSBhbmQgYWxnb3JpdGhtIGV4ZWN1dGVkIG9uIHRoZSBuZXN0ZWQgdHJlZS5cbiJdfQ==