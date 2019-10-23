"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.initialize = initialize;function initialize({ targetProjectConfig }) {
  let DEPLOYMENT = process.env.DEPLOYMENT || 'development';

  return {
    port: DEPLOYMENT == 'development' ? '9903' : process.env.PORT || 80,
    ssl: DEPLOYMENT == 'development' ? true : false,
    DISTRIBUTION: process.env.DISTRIBUTION || false,
    HOST: process.env.HOST || 'localhost',
    PROTOCOL: DEPLOYMENT == 'development' ? 'http://' : 'https://',
    SOCKET_PROTOCOL: DEPLOYMENT == 'development' ? 'ws://' : 'wss://',
    rethinkdb: {
      host: 'rethinkdb',
      port: 28015,
      database: 'webapp' } };


}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9zZXJ2aWNlL3NlcnZlckNvbmZpZy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwidGFyZ2V0UHJvamVjdENvbmZpZyIsIkRFUExPWU1FTlQiLCJwcm9jZXNzIiwiZW52IiwicG9ydCIsIlBPUlQiLCJzc2wiLCJESVNUUklCVVRJT04iLCJIT1NUIiwiUFJPVE9DT0wiLCJTT0NLRVRfUFJPVE9DT0wiLCJyZXRoaW5rZGIiLCJob3N0IiwiZGF0YWJhc2UiXSwibWFwcGluZ3MiOiIyR0FBTyxTQUFTQSxVQUFULENBQW9CLEVBQUVDLG1CQUFGLEVBQXBCLEVBQTZDO0FBQ2xELE1BQUlDLFVBQVUsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVosSUFBMEIsYUFBM0M7O0FBRUEsU0FBTztBQUNMRyxJQUFBQSxJQUFJLEVBQUVILFVBQVUsSUFBSSxhQUFkLEdBQThCLE1BQTlCLEdBQXVDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWixJQUFvQixFQUQ1RDtBQUVMQyxJQUFBQSxHQUFHLEVBQUVMLFVBQVUsSUFBSSxhQUFkLEdBQThCLElBQTlCLEdBQXFDLEtBRnJDO0FBR0xNLElBQUFBLFlBQVksRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlJLFlBQVosSUFBNEIsS0FIckM7QUFJTEMsSUFBQUEsSUFBSSxFQUFFTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWixJQUFvQixXQUpyQjtBQUtMQyxJQUFBQSxRQUFRLEVBQUVSLFVBQVUsSUFBSSxhQUFkLEdBQThCLFNBQTlCLEdBQTBDLFVBTC9DO0FBTUxTLElBQUFBLGVBQWUsRUFBRVQsVUFBVSxJQUFJLGFBQWQsR0FBOEIsT0FBOUIsR0FBd0MsUUFOcEQ7QUFPTFUsSUFBQUEsU0FBUyxFQUFFO0FBQ1RDLE1BQUFBLElBQUksRUFBRSxXQURHO0FBRVRSLE1BQUFBLElBQUksRUFBRSxLQUZHO0FBR1RTLE1BQUFBLFFBQVEsRUFBRSxRQUhELEVBUE4sRUFBUDs7O0FBYUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSh7IHRhcmdldFByb2plY3RDb25maWcgfSkge1xyXG4gIGxldCBERVBMT1lNRU5UID0gcHJvY2Vzcy5lbnYuREVQTE9ZTUVOVCB8fCAnZGV2ZWxvcG1lbnQnXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwb3J0OiBERVBMT1lNRU5UID09ICdkZXZlbG9wbWVudCcgPyAnOTkwMycgOiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwLFxyXG4gICAgc3NsOiBERVBMT1lNRU5UID09ICdkZXZlbG9wbWVudCcgPyB0cnVlIDogZmFsc2UsXHJcbiAgICBESVNUUklCVVRJT046IHByb2Nlc3MuZW52LkRJU1RSSUJVVElPTiB8fCBmYWxzZSxcclxuICAgIEhPU1Q6IHByb2Nlc3MuZW52LkhPU1QgfHwgJ2xvY2FsaG9zdCcsXHJcbiAgICBQUk9UT0NPTDogREVQTE9ZTUVOVCA9PSAnZGV2ZWxvcG1lbnQnID8gJ2h0dHA6Ly8nIDogJ2h0dHBzOi8vJyxcclxuICAgIFNPQ0tFVF9QUk9UT0NPTDogREVQTE9ZTUVOVCA9PSAnZGV2ZWxvcG1lbnQnID8gJ3dzOi8vJyA6ICd3c3M6Ly8nLFxyXG4gICAgcmV0aGlua2RiOiB7XHJcbiAgICAgIGhvc3Q6ICdyZXRoaW5rZGInLFxyXG4gICAgICBwb3J0OiAyODAxNSxcclxuICAgICAgZGF0YWJhc2U6ICd3ZWJhcHAnLFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuIl19