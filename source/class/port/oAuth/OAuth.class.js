"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _ApplicationClass = _interopRequireDefault(require("../../Application.class.js"));



var _http = _interopRequireDefault(require("http"));
var _oauth2Server = _interopRequireDefault(require("oauth2-server"));
var _oAuth2ServerModel = _interopRequireDefault(require("./oAuth2Server.model.js"));


var _decoratorUtility = require("@dependency/commonPattern/source/decoratorUtility.js");
var _extendedSubclassPattern = require("@dependency/commonPattern/source/extendedSubclassPattern.js");var _dec, _dec2, _class, _class2, _temp;let Request = _oauth2Server.default.Request;let Response = _oauth2Server.default.Response;




const self = (_dec =
(0, _decoratorUtility.execute)({ staticMethod: 'initializeStaticClass' }), _dec2 =
_extendedSubclassPattern.extendedSubclassPattern.Subclass(), _dec(_class = _dec2(_class = (_temp = _class2 = class
OAuth extends _ApplicationClass.default {













  static initializeStaticClass(self) {
    super.initializeStaticClass();
    self.port = 8088;




    self.OAuth2Server = _oauth2Server.default;
    self.oAuth2Server = new _oauth2Server.default({
      debug: true,



      model: _oAuth2ServerModel.default });


  }
  constructor(skipConstructor = false) {
    super(true);this.middlewareArray = [];
    this.config = {};
    if (skipConstructor) return;


  }

  static createHttpServer() {
    const self = this;
    self.createdHttpServer = _http.default.createServer(self.serverKoa.callback()).
    listen(self.port, () => {
      console.log(`☕%c ${self.name} listening on port ${self.port}`, self.config.style.green);


      if (process.send !== undefined) {
        if (self.config.DEPLOYMENT == 'development') process.send({ message: 'Server listening' });
      }
    });

  }






  static authenticateMiddleware() {
    return async (request, response) => {
      console.log('authenticate function');

      let options = {
        scope: undefined,
        addAcceptedScopesHeader: true,
        addAuthorizedScopesHeader: true,
        allowBearerTokensInQueryString: false };

      let oAuthRequest = new Request(request);
      let oAuthResponse = new Response(response);
      let tokenData = await self.oAuth2Server.authenticate(oAuthRequest, oAuthResponse, options).
      catch(error => {
        console.log(error);
      });
      return tokenData;
    };
  }








  async authorize(request, response) {
    console.log('authorize function');

    let options = {
      authenticateHandler: {
        handle: data => {

          return { username: 'example' };
        } },

      authorizationCodeLifetime: 300 };


    let oAuthRequest = new Request(request);
    let oAuthResponse = new Response(response);
    let authorizationCode = await self.oAuth2Server.authorize(oAuthRequest, oAuthResponse, options).
    catch(error => {
      console.log(error);
    });
    return authorizationCode;
  }







  async token(request, response) {
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
    let tokenData = await self.oAuth2Server.token(oAuthRequest, oAuthResponse, options).
    catch(error => {
      console.log('token function:' + error);
    });
    return tokenData;
  }}, _class2.entrypointSetting = { defaultConditionTreeKey: 'XYZ' }, _class2.middlewareArray = [], _temp)) || _class) || _class);var _default =



