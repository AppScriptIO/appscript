"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.initialize = void 0;

var _http = _interopRequireDefault(require("http"));

var _koaViews = _interopRequireDefault(require("koa-views"));
var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));
var _oauth2Server = _interopRequireDefault(require("oauth2-server"));
var _oAuth2ServerModel = _interopRequireDefault(require("./oAuth2Server.model.js"));
var _consoleLogStyleConfig = _interopRequireDefault(require("../../utility/consoleLogStyleConfig.js"));

let MiddlewareController = createStaticInstanceClasses({ implementationType: 'Middleware', cacheName: true });
let ConditionController = createStaticInstanceClasses({ implementationType: 'Condition', cacheName: true });

const initialize = async () => {
  let Request = _oauth2Server.default.Request;
  let Response = _oauth2Server.default.Response;



  let oAuth2Server;
  let entrypointSetting = { defaultConditionTreeKey: 'XYZ' };




  _oauth2Server.default = (_oauth2Server.default, function () {throw new Error('"' + "OAuth2Server" + '" is read-only.');}());
  oAuth2Server = new _oauth2Server.default({
    debug: true,



    model: _oAuth2ServerModel.default });



  serverKoa.use((0, _koaViews.default)('/', { map: { html: 'underscore', js: 'underscore' } }));
  let middlewareArray = [
  (0, _koaBodyparser.default)(),
  async (context, next) => {


    await context.set('Access-Control-Allow-Origin', '*');
    await context.set('connection', 'keep-alive');
    await next();
  },
  async (context, next) => {


    let middlewareController = await MiddlewareController.createContext({ portAppInstance: context.instance });
    let middlewareArray = await middlewareController.initializeNestedUnit({ nestedUnitKey: 'd908335b-b60a-4a00-8c33-b9bc4a9c64ec' });
    await implementMiddlewareOnModuleUsingJson(middlewareArray)(context, next);



  },
  async (context, next) => {



    let conditionController = await ConditionController.createContext({ portAppInstance: context.instance });

    let entrypointConditionTree = '0681f25c-4c00-4295-b12a-6ab81a3cb440';
    if (process.env.SZN_DEBUG == 'true' && context.header.debug == 'true') console.log(`🍊 Entrypoint Condition Key: ${entrypointConditionTree} \n \n`);
    let callback = await conditionController.initializeNestedUnit({ nestedUnitKey: entrypointConditionTree });
    if (process.env.SZN_DEBUG == 'true' && context.header.debug == 'true') console.log(`🔀✔️ Choosen callback is: %c ${callback.name}`, _consoleLogStyleConfig.default.style.green);

    await implementConditionActionOnModuleUsingJson({ setting: callback })(context, next);

    if (callback && callback.name == 'post') {

      let x = await Class.authenticate(context.request, context.response);
      if (x) await next();
    }
  },
  async (context, next) => {
    context.status = 404;

    await next();
  }];

  middlewareArray.forEach(middleware => serverKoa.use(middleware));

  _http.default.createServer(self.serverKoa.callback()).listen(self.port, () => {
    console.log(`☕%c ${self.name} listening on port ${self.port}`, _consoleLogStyleConfig.default.style.green);


    if (process.send !== undefined) {

      if (self.config.DEPLOYMENT == 'development') process.send({ message: 'Server listening' });
    }
  });

};exports.initialize = initialize;






function authenticateMiddleware() {
  return async (request, response) => {
    console.log('authenticate function');

    let options = {
      scope: undefined,
      addAcceptedScopesHeader: true,
      addAuthorizedScopesHeader: true,
      allowBearerTokensInQueryString: false };

    let oAuthRequest = new Request(request);
    let oAuthResponse = new Response(response);
    let tokenData = await self.oAuth2Server.authenticate(oAuthRequest, oAuthResponse, options).catch(error => {
      console.log(error);
    });
    return tokenData;
  };
}








async function authorize(request, response) {
  console.log('authorize function');

  let options = {
    authenticateHandler: {
      handle: data => {


        return { username: 'example' };
      } },

    authorizationCodeLifetime: 300 };


  let oAuthRequest = new Request(request);
  let oAuthResponse = new Response(response);
  let authorizationCode = await self.oAuth2Server.authorize(oAuthRequest, oAuthResponse, options).catch(error => console.log(error));
  return authorizationCode;
}







async function token(request, response) {
  console.log('token function');
  let options = {
    accessTokenLifetime: 3600,
    refreshTokenLifetime: 1209600,
    allowExtendedTokenAttributes: true,
    alwaysIssueNewRefreshToken: false,
    requireClientAuthentication: {

      password: false,
      authorization_code: true,
      client_credentials: true,
      refresh_token: false } };



  let oAuthRequest = new Request(request);
  let oAuthResponse = new Response(response);
  let tokenData = await self.oAuth2Server.token(oAuthRequest, oAuthResponse, options).catch(error => {
    console.log('token function:' + error);
  });
  return tokenData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9zZXJ2aWNlL29BdXRoL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1pZGRsZXdhcmVDb250cm9sbGVyIiwiY3JlYXRlU3RhdGljSW5zdGFuY2VDbGFzc2VzIiwiaW1wbGVtZW50YXRpb25UeXBlIiwiY2FjaGVOYW1lIiwiQ29uZGl0aW9uQ29udHJvbGxlciIsImluaXRpYWxpemUiLCJSZXF1ZXN0IiwiT0F1dGgyU2VydmVyIiwiUmVzcG9uc2UiLCJvQXV0aDJTZXJ2ZXIiLCJlbnRyeXBvaW50U2V0dGluZyIsImRlZmF1bHRDb25kaXRpb25UcmVlS2V5IiwiZGVidWciLCJtb2RlbCIsIm9BdXRoMlNlcnZlck1vZGVsIiwic2VydmVyS29hIiwidXNlIiwibWFwIiwiaHRtbCIsImpzIiwibWlkZGxld2FyZUFycmF5IiwiY29udGV4dCIsIm5leHQiLCJzZXQiLCJtaWRkbGV3YXJlQ29udHJvbGxlciIsImNyZWF0ZUNvbnRleHQiLCJwb3J0QXBwSW5zdGFuY2UiLCJpbnN0YW5jZSIsImluaXRpYWxpemVOZXN0ZWRVbml0IiwibmVzdGVkVW5pdEtleSIsImltcGxlbWVudE1pZGRsZXdhcmVPbk1vZHVsZVVzaW5nSnNvbiIsImNvbmRpdGlvbkNvbnRyb2xsZXIiLCJlbnRyeXBvaW50Q29uZGl0aW9uVHJlZSIsInByb2Nlc3MiLCJlbnYiLCJTWk5fREVCVUciLCJoZWFkZXIiLCJjb25zb2xlIiwibG9nIiwiY2FsbGJhY2siLCJuYW1lIiwiY29uc29sZUxvZ1N0eWxlIiwic3R5bGUiLCJncmVlbiIsImltcGxlbWVudENvbmRpdGlvbkFjdGlvbk9uTW9kdWxlVXNpbmdKc29uIiwic2V0dGluZyIsIngiLCJDbGFzcyIsImF1dGhlbnRpY2F0ZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN0YXR1cyIsImZvckVhY2giLCJtaWRkbGV3YXJlIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsInNlbGYiLCJsaXN0ZW4iLCJwb3J0Iiwic2VuZCIsInVuZGVmaW5lZCIsImNvbmZpZyIsIkRFUExPWU1FTlQiLCJtZXNzYWdlIiwiYXV0aGVudGljYXRlTWlkZGxld2FyZSIsIm9wdGlvbnMiLCJzY29wZSIsImFkZEFjY2VwdGVkU2NvcGVzSGVhZGVyIiwiYWRkQXV0aG9yaXplZFNjb3Blc0hlYWRlciIsImFsbG93QmVhcmVyVG9rZW5zSW5RdWVyeVN0cmluZyIsIm9BdXRoUmVxdWVzdCIsIm9BdXRoUmVzcG9uc2UiLCJ0b2tlbkRhdGEiLCJjYXRjaCIsImVycm9yIiwiYXV0aG9yaXplIiwiYXV0aGVudGljYXRlSGFuZGxlciIsImhhbmRsZSIsImRhdGEiLCJ1c2VybmFtZSIsImF1dGhvcml6YXRpb25Db2RlTGlmZXRpbWUiLCJhdXRob3JpemF0aW9uQ29kZSIsInRva2VuIiwiYWNjZXNzVG9rZW5MaWZldGltZSIsInJlZnJlc2hUb2tlbkxpZmV0aW1lIiwiYWxsb3dFeHRlbmRlZFRva2VuQXR0cmlidXRlcyIsImFsd2F5c0lzc3VlTmV3UmVmcmVzaFRva2VuIiwicmVxdWlyZUNsaWVudEF1dGhlbnRpY2F0aW9uIiwicGFzc3dvcmQiLCJhdXRob3JpemF0aW9uX2NvZGUiLCJjbGllbnRfY3JlZGVudGlhbHMiLCJyZWZyZXNoX3Rva2VuIl0sIm1hcHBpbmdzIjoiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsb0JBQW9CLEdBQUdDLDJCQUEyQixDQUFDLEVBQUVDLGtCQUFrQixFQUFFLFlBQXRCLEVBQW9DQyxTQUFTLEVBQUUsSUFBL0MsRUFBRCxDQUF0RDtBQUNBLElBQUlDLG1CQUFtQixHQUFHSCwyQkFBMkIsQ0FBQyxFQUFFQyxrQkFBa0IsRUFBRSxXQUF0QixFQUFtQ0MsU0FBUyxFQUFFLElBQTlDLEVBQUQsQ0FBckQ7O0FBRU8sTUFBTUUsVUFBVSxHQUFHLFlBQVk7QUFDcEMsTUFBSUMsT0FBTyxHQUFHQyxzQkFBYUQsT0FBM0I7QUFDQSxNQUFJRSxRQUFRLEdBQUdELHNCQUFhQyxRQUE1Qjs7OztBQUlBLE1BQUlDLFlBQUo7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LEdBQVIsQ0FBWSxnQkFBWjtBQUNBLE1BQUkyQixPQUFPLEdBQUc7QUFDWmtCLElBQUFBLG1CQUFtQixFQUFFLElBRFQ7QUFFWkMsSUFBQUEsb0JBQW9CLEVBQUUsT0FGVjtBQUdaQyxJQUFBQSw0QkFBNEIsRUFBRSxJQUhsQjtBQUlaQyxJQUFBQSwwQkFBMEIsRUFBRSxLQUpoQjtBQUtaQyxJQUFBQSwyQkFBMkIsRUFBRTs7QUFFM0JDLE1BQUFBLFFBQVEsRUFBRSxLQUZpQjtBQUczQkMsTUFBQUEsa0JBQWtCLEVBQUUsSUFITztBQUkzQkMsTUFBQUEsa0JBQWtCLEVBQUUsSUFKTztBQUszQkMsTUFBQUEsYUFBYSxFQUFFLEtBTFksRUFMakIsRUFBZDs7OztBQWNBLE1BQUlyQixZQUFZLEdBQUcsSUFBSWhFLE9BQUosQ0FBWTJDLE9BQVosQ0FBbkI7QUFDQSxNQUFJc0IsYUFBYSxHQUFHLElBQUkvRCxRQUFKLENBQWEwQyxRQUFiLENBQXBCO0FBQ0EsTUFBSXNCLFNBQVMsR0FBRyxNQUFNaEIsSUFBSSxDQUFDL0MsWUFBTCxDQUFrQnlFLEtBQWxCLENBQXdCWixZQUF4QixFQUFzQ0MsYUFBdEMsRUFBcUROLE9BQXJELEVBQThEUSxLQUE5RCxDQUFvRUMsS0FBSyxJQUFJO0FBQ2pHckMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQW9Cb0MsS0FBaEM7QUFDRCxHQUZxQixDQUF0QjtBQUdBLFNBQU9GLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWxlc3lzdGVtIGZyb20gJ2ZzJ1xuaW1wb3J0IGh0dHBzIGZyb20gJ2h0dHBzJ1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcbmltcG9ydCB1bmRlcnNjb3JlIGZyb20gJ3VuZGVyc2NvcmUnXG5pbXBvcnQgdmlld3MgZnJvbSAna29hLXZpZXdzJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlwYXJzZXInXG5pbXBvcnQgT0F1dGgyU2VydmVyIGZyb20gJ29hdXRoMi1zZXJ2ZXInXG5pbXBvcnQgb0F1dGgyU2VydmVyTW9kZWwgZnJvbSAnLi9vQXV0aDJTZXJ2ZXIubW9kZWwuanMnXG5pbXBvcnQgY29uc29sZUxvZ1N0eWxlIGZyb20gJy4uLy4uL3V0aWxpdHkvY29uc29sZUxvZ1N0eWxlQ29uZmlnLmpzJ1xuXG5sZXQgTWlkZGxld2FyZUNvbnRyb2xsZXIgPSBjcmVhdGVTdGF0aWNJbnN0YW5jZUNsYXNzZXMoeyBpbXBsZW1lbnRhdGlvblR5cGU6ICdNaWRkbGV3YXJlJywgY2FjaGVOYW1lOiB0cnVlIH0pXG5sZXQgQ29uZGl0aW9uQ29udHJvbGxlciA9IGNyZWF0ZVN0YXRpY0luc3RhbmNlQ2xhc3Nlcyh7IGltcGxlbWVudGF0aW9uVHlwZTogJ0NvbmRpdGlvbicsIGNhY2hlTmFtZTogdHJ1ZSB9KVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9IGFzeW5jICgpID0+IHtcbiAgbGV0IFJlcXVlc3QgPSBPQXV0aDJTZXJ2ZXIuUmVxdWVzdFxuICBsZXQgUmVzcG9uc2UgPSBPQXV0aDJTZXJ2ZXIuUmVzcG9uc2VcblxuICAvLyBmb3IgZW5kcG9pbnQgcmVxdWVzdHMgZXhhbXBsZXMgZm9yIGVhY2ggZ3JhbnQgdHlwZSBtYWRlIC0gc2VlOiBodHRwczovL2Fhcm9ucGFyZWNraS5jb20vb2F1dGgtMi1zaW1wbGlmaWVkLyNvdGhlci1hcHAtdHlwZXMpXG4gIC8vIFJlZ2FyZGluZyByZXF1ZXN0IC0gc2hvdWxkIGJlIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICBsZXQgb0F1dGgyU2VydmVyIC8vIG9hdXRoMi1zZXJ2ZXIgaW5zdGFuY2VcbiAgbGV0IGVudHJ5cG9pbnRTZXR0aW5nID0geyBkZWZhdWx0Q29uZGl0aW9uVHJlZUtleTogJ1hZWicgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIG9BdXRoMiBzZXJ2ZXJcbiAgICovXG4gIE9BdXRoMlNlcnZlciA9IE9BdXRoMlNlcnZlclxuICBvQXV0aDJTZXJ2ZXIgPSBuZXcgT0F1dGgyU2VydmVyKHtcbiAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAvLyBncmFudHM6IFsnYXV0aG9yaXphdGlvbl9jb2RlJywgJ2NsaWVudF9jcmVkZW50aWFscycsICdwYXNzd29yZCcsICdyZWZyZXNoX3Rva2VuJ10gLy8gQ2Fubm90IHNlZW0gdG8gZmluZCB0aGlzIG9wdGlvbiBpbiBkb2NzLlxuICAgIC8vIGNsaWVudElkUmVnZXg6ICdeW0EtWmEtejAtOS1fXFxeXXs1LDMwfSQnLCAvLyBjbGllbnQgaWQgc2hvdWxkIGJlIGNvbXBsaWFudCB3aXRoIHRoZSByZWdleC5cbiAgICAvLyBhY2Nlc3NUb2tlbkxpZmV0aW1lOiA2MCAqIDYwICogMjQsIC8vIHNldCB0aGUgYWNjZXNzIHRva2VuIHRvIGxhc3QgZm9yIDI0IGhvdXJzXG4gICAgbW9kZWw6IG9BdXRoMlNlcnZlck1vZGVsLFxuICB9KVxuXG4gIC8vIFRlbXBsYXRpbmcgZW5naW5lICYgYXNzb2NpYXRlZCBleHRlbnRpb24uXG4gIHNlcnZlcktvYS51c2Uodmlld3MoJy8nLCB7IG1hcDogeyBodG1sOiAndW5kZXJzY29yZScsIGpzOiAndW5kZXJzY29yZScgfSB9KSlcbiAgbGV0IG1pZGRsZXdhcmVBcnJheSA9IFtcbiAgICBib2R5UGFyc2VyKCksXG4gICAgYXN5bmMgKGNvbnRleHQsIG5leHQpID0+IHtcbiAgICAgIC8vIGluc3RhbmNlLm1pZGRsZXdhcmVBcnJheS5wdXNoKG1pZGRsZXdhcmUpXG4gICAgICAvLyBhd2FpdCBjb250ZXh0LnJlcS5zZXRUaW1lb3V0KDApOyAvLyBjaGFuZ2VzIGRlZmF1bHQgTm9kZWpzIHRpbWVvdXQgKGRlZmF1bHQgMTIwIHNlY29uZHMpLlxuICAgICAgYXdhaXQgY29udGV4dC5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgICAgIGF3YWl0IGNvbnRleHQuc2V0KCdjb25uZWN0aW9uJywgJ2tlZXAtYWxpdmUnKVxuICAgICAgYXdhaXQgbmV4dCgpXG4gICAgfSxcbiAgICBhc3luYyAoY29udGV4dCwgbmV4dCkgPT4ge1xuICAgICAgLy8gbGV0IHdhaXQgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbiAgICAgIC8vIGF3YWl0IHdhaXQoNTAwKVxuICAgICAgbGV0IG1pZGRsZXdhcmVDb250cm9sbGVyID0gYXdhaXQgTWlkZGxld2FyZUNvbnRyb2xsZXIuY3JlYXRlQ29udGV4dCh7IHBvcnRBcHBJbnN0YW5jZTogY29udGV4dC5pbnN0YW5jZSB9KVxuICAgICAgbGV0IG1pZGRsZXdhcmVBcnJheSA9IGF3YWl0IG1pZGRsZXdhcmVDb250cm9sbGVyLmluaXRpYWxpemVOZXN0ZWRVbml0KHsgbmVzdGVkVW5pdEtleTogJ2Q5MDgzMzViLWI2MGEtNGEwMC04YzMzLWI5YmM0YTljNjRlYycgfSlcbiAgICAgIGF3YWl0IGltcGxlbWVudE1pZGRsZXdhcmVPbk1vZHVsZVVzaW5nSnNvbihtaWRkbGV3YXJlQXJyYXkpKGNvbnRleHQsIG5leHQpXG5cbiAgICAgIC8vIGNvbnRleHQuaW5zdGFuY2UuY29uZmlnLmNsaWVudEJhc2VQYXRoID0gYXdhaXQgQXBwbGljYXRpb24uY29uZmlnLmNsaWVudEJhc2VQYXRoXG4gICAgICAvLyBhd2FpdCBuZXh0KClcbiAgICB9LFxuICAgIGFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgICAvLyBDT05ESVRJT05cbiAgICAgIC8vIFsxXSBDcmVhdGUgaW5zdGFuY2VzIGFuZCBjaGVjayBjb25kaXRpb25zLiBHZXQgY2FsbGJhY2sgZWl0aGVyIGEgZnVuY3Rpb24gb3IgZG9jdW1lbnRcbiAgICAgIC8vIFRoZSBpbnN0YW5jZSByZXNwb25zaWJsZSBmb3IgcnF1ZXN0cyBvZiBzcGVjaWZpYyBwb3J0LlxuICAgICAgbGV0IGNvbmRpdGlvbkNvbnRyb2xsZXIgPSBhd2FpdCBDb25kaXRpb25Db250cm9sbGVyLmNyZWF0ZUNvbnRleHQoeyBwb3J0QXBwSW5zdGFuY2U6IGNvbnRleHQuaW5zdGFuY2UgfSlcblxuICAgICAgbGV0IGVudHJ5cG9pbnRDb25kaXRpb25UcmVlID0gJzA2ODFmMjVjLTRjMDAtNDI5NS1iMTJhLTZhYjgxYTNjYjQ0MCdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5TWk5fREVCVUcgPT0gJ3RydWUnICYmIGNvbnRleHQuaGVhZGVyLmRlYnVnID09ICd0cnVlJykgY29uc29sZS5sb2coYPCfjYogRW50cnlwb2ludCBDb25kaXRpb24gS2V5OiAke2VudHJ5cG9pbnRDb25kaXRpb25UcmVlfSBcXG4gXFxuYClcbiAgICAgIGxldCBjYWxsYmFjayA9IGF3YWl0IGNvbmRpdGlvbkNvbnRyb2xsZXIuaW5pdGlhbGl6ZU5lc3RlZFVuaXQoeyBuZXN0ZWRVbml0S2V5OiBlbnRyeXBvaW50Q29uZGl0aW9uVHJlZSB9KVxuICAgICAgaWYgKHByb2Nlc3MuZW52LlNaTl9ERUJVRyA9PSAndHJ1ZScgJiYgY29udGV4dC5oZWFkZXIuZGVidWcgPT0gJ3RydWUnKSBjb25zb2xlLmxvZyhg8J+UgOKclO+4jyBDaG9vc2VuIGNhbGxiYWNrIGlzOiAlYyAke2NhbGxiYWNrLm5hbWV9YCwgY29uc29sZUxvZ1N0eWxlLnN0eWxlLmdyZWVuKVxuICAgICAgLy8gWzJdIFVzZSBjYWxsYmFja1xuICAgICAgYXdhaXQgaW1wbGVtZW50Q29uZGl0aW9uQWN0aW9uT25Nb2R1bGVVc2luZ0pzb24oeyBzZXR0aW5nOiBjYWxsYmFjayB9KShjb250ZXh0LCBuZXh0KVxuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2submFtZSA9PSAncG9zdCcpIHtcbiAgICAgICAgLy8gZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAgIGxldCB4ID0gYXdhaXQgQ2xhc3MuYXV0aGVudGljYXRlKGNvbnRleHQucmVxdWVzdCwgY29udGV4dC5yZXNwb25zZSlcbiAgICAgICAgaWYgKHgpIGF3YWl0IG5leHQoKVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgKGNvbnRleHQsIG5leHQpID0+IHtcbiAgICAgIGNvbnRleHQuc3RhdHVzID0gNDA0XG4gICAgICAvLyBjb25zb2xlLmxvZygnTGFzdCBNaWRkbGV3YXJlIHJlYWNoZWQuJylcbiAgICAgIGF3YWl0IG5leHQoKVxuICAgIH0sXG4gIF1cbiAgbWlkZGxld2FyZUFycmF5LmZvckVhY2gobWlkZGxld2FyZSA9PiBzZXJ2ZXJLb2EudXNlKG1pZGRsZXdhcmUpKVxuXG4gIGh0dHAuY3JlYXRlU2VydmVyKHNlbGYuc2VydmVyS29hLmNhbGxiYWNrKCkpLmxpc3RlbihzZWxmLnBvcnQsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhg4piVJWMgJHtzZWxmLm5hbWV9IGxpc3RlbmluZyBvbiBwb3J0ICR7c2VsZi5wb3J0fWAsIGNvbnNvbGVMb2dTdHlsZS5zdHlsZS5ncmVlbilcbiAgICAvLyBldmVudEVtaXR0ZXIuZW1pdCgnbGlzdGVuaW5nJylcbiAgICAvLyBwcm9jZXNzLmVtaXQoJ2xpc3RlbmluZycpXG4gICAgaWYgKHByb2Nlc3Muc2VuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpZiBwcm9jZXNzIGlzIGEgZm9ya2VkIGNoaWxkIHByb2Nlc3MuXG4gICAgICBpZiAoc2VsZi5jb25maWcuREVQTE9ZTUVOVCA9PSAnZGV2ZWxvcG1lbnQnKSBwcm9jZXNzLnNlbmQoeyBtZXNzYWdlOiAnU2VydmVyIGxpc3RlbmluZycgfSlcbiAgICB9XG4gIH0pXG4gIC8vIGV2ZW50RW1pdHRlci5vbihcImxpc3RlbmluZ1wiLCBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiY2F0Y2hlZCBsaXN0ZW5pbmcgb24gc2FtZSBzY3JpcHQgZmlsZVwiKTsgfSlcbn1cblxuLyoqXG4gKiBBdXRoZW50aWNhdGVzIGEgcmVxdWVzdCwgaS5lLiB2YWxpZGF0ZXMgYSB0b2tlbi5cbiAqIChTZWU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tNylcbiAqIEByZXR1cm4ge29iamVjdH0gdG9rZW5EYXRhIC0gYWNjZXNzIHRva2VuIG9iamVjdCByZXR1cm5lZCBmcm9tIE1vZGVsI2dldEFjY2Vzc1Rva2VuKCkuXG4gKi9cbmZ1bmN0aW9uIGF1dGhlbnRpY2F0ZU1pZGRsZXdhcmUoKSB7XG4gIHJldHVybiBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlIGZ1bmN0aW9uJylcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgc2NvcGU6IHVuZGVmaW5lZCwgLy8gVGhlIHNjb3BlKHMpIHRvIGF1dGhlbnRpY2F0ZVxuICAgICAgYWRkQWNjZXB0ZWRTY29wZXNIZWFkZXI6IHRydWUsIC8vIFNldCB0aGUgWC1BY2NlcHRlZC1PQXV0aC1TY29wZXMgSFRUUCBoZWFkZXIgb24gcmVzcG9uc2Ugb2JqZWN0cy5cbiAgICAgIGFkZEF1dGhvcml6ZWRTY29wZXNIZWFkZXI6IHRydWUsIC8vIFNldCB0aGUgWC1PQXV0aC1TY29wZXMgSFRUUCBoZWFkZXIgb24gcmVzcG9uc2Ugb2JqZWN0cy5cbiAgICAgIGFsbG93QmVhcmVyVG9rZW5zSW5RdWVyeVN0cmluZzogZmFsc2UsIC8vIEFsbG93IGNsaWVudHMgdG8gcGFzcyBiZWFyZXIgdG9rZW5zIGluIHRoZSBxdWVyeSBzdHJpbmcgb2YgYSByZXF1ZXN0XG4gICAgfVxuICAgIGxldCBvQXV0aFJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KVxuICAgIGxldCBvQXV0aFJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHJlc3BvbnNlKVxuICAgIGxldCB0b2tlbkRhdGEgPSBhd2FpdCBzZWxmLm9BdXRoMlNlcnZlci5hdXRoZW50aWNhdGUob0F1dGhSZXF1ZXN0LCBvQXV0aFJlc3BvbnNlLCBvcHRpb25zKS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICAgIHJldHVybiB0b2tlbkRhdGFcbiAgfVxufVxuXG4vKipcbiAqIEF1dGhvcml6ZXMgYSB0b2tlbiByZXF1ZXN0LiBpLmUuIEF1dGhvcml6ZSBhIGNsaWVudCB0byByZXF1ZXN0IHRva2Vucy5cbiAqIFRoZSBhdXRob3JpemF0aW9uIGVuZHBvaW50IGlzIHVzZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgcmVzb3VyY2Ugb3duZXIgYW5kIG9idGFpbiBhbiBhdXRob3JpemF0aW9uIGdyYW50LlxuICogKFNlZTogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY3NDkjc2VjdGlvbi0zLjEpXG4gKiBAcmV0dXJuIHtvYmplY3R9IGF1dGhvcml6YXRpb25Db2RlIC0gYXV0aG9yaXphdGlvbiBjb2RlIG9iamVjdCByZXR1cm5lZCBmcm9tIE1vZGVsI3NhdmVBdXRob3JpemF0aW9uQ29kZSgpXG4gKiBJZiByZXF1ZXN0LnF1ZXJ5LmFsbG93ZWQgZXF1YWxzIHRoZSBzdHJpbmcgJ2ZhbHNlJyB0aGUgYWNjZXNzIHJlcXVlc3QgaXMgZGVuaWVkIGFuZCB0aGUgcmV0dXJuZWQgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIGFuIEFjY2Vzc0RlbmllZEVycm9yLlxuICovXG5hc3luYyBmdW5jdGlvbiBhdXRob3JpemUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc29sZS5sb2coJ2F1dGhvcml6ZSBmdW5jdGlvbicpXG5cbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgYXV0aGVudGljYXRlSGFuZGxlcjoge1xuICAgICAgaGFuZGxlOiBkYXRhID0+IHtcbiAgICAgICAgLy8gV2hhdGV2ZXIgeW91IG5lZWQgdG8gZG8gdG8gYXV0aG9yaXplIC8gcmV0cmlldmUgeW91ciB1c2VyIGZyb20gcG9zdCBkYXRhIGhlcmVcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHVzZXIgdGhhdCBjbGlja2VkIGF1dGhvcml6ZSBidXR0b24gaXMgbG9nZ2VkLWluL2F1dGhlbnRpY2F0ZWQuXG4gICAgICAgIHJldHVybiB7IHVzZXJuYW1lOiAnZXhhbXBsZScgfVxuICAgICAgfSxcbiAgICB9LCAvLyB7ZnVuY3Rpb259IHRoYXQgZ2V0cyB0aGUgYXV0aGVudGljYXRlZCB1c2VyLiBUaGlzIG9wdGlvbiB3aWxsIGFsbG93IHRvIHJldHVybiB1c2VyIG9iamVjdC5cbiAgICBhdXRob3JpemF0aW9uQ29kZUxpZmV0aW1lOiAzMDAsIC8vIExpZmV0aW1lIG9mIGdlbmVyYXRlZCBhdXRob3JpemF0aW9uIGNvZGVzIGluIHNlY29uZHMgKGRlZmF1bHQgPSAzMDAgc2Vjb25kcyA9IDUgbWludXRlcylcbiAgICAvLyBhbGxvd0VtcHR5U3RhdGU6IGZhbHNlLCAvLyBBbGxvdyBjbGllbnRzIHRvIHNwZWNpZnkgYW4gZW1wdHkgc3RhdGVcbiAgfVxuICBsZXQgb0F1dGhSZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdClcbiAgbGV0IG9BdXRoUmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UocmVzcG9uc2UpXG4gIGxldCBhdXRob3JpemF0aW9uQ29kZSA9IGF3YWl0IHNlbGYub0F1dGgyU2VydmVyLmF1dGhvcml6ZShvQXV0aFJlcXVlc3QsIG9BdXRoUmVzcG9uc2UsIG9wdGlvbnMpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgcmV0dXJuIGF1dGhvcml6YXRpb25Db2RlXG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEgbmV3IHRva2VuIGZvciBhbiBhdXRob3JpemVkIHRva2VuIHJlcXVlc3QuIGkuZS4gZ3JhbnQgdG9rZW5zIHRvIHZhbGlkIHJlcXVlc3RzLlxuICogVGhlIHRva2VuIGVuZHBvaW50IGlzIHVzZWQgYnkgdGhlIGNsaWVudCB0byBvYnRhaW4gYW4gYWNjZXNzIHRva2VuIGJ5IHByZXNlbnRpbmcgaXRzIGF1dGhvcml6YXRpb24gZ3JhbnQgb3IgcmVmcmVzaCB0b2tlbi5cbiAqIChTZWU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMy4yKVxuICogQHJldHVyblxuICovXG5hc3luYyBmdW5jdGlvbiB0b2tlbihyZXF1ZXN0LCByZXNwb25zZSkge1xuICBjb25zb2xlLmxvZygndG9rZW4gZnVuY3Rpb24nKVxuICBsZXQgb3B0aW9ucyA9IHtcbiAgICBhY2Nlc3NUb2tlbkxpZmV0aW1lOiAzNjAwLCAvLyBkZWZhdWx0IDMsNjAwIHNlY29uZHMgKDEgaG91cilcbiAgICByZWZyZXNoVG9rZW5MaWZldGltZTogMTIwOTYwMCwgLy8gZGVmYXVsdCAxLDIwOSw2MDAgc2Vjb25kcyAoMiB3ZWVrcylcbiAgICBhbGxvd0V4dGVuZGVkVG9rZW5BdHRyaWJ1dGVzOiB0cnVlLCAvLyBBbGxvdyBleHRlbmRlZCBhdHRyaWJ1dGVzIHRvIGJlIHNldCBvbiB0aGUgcmV0dXJuZWQgdG9rZW4uIGFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgc2V0IG9uIHRoZSBvYmplY3QgcmV0dXJuZWQgZnJvbSBNb2RlbCNzYXZlVG9rZW4oKSBhcmUgY29waWVkIHRvIHRoZSB0b2tlbiByZXNwb25zZSBzZW50IHRvIHRoZSBjbGllbnQuXG4gICAgYWx3YXlzSXNzdWVOZXdSZWZyZXNoVG9rZW46IGZhbHNlLCAvLyBBbHdheXMgcmV2b2tlIHRoZSB1c2VkIHJlZnJlc2ggdG9rZW4gYW5kIGlzc3VlIGEgbmV3IG9uZSBmb3IgdGhlIHJlZnJlc2hfdG9rZW4gZ3JhbnQuXG4gICAgcmVxdWlyZUNsaWVudEF1dGhlbnRpY2F0aW9uOiB7XG4gICAgICAvLyBCeSBkZWZhdWx0IGFsbCBncmFudCB0eXBlcyByZXF1aXJlIHRoZSBjbGllbnQgdG8gc2VuZCBpdOKAmXMgY2xpZW50X3NlY3JldCB3aXRoIHRoZSB0b2tlbiByZXF1ZXN0XG4gICAgICBwYXNzd29yZDogZmFsc2UsXG4gICAgICBhdXRob3JpemF0aW9uX2NvZGU6IHRydWUsXG4gICAgICBjbGllbnRfY3JlZGVudGlhbHM6IHRydWUsXG4gICAgICByZWZyZXNoX3Rva2VuOiBmYWxzZSxcbiAgICB9LFxuICAgIC8vIGV4dGVuZGVkR3JhbnRUeXBlczoge30gLy8gYWRkaXRpb25hbCBzdXBwb3J0ZWQgZ3JhbnQgdHlwZXMuIChzZWUgaHR0cHM6Ly9vYXV0aDItc2VydmVyLnJlYWR0aGVkb2NzLmlvL2VuL2xhdGVzdC9taXNjL2V4dGVuc2lvbi1ncmFudHMuaHRtbClcbiAgfVxuICBsZXQgb0F1dGhSZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdClcbiAgbGV0IG9BdXRoUmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UocmVzcG9uc2UpXG4gIGxldCB0b2tlbkRhdGEgPSBhd2FpdCBzZWxmLm9BdXRoMlNlcnZlci50b2tlbihvQXV0aFJlcXVlc3QsIG9BdXRoUmVzcG9uc2UsIG9wdGlvbnMpLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmxvZygndG9rZW4gZnVuY3Rpb246JyArIGVycm9yKVxuICB9KVxuICByZXR1cm4gdG9rZW5EYXRhXG59XG4iXX0=