self;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jbGFzcy9wb3J0L29BdXRoL09BdXRoLmNsYXNzLmpzIl0sIm5hbWVzIjpbIlJlcXVlc3QiLCJPQXV0aDJTZXJ2ZXIiLCJSZXNwb25zZSIsInNlbGYiLCJzdGF0aWNNZXRob2QiLCJleHRlbmRlZFN1YmNsYXNzUGF0dGVybiIsIlN1YmNsYXNzIiwiT0F1dGgiLCJBcHBsaWNhdGlvbiIsImluaXRpYWxpemVTdGF0aWNDbGFzcyIsInBvcnQiLCJvQXV0aDJTZXJ2ZXIiLCJkZWJ1ZyIsIm1vZGVsIiwib0F1dGgyU2VydmVyTW9kZWwiLCJjb25zdHJ1Y3RvciIsInNraXBDb25zdHJ1Y3RvciIsIm1pZGRsZXdhcmVBcnJheSIsImNvbmZpZyIsImNyZWF0ZUh0dHBTZXJ2ZXIiLCJjcmVhdGVkSHR0cFNlcnZlciIsImh0dHAiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXJLb2EiLCJjYWxsYmFjayIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwic3R5bGUiLCJncmVlbiIsInByb2Nlc3MiLCJzZW5kIiwidW5kZWZpbmVkIiwiREVQTE9ZTUVOVCIsIm1lc3NhZ2UiLCJhdXRoZW50aWNhdGVNaWRkbGV3YXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwib3B0aW9ucyIsInNjb3BlIiwiYWRkQWNjZXB0ZWRTY29wZXNIZWFkZXIiLCJhZGRBdXRob3JpemVkU2NvcGVzSGVhZGVyIiwiYWxsb3dCZWFyZXJUb2tlbnNJblF1ZXJ5U3RyaW5nIiwib0F1dGhSZXF1ZXN0Iiwib0F1dGhSZXNwb25zZSIsInRva2VuRGF0YSIsImF1dGhlbnRpY2F0ZSIsImNhdGNoIiwiZXJyb3IiLCJhdXRob3JpemUiLCJhdXRoZW50aWNhdGVIYW5kbGVyIiwiaGFuZGxlIiwiZGF0YSIsInVzZXJuYW1lIiwiYXV0aG9yaXphdGlvbkNvZGVMaWZldGltZSIsImF1dGhvcml6YXRpb25Db2RlIiwidG9rZW4iLCJhY2Nlc3NUb2tlbkxpZmV0aW1lIiwicmVmcmVzaFRva2VuTGlmZXRpbWUiLCJhbGxvd0V4dGVuZGVkVG9rZW5BdHRyaWJ1dGVzIiwiYWx3YXlzSXNzdWVOZXdSZWZyZXNoVG9rZW4iLCJyZXF1aXJlQ2xpZW50QXV0aGVudGljYXRpb24iLCJwYXNzd29yZCIsImF1dGhvcml6YXRpb25fY29kZSIsImNsaWVudF9jcmVkZW50aWFscyIsInJlZnJlc2hfdG9rZW4iLCJlbnRyeXBvaW50U2V0dGluZyIsImRlZmF1bHRDb25kaXRpb25UcmVlS2V5Il0sIm1hcHBpbmdzIjoieUxBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Esc0csd0NBSEEsSUFBSUEsT0FBTyxHQUFHQyxzQkFBYUQsT0FBM0IsQ0FDQSxJQUFJRSxRQUFRLEdBQUdELHNCQUFhQyxRQUE1Qjs7Ozs7QUFPQSxNQUFNQyxJQUFJO0FBQ1QsK0JBQVEsRUFBRUMsWUFBWSxFQUFFLHVCQUFoQixFQUFSLENBRFM7QUFFVEMsaURBQXdCQyxRQUF4QixFQUZTLGtEQUNWO0FBRU1DLEtBRk4sU0FFb0JDLHlCQUZwQixDQUVnQzs7Ozs7Ozs7Ozs7Ozs7QUFjNUIsU0FBT0MscUJBQVAsQ0FBNkJOLElBQTdCLEVBQW1DO0FBQy9CLFVBQU1NLHFCQUFOO0FBQ0FOLElBQUFBLElBQUksQ0FBQ08sSUFBTCxHQUFZLElBQVo7Ozs7O0FBS0FQLElBQUFBLElBQUksQ0FBQ0YsWUFBTCxHQUFvQkEscUJBQXBCO0FBQ0FFLElBQUFBLElBQUksQ0FBQ1EsWUFBTCxHQUFvQixJQUFJVixxQkFBSixDQUFpQjtBQUNqQ1csTUFBQUEsS0FBSyxFQUFFLElBRDBCOzs7O0FBS2pDQyxNQUFBQSxLQUFLLEVBQUVDLDBCQUwwQixFQUFqQixDQUFwQjs7O0FBUUg7QUFDREMsRUFBQUEsV0FBVyxDQUFDQyxlQUFlLEdBQUcsS0FBbkIsRUFBMEI7QUFDakMsVUFBTSxJQUFOLEVBRGlDLEtBcEJyQ0MsZUFvQnFDLEdBcEJuQixFQW9CbUI7QUFFakMsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxRQUFHRixlQUFILEVB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QUFPLEdBQUc7QUFDVm1CLE1BQUFBLG1CQUFtQixFQUFFLElBRFg7QUFFVkMsTUFBQUEsb0JBQW9CLEVBQUUsT0FGWjtBQUdWQyxNQUFBQSw0QkFBNEIsRUFBRSxJQUhwQjtBQUlWQyxNQUFBQSwwQkFBMEIsRUFBRSxLQUpsQjtBQUtWQyxNQUFBQSwyQkFBMkIsRUFBRTtBQUN6QkMsUUFBQUEsUUFBUSxFQUFFLEtBRGU7QUFFekJDLFFBQUFBLGtCQUFrQixFQUFFLElBRks7QUFHekJDLFFBQUFBLGtCQUFrQixFQUFFLElBSEs7QUFJekJDLFFBQUFBLGFBQWEsRUFBRSxLQUpVLEVBTG5CLEVBQWQ7Ozs7QUFhQSxRQUFJdEIsWUFBWSxHQUFHLElBQUk1QyxPQUFKLENBQVlxQyxPQUFaLENBQW5CO0FBQ0EsUUFBSVEsYUFBYSxHQUFHLElBQUkzQyxRQUFKLENBQWFvQyxRQUFiLENBQXBCO0FBQ0EsUUFBSVEsU0FBUyxHQUFHLE1BQU0zQyxJQUFJLENBQUNRLFlBQUwsQ0FBa0I4QyxLQUFsQixDQUF3QmIsWUFBeEIsRUFBc0NDLGFBQXRDLEVBQXFETixPQUFyRDtBQUNqQlMsSUFBQUEsS0FEaUIsQ0FDVkMsS0FBRCxJQUFXO0FBQ2R2QixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBb0JzQixLQUFoQztBQUNILEtBSGlCLENBQXRCO0FBSUEsV0FBT0gsU0FBUDtBQUNILEdBdkkyQixDQUh0QixVQVVDcUIsaUJBVkQsR0FVcUIsRUFDdkJDLHVCQUF1QixFQUFFLEtBREYsRUFWckIsVUFhQ25ELGVBYkQsR0FhbUIsRUFibkIsK0JBQVYsQzs7OztBQThJZWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHQgYXMgQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9BcHBsaWNhdGlvbi5jbGFzcy5qcydcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnXG5pbXBvcnQgZmlsZXN5c3RlbSBmcm9tICdmcydcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcydcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXG5pbXBvcnQgT0F1dGgyU2VydmVyIGZyb20gJ29hdXRoMi1zZXJ2ZXInXG5pbXBvcnQgb0F1dGgyU2VydmVyTW9kZWwgZnJvbSAnLi9vQXV0aDJTZXJ2ZXIubW9kZWwuanMnXG5sZXQgUmVxdWVzdCA9IE9BdXRoMlNlcnZlci5SZXF1ZXN0O1xubGV0IFJlc3BvbnNlID0gT0F1dGgyU2VydmVyLlJlc3BvbnNlO1xuaW1wb3J0IHsgYWRkLCBleGVjdXRlLCBhcHBseU1peGluIH0gZnJvbSAnQGRlcGVuZGVuY3kvY29tbW9uUGF0dGVybi9zb3VyY2UvZGVjb3JhdG9yVXRpbGl0eS5qcydcbmltcG9ydCB7IGV4dGVuZGVkU3ViY2xhc3NQYXR0ZXJuIH0gZnJvbSAnQGRlcGVuZGVuY3kvY29tbW9uUGF0dGVybi9zb3VyY2UvZXh0ZW5kZWRTdWJjbGFzc1BhdHRlcm4uanMnO1xuXG4vLyBmb3IgZW5kcG9pbnQgcmVxdWVzdHMgZXhhbXBsZXMgZm9yIGVhY2ggZ3JhbnQgdHlwZSBtYWRlIC0gc2VlOiBodHRwczovL2Fhcm9ucGFyZWNraS5jb20vb2F1dGgtMi1zaW1wbGlmaWVkLyNvdGhlci1hcHAtdHlwZXMpXG4vLyBSZWdhcmRpbmcgcmVxdWVzdCAtIHNob3VsZCBiZSB4LXd3dy1mb3JtLXVybGVuY29kZWRcblxuY29uc3Qgc2VsZiA9IFxuQGV4ZWN1dGUoeyBzdGF0aWNNZXRob2Q6ICdpbml0aWFsaXplU3RhdGljQ2xhc3MnIH0pXG5AZXh0ZW5kZWRTdWJjbGFzc1BhdHRlcm4uU3ViY2xhc3MoKVxuY2xhc3MgT0F1dGggZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG4gICAgXG4gICAgc3RhdGljIE9BdXRoMlNlcnZlcjsgLy8gb2F1dGgyLXNlcnZlciBjbGFzc1xuICAgIHN0YXRpYyBvQXV0aDJTZXJ2ZXI7IC8vIG9hdXRoMi1zZXJ2ZXIgaW5zdGFuY2VcbiAgICBzdGF0aWMgc2VydmVyS29hO1xuICAgIHN0YXRpYyBjcmVhdGVkSHR0cFNlcnZlcjtcbiAgICBzdGF0aWMgcG9ydDtcbiAgICBzdGF0aWMgZW50cnlwb2ludFNldHRpbmcgPSB7XG4gICAgICAgIGRlZmF1bHRDb25kaXRpb25UcmVlS2V5OiAnWFlaJ1xuICAgIH1cbiAgICBzdGF0aWMgbWlkZGxld2FyZUFycmF5ID0gW11cbiAgICBtaWRkbGV3YXJlQXJyYXkgPSBbXVxuICAgIG5leHQ7XG5cbiAgICBzdGF0aWMgaW5pdGlhbGl6ZVN0YXRpY0NsYXNzKHNlbGYpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVN0YXRpY0NsYXNzKClcbiAgICAgICAgc2VsZi5wb3J0ID0gODA4OFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbml0aWFsaXplIG9BdXRoMiBzZXJ2ZXJcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuT0F1dGgyU2VydmVyID0gT0F1dGgyU2VydmVyXG4gICAgICAgIHNlbGYub0F1dGgyU2VydmVyID0gbmV3IE9BdXRoMlNlcnZlcih7XG4gICAgICAgICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGdyYW50czogWydhdXRob3JpemF0aW9uX2NvZGUnLCAnY2xpZW50X2NyZWRlbnRpYWxzJywgJ3Bhc3N3b3JkJywgJ3JlZnJlc2hfdG9rZW4nXSAvLyBDYW5ub3Qgc2VlbSB0byBmaW5kIHRoaXMgb3B0aW9uIGluIGRvY3MuXG4gICAgICAgICAgICAvLyBjbGllbnRJZFJlZ2V4OiAnXltBLVphLXowLTktX1xcXl17NSwzMH0kJywgLy8gY2xpZW50IGlkIHNob3VsZCBiZSBjb21wbGlhbnQgd2l0aCB0aGUgcmVnZXguXG4gICAgICAgICAgICAvLyBhY2Nlc3NUb2tlbkxpZmV0aW1lOiA2MCAqIDYwICogMjQsIC8vIHNldCB0aGUgYWNjZXNzIHRva2VuIHRvIGxhc3QgZm9yIDI0IGhvdXJzXG4gICAgICAgICAgICBtb2RlbDogb0F1dGgyU2VydmVyTW9kZWxcbiAgICAgICAgfSlcbiAgICBcbiAgICB9XG4gICAgY29uc3RydWN0b3Ioc2tpcENvbnN0cnVjdG9yID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIodHJ1ZSlcbiAgICAgICAgdGhpcy5jb25maWcgPSB7fSAvLyBwb3B1bGF0ZWQgYnkgdXNlcmFnZW50RGV0ZWN0aW9uIG1vZHVsZS5cbiAgICAgICAgaWYoc2tpcENvbnN0cnVjdG9yKSByZXR1cm47XG4gICAgICAgIC8vIGlmICghbmV3LnRhcmdldCkgY29uc29sZS5sb2cobmV3LnRhcmdldCkgLy8gbm90IHN1cHBvcnRlZCBieSBiYWJlbFxuICAgICAgICAvLyBpZiAoISh0aGlzIGluc3RhbmNlb2YgV2ViYXBwVUkpKSByZXR1cm4gbmV3IFdlYmFwcFVJKCkgLy8gVGhpcyBpcyB1c2VkIGluIGZhY3RvcnkgZnVuY3Rpb25zIG5vdCBjbGFzc2VzLlxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVIdHRwU2VydmVyKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmNyZWF0ZWRIdHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoc2VsZi5zZXJ2ZXJLb2EuY2FsbGJhY2soKSlcbiAgICAgICAgICAgIC5saXN0ZW4oc2VsZi5wb3J0LCAoKT0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4piVJWMgJHtzZWxmLm5hbWV9IGxpc3RlbmluZyBvbiBwb3J0ICR7c2VsZi5wb3J0fWAsIHNlbGYuY29uZmlnLnN0eWxlLmdyZWVuKVxuICAgICAgICAgICAgICAgIC8vIGV2ZW50RW1pdHRlci5lbWl0KCdsaXN0ZW5pbmcnKVxuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3MuZW1pdCgnbGlzdGVuaW5nJylcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5zZW5kICE9PSB1bmRlZmluZWQpIHsgLy8gaWYgcHJvY2VzcyBpcyBhIGZvcmtlZCBjaGlsZCBwcm9jZXNzLlxuICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmNvbmZpZy5ERVBMT1lNRU5UID09ICdkZXZlbG9wbWVudCcpIHByb2Nlc3Muc2VuZCh7IG1lc3NhZ2U6ICdTZXJ2ZXIgbGlzdGVuaW5nJ30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIC8vIGV2ZW50RW1pdHRlci5vbihcImxpc3RlbmluZ1wiLCBmdW5jdGlvbiAoKSB7IGNvbnNvbGUubG9nKFwiY2F0Y2hlZCBsaXN0ZW5pbmcgb24gc2FtZSBzY3JpcHQgZmlsZVwiKTsgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdXRoZW50aWNhdGVzIGEgcmVxdWVzdCwgaS5lLiB2YWxpZGF0ZXMgYSB0b2tlbi5cbiAgICAgKiAoU2VlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTcpXG4gICAgICogQHJldHVybiB7b2JqZWN0fSB0b2tlbkRhdGEgLSBhY2Nlc3MgdG9rZW4gb2JqZWN0IHJldHVybmVkIGZyb20gTW9kZWwjZ2V0QWNjZXNzVG9rZW4oKS5cbiAgICAgKi9cbiAgICBzdGF0aWMgYXV0aGVudGljYXRlTWlkZGxld2FyZSgpIHtcbiAgICAgICAgcmV0dXJuIGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0ZSBmdW5jdGlvbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHNjb3BlOiB1bmRlZmluZWQsIC8vIFRoZSBzY29wZShzKSB0byBhdXRoZW50aWNhdGVcbiAgICAgICAgICAgICAgICBhZGRBY2NlcHRlZFNjb3Blc0hlYWRlcjogdHJ1ZSwgLy8gU2V0IHRoZSBYLUFjY2VwdGVkLU9BdXRoLVNjb3BlcyBIVFRQIGhlYWRlciBvbiByZXNwb25zZSBvYmplY3RzLlxuICAgICAgICAgICAgICAgIGFkZEF1dGhvcml6ZWRTY29wZXNIZWFkZXI6IHRydWUsIC8vIFNldCB0aGUgWC1PQXV0aC1TY29wZXMgSFRUUCBoZWFkZXIgb24gcmVzcG9uc2Ugb2JqZWN0cy5cbiAgICAgICAgICAgICAgICBhbGxvd0JlYXJlclRva2Vuc0luUXVlcnlTdHJpbmc6IGZhbHNlLCAvLyBBbGxvdyBjbGllbnRzIHRvIHBhc3MgYmVhcmVyIHRva2VucyBpbiB0aGUgcXVlcnkgc3RyaW5nIG9mIGEgcmVxdWVzdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9BdXRoUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpXG4gICAgICAgICAgICBsZXQgb0F1dGhSZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgIGxldCB0b2tlbkRhdGEgPSBhd2FpdCBzZWxmLm9BdXRoMlNlcnZlci5hdXRoZW50aWNhdGUob0F1dGhSZXF1ZXN0LCBvQXV0aFJlc3BvbnNlLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbkRhdGFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF1dGhvcml6ZXMgYSB0b2tlbiByZXF1ZXN0LiBpLmUuIEF1dGhvcml6ZSBhIGNsaWVudCB0byByZXF1ZXN0IHRva2Vucy5cbiAgICAgKiBUaGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludCBpcyB1c2VkIHRvIGludGVyYWN0IHdpdGggdGhlIHJlc291cmNlIG93bmVyIGFuZCBvYnRhaW4gYW4gYXV0aG9yaXphdGlvbiBncmFudC5cbiAgICAgKiAoU2VlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTMuMSlcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IGF1dGhvcml6YXRpb25Db2RlIC0gYXV0aG9yaXphdGlvbiBjb2RlIG9iamVjdCByZXR1cm5lZCBmcm9tIE1vZGVsI3NhdmVBdXRob3JpemF0aW9uQ29kZSgpXG4gICAgICogSWYgcmVxdWVzdC5xdWVyeS5hbGxvd2VkIGVxdWFscyB0aGUgc3RyaW5nICdmYWxzZScgdGhlIGFjY2VzcyByZXF1ZXN0IGlzIGRlbmllZCBhbmQgdGhlIHJldHVybmVkIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCBhbiBBY2Nlc3NEZW5pZWRFcnJvci5cbiAgICAgKi9cbiAgICBhc3luYyBhdXRob3JpemUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2F1dGhvcml6ZSBmdW5jdGlvbicpXG4gICAgICAgIFxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZUhhbmRsZXI6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGU6IChkYXRhKSA9PiB7IC8vIFdoYXRldmVyIHlvdSBuZWVkIHRvIGRvIHRvIGF1dGhvcml6ZSAvIHJldHJpZXZlIHlvdXIgdXNlciBmcm9tIHBvc3QgZGF0YSBoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIHRoYXQgY2xpY2tlZCBhdXRob3JpemUgYnV0dG9uIGlzIGxvZ2dlZC1pbi9hdXRoZW50aWNhdGVkLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB1c2VybmFtZTogJ2V4YW1wbGUnIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgLy8ge2Z1bmN0aW9ufSB0aGF0IGdldHMgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlci4gVGhpcyBvcHRpb24gd2lsbCBhbGxvdyB0byByZXR1cm4gdXNlciBvYmplY3QuXG4gICAgICAgICAgICBhdXRob3JpemF0aW9uQ29kZUxpZmV0aW1lOiAzMDAsIC8vIExpZmV0aW1lIG9mIGdlbmVyYXRlZCBhdXRob3JpemF0aW9uIGNvZGVzIGluIHNlY29uZHMgKGRlZmF1bHQgPSAzMDAgc2Vjb25kcyA9IDUgbWludXRlcylcbiAgICAgICAgICAgIC8vIGFsbG93RW1wdHlTdGF0ZTogZmFsc2UsIC8vIEFsbG93IGNsaWVudHMgdG8gc3BlY2lmeSBhbiBlbXB0eSBzdGF0ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBvQXV0aFJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KVxuICAgICAgICBsZXQgb0F1dGhSZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgbGV0IGF1dGhvcml6YXRpb25Db2RlID0gYXdhaXQgc2VsZi5vQXV0aDJTZXJ2ZXIuYXV0aG9yaXplKG9BdXRoUmVxdWVzdCwgb0F1dGhSZXNwb25zZSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhdXRob3JpemF0aW9uQ29kZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIG5ldyB0b2tlbiBmb3IgYW4gYXV0aG9yaXplZCB0b2tlbiByZXF1ZXN0LiBpLmUuIGdyYW50IHRva2VucyB0byB2YWxpZCByZXF1ZXN0cy5cbiAgICAgKiBUaGUgdG9rZW4gZW5kcG9pbnQgaXMgdXNlZCBieSB0aGUgY2xpZW50IHRvIG9idGFpbiBhbiBhY2Nlc3MgdG9rZW4gYnkgcHJlc2VudGluZyBpdHMgYXV0aG9yaXphdGlvbiBncmFudCBvciByZWZyZXNoIHRva2VuLlxuICAgICAqIChTZWU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMy4yKVxuICAgICAqIEByZXR1cm4gXG4gICAgICovXG4gICAgYXN5bmMgdG9rZW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIGZ1bmN0aW9uJylcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbkxpZmV0aW1lOiAzNjAwLCAvLyBkZWZhdWx0IDMsNjAwIHNlY29uZHMgKDEgaG91cilcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbkxpZmV0aW1lOiAxMjA5NjAwLCAvLyBkZWZhdWx0IDEsMjA5LDYwMCBzZWNvbmRzICgyIHdlZWtzKVxuICAgICAgICAgICAgYWxsb3dFeHRlbmRlZFRva2VuQXR0cmlidXRlczogdHJ1ZSwgLy8gQWxsb3cgZXh0ZW5kZWQgYXR0cmlidXRlcyB0byBiZSBzZXQgb24gdGhlIHJldHVybmVkIHRva2VuLiBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgb2JqZWN0IHJldHVybmVkIGZyb20gTW9kZWwjc2F2ZVRva2VuKCkgYXJlIGNvcGllZCB0byB0aGUgdG9rZW4gcmVzcG9uc2Ugc2VudCB0byB0aGUgY2xpZW50LlxuICAgICAgICAgICAgYWx3YXlzSXNzdWVOZXdSZWZyZXNoVG9rZW46IGZhbHNlLCAvLyBBbHdheXMgcmV2b2tlIHRoZSB1c2VkIHJlZnJlc2ggdG9rZW4gYW5kIGlzc3VlIGEgbmV3IG9uZSBmb3IgdGhlIHJlZnJlc2hfdG9rZW4gZ3JhbnQuXG4gICAgICAgICAgICByZXF1aXJlQ2xpZW50QXV0aGVudGljYXRpb246IHsgLy8gQnkgZGVmYXVsdCBhbGwgZ3JhbnQgdHlwZXMgcmVxdWlyZSB0aGUgY2xpZW50IHRvIHNlbmQgaXTigJlzIGNsaWVudF9zZWNyZXQgd2l0aCB0aGUgdG9rZW4gcmVxdWVzdFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uX2NvZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpZW50X2NyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZXh0ZW5kZWRHcmFudFR5cGVzOiB7fSAvLyBhZGRpdGlvbmFsIHN1cHBvcnRlZCBncmFudCB0eXBlcy4gKHNlZSBodHRwczovL29hdXRoMi1zZXJ2ZXIucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L21pc2MvZXh0ZW5zaW9uLWdyYW50cy5odG1sKVxuICAgICAgICB9XG4gICAgICAgIGxldCBvQXV0aFJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0KVxuICAgICAgICBsZXQgb0F1dGhSZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgbGV0IHRva2VuRGF0YSA9IGF3YWl0IHNlbGYub0F1dGgyU2VydmVyLnRva2VuKG9BdXRoUmVxdWVzdCwgb0F1dGhSZXNwb25zZSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW4gZnVuY3Rpb246JyArIGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRva2VuRGF0YVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWxmIl19