"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.oidcInteractionEntrypoint = oidcInteractionEntrypoint;exports.oidcInteractionLogin = oidcInteractionLogin;exports.oidcInteractionConfirm = oidcInteractionConfirm;var _querystring = _interopRequireDefault(require("querystring"));




function oidcInteractionEntrypoint({
  openIdConnectServer })
{return async (context, next) => {
    const pathArray = context.path.split('/').filter(item => item);
    if (pathArray[0] == 'interaction' && !pathArray[2]) {

      const details = await openIdConnectServer.interactionDetails(context.req);
      const client = await openIdConnectServer.Client.find(details.params.client_id);
      if (details.interaction.error === 'login_required') {
        await context.render(`${__dirname}/../htmlView/oidcInteractionLogin.html`, {
          client,
          details,
          title: 'Sign-in',
          debug: _querystring.default.stringify(details.params, ',<br/>', ' = ', {
            encodeURIComponent: value => value }),

          interaction: _querystring.default.stringify(details.interaction, ',<br/>', ' = ', {
            encodeURIComponent: value => value }) });


      } else {
        await context.render(`${__dirname}/../htmlView/oidcInteractionConfirm.html`, {
          client,
          details,
          title: 'confirm consent',
          debug: _querystring.default.stringify(details.params, ',<br/>', ' = ', {
            encodeURIComponent: value => value }),

          interaction: _querystring.default.stringify(details.interaction, ',<br/>', ' = ', {
            encodeURIComponent: value => value }) });


      }
    } else {
      await next();
    }
  };}

function oidcInteractionLogin({
  openIdConnectServer })
{return async (context, next) => {
    const pathArray = context.path.split('/').filter(item => item);
    if (pathArray[0] == 'interaction' && pathArray[2] == 'login') {
      const username = context.request.body.login;
      const password = context.request.body.password;


      const accountId = username;


      const result = {
        login: {
          account: accountId,
          acr: 'urn:mace:incommon:iap:bronze',
          amr: ['pwd'],
          remember: !!context.request.body.remember,
          ts: Math.floor(Date.now() / 1000) },


























        consent: {} };



      await openIdConnectServer.interactionFinished(context.req, context.res, result);
      await next();
    } else {
      await next();
    }

  };}


function oidcInteractionConfirm({
  openIdConnectServer })
{return async (context, next) => {
    const pathArray = context.path.split('/').filter(item => item);
    if (pathArray[0] == 'interaction' && pathArray[2] == 'confirm') {
      console.log('confirm middleware called');
      const result = { consent: {} };
      await openIdConnectServer.interactionFinished(context.req, context.res, result);
      await next();
    } else {
      await next();
    }
  };}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS91dGlsaXR5RnVuY3Rpb24vbWlkZGxld2FyZS9vaWRjSW50ZXJhY3Rpb24ubWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJvaWRjSW50ZXJhY3Rpb25FbnRyeXBvaW50Iiwib3BlbklkQ29ubmVjdFNlcnZlciIsImNvbnRleHQiLCJuZXh0IiwicGF0aEFycmF5IiwicGF0aCIsInNwbGl0IiwiZmlsdGVyIiwiaXRlbSIsImRldGFpbHMiLCJpbnRlcmFjdGlvbkRldGFpbHMiLCJyZXEiLCJjbGllbnQiLCJDbGllbnQiLCJmaW5kIiwicGFyYW1zIiwiY2xpZW50X2lkIiwiaW50ZXJhY3Rpb24iLCJlcnJvciIsInJlbmRlciIsIl9fZGlybmFtZSIsInRpdGxlIiwiZGVidWciLCJxdWVyeXN0cmluZyIsInN0cmluZ2lmeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInZhbHVlIiwib2lkY0ludGVyYWN0aW9uTG9naW4iLCJ1c2VybmFtZSIsInJlcXVlc3QiLCJib2R5IiwibG9naW4iLCJwYXNzd29yZCIsImFjY291bnRJZCIsInJlc3VsdCIsImFjY291bnQiLCJhY3IiLCJhbXIiLCJyZW1lbWJlciIsInRzIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImNvbnNlbnQiLCJpbnRlcmFjdGlvbkZpbmlzaGVkIiwicmVzIiwib2lkY0ludGVyYWN0aW9uQ29uZmlybSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiIwVUFBQTs7Ozs7QUFLTyxTQUFTQSx5QkFBVCxDQUFtQztBQUN0Q0MsRUFBQUEsbUJBRHNDLEVBQW5DO0FBRUosQ0FBRSxPQUFPLE9BQU9DLE9BQVAsRUFBZ0JDLElBQWhCLEtBQXlCO0FBQ2pDLFVBQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDRyxJQUFSLENBQWFDLEtBQWIsQ0FBb0IsR0FBcEIsRUFBMEJDLE1BQTFCLENBQWlDQyxJQUFJLElBQUlBLElBQXpDLENBQWxCO0FBQ0EsUUFBR0osU0FBUyxDQUFDLENB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LEVBQWtFWixNQUFsRSxDQUFOO0FBQ0EsWUFBTS9CLElBQUksRUFBVjtBQUNDLEtBTEwsTUFLVztBQUNQLFlBQU1BLElBQUksRUFBVjtBQUNIO0FBQ0osR0FWSSxDQVVIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG4vLyBJbXBsZW1lbnQgaW50ZXJhY3Rpb24gZm9yIHVzZXIgY29uc2VudCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9wYW52YS9ub2RlLW9pZGMtcHJvdmlkZXIvYmxvYi9tYXN0ZXIvZG9jcy9jb25maWd1cmF0aW9uLm1kI2ludGVyYWN0aW9uXG4vLyAjcHJvdmlkZXIuaW50ZXJhY3Rpb25EZXRhaWxzKHJlcSkgLSByb3V0ZTogXCIvaW50ZXJhY3Rpb24vOmdyYW50XCJcbi8vICNwcm92aWRlci5pbnRlcmFjdGlvbkZpbmlzaGVkKHJlcSwgcmVzLCByZXN1bHRzKSAtIHJvdXRlOiBcIi9pbnRlcmFjdGlvbi86Z3JhbnRcIlxuZXhwb3J0IGZ1bmN0aW9uIG9pZGNJbnRlcmFjdGlvbkVudHJ5cG9pbnQoeyAvLyBpbnRlcmFjdGlvbiBlbnRyeXBvaW50XG4gICAgb3BlbklkQ29ubmVjdFNlcnZlclxufSkgeyByZXR1cm4gYXN5bmMgKGNvbnRleHQsIG5leHQpID0+IHsgLy8gcmVkaXJlY3QgdG8gYSBzcGVjaWZpYyBpbnRlcmFjdGlvbiAoZS5nLiBsb2dpbiwgY29uZmlybSwgZXRjLikgZGVwZW5kaW5nIG9uIHRoZSBpbnRlcmFjdGlvbkRldGFpbHMgcHJvdmlkZWQgYnkgdGhlIG9pZGMgY2hlY2tpbmcgb2YgdGhlIC9hdXRob3JpemUgcmVxdWVzdC5cbiAgICBjb25zdCBwYXRoQXJyYXkgPSBjb250ZXh0LnBhdGguc3BsaXQoICcvJyApLmZpbHRlcihpdGVtID0+IGl0ZW0pXG4gICAgaWYocGF0aEFycmF5WzBdID09ICdpbnRlcmFjdGlvbicgJiYgIXBhdGhBcnJheVsyXSkge1xuICAgICAgICAvLyBjaGVjayBpbnRlcmFjdGlvbiBkZXRhaWxzIGFuZCB0aGVuIHJlZGlyZWN0LlxuICAgICAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgb3BlbklkQ29ubmVjdFNlcnZlci5pbnRlcmFjdGlvbkRldGFpbHMoY29udGV4dC5yZXEpXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IG9wZW5JZENvbm5lY3RTZXJ2ZXIuQ2xpZW50LmZpbmQoZGV0YWlscy5wYXJhbXMuY2xpZW50X2lkKTtcbiAgICAgICAgaWYgKGRldGFpbHMuaW50ZXJhY3Rpb24uZXJyb3IgPT09ICdsb2dpbl9yZXF1aXJlZCcpIHsgLy8gcHJvdmlkZS9zZXJ2ZSBsb2dpbiBodG1sIHZpZXdcbiAgICAgICAgICAgIGF3YWl0IGNvbnRleHQucmVuZGVyKGAke19fZGlybmFtZX0vLi4vaHRtbFZpZXcvb2lkY0ludGVyYWN0aW9uTG9naW4uaHRtbGAsIHtcbiAgICAgICAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgICAgICAgZGV0YWlscyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NpZ24taW4nLFxuICAgICAgICAgICAgICAgIGRlYnVnOiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoZGV0YWlscy5wYXJhbXMsICcsPGJyLz4nLCAnID0gJywge1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQ6IHZhbHVlID0+IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGludGVyYWN0aW9uOiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoZGV0YWlscy5pbnRlcmFjdGlvbiwgJyw8YnIvPicsICcgPSAnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudDogdmFsdWUgPT4gdmFsdWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2UgeyAvLyBzZXJ2ZSBjb25maXJtIGh0bWwgc2NyZWVuXG4gICAgICAgICAgICBhd2FpdCBjb250ZXh0LnJlbmRlcihgJHtfX2Rpcm5hbWV9Ly4uL2h0bWxWaWV3L29pZGNJbnRlcmFjdGlvbkNvbmZpcm0uaHRtbGAsIHtcbiAgICAgICAgICAgICAgICBjbGllbnQsXG4gICAgICAgICAgICAgICAgZGV0YWlscyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ2NvbmZpcm0gY29uc2VudCcsXG4gICAgICAgICAgICAgICAgZGVidWc6IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShkZXRhaWxzLnBhcmFtcywgJyw8YnIvPicsICcgPSAnLCB7XG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudDogdmFsdWUgPT4gdmFsdWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb246IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShkZXRhaWxzLmludGVyYWN0aW9uLCAnLDxici8+JywgJyA9ICcsIHtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBuZXh0KClcbiAgICB9XG59fVxuXG5leHBvcnQgZnVuY3Rpb24gb2lkY0ludGVyYWN0aW9uTG9naW4oe1xuICAgIG9wZW5JZENvbm5lY3RTZXJ2ZXJcbn0pIHsgcmV0dXJuIGFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7IC8vIGFmdGVyIGNvbXBsZXRpbmcgaW50ZXJhY3Rpb24gcmV0dXJuIHRoZSByZXN1bHRzIHRvIGZpbmlzaCB0aGUgaW50ZXJhY3Rpb24sIGFuZCB0aGVuIGFzIGEgcmVzdWx0IC9hdXRob3JpemUgaXMgY2FsbGVkIGFnYWluLlxuICAgIGNvbnN0IHBhdGhBcnJheSA9IGNvbnRleHQucGF0aC5zcGxpdCggJy8nICkuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcbiAgICBpZihwYXRoQXJyYXlbMF0gPT0gJ2ludGVyYWN0aW9uJyAmJiBwYXRoQXJyYXlbMl0gPT0gJ2xvZ2luJykge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGNvbnRleHQucmVxdWVzdC5ib2R5LmxvZ2luXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY29udGV4dC5yZXF1ZXN0LmJvZHkucGFzc3dvcmRcblxuICAgICAgICAvLyBjaGVjayB1c2VybmFtZSBhbmQgcGFzc3dvcmQgJiBnZXQgdXNlciB1bmlxdWUgaWQgLy8gVE9ETzogY2hlY2sgY3JlZGVudGlhbHNcbiAgICAgICAgY29uc3QgYWNjb3VudElkID0gdXNlcm5hbWVcblxuICAgICAgICAvLyByZXN1bHRzIHNob3VsZCBiZSBhbiBvYmplY3QgcGFzc2VkIHRvIG9wZW5JZENvbm5lY3RTZXJ2ZXIuaW50ZXJhY3Rpb25GaW5pc2hlZCB3aXRoIHNvbWUgb3IgYWxsIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllc1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBsb2dpbjogeyAvLyBhdXRoZW50aWNhdGlvbi9sb2dpbiBwcm9tcHQgZ290IHJlc29sdmVkLCBvbWl0IGlmIG5vIGF1dGhlbnRpY2F0aW9uIGhhcHBlbmVkLCBpLmUuIHRoZSB1c2VyIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRJZCwgLy8gbG9nZ2VkLWluIGFjY291bnQgaWRcbiAgICAgICAgICAgICAgICBhY3I6ICd1cm46bWFjZTppbmNvbW1vbjppYXA6YnJvbnplJywgLy8gYWNyIHZhbHVlIGZvciB0aGUgYXV0aGVudGljYXRpb24gXG4gICAgICAgICAgICAgICAgYW1yOiBbJ3B3ZCddLFxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiAhIWNvbnRleHQucmVxdWVzdC5ib2R5LnJlbWVtYmVyLCAgLy8gdHJ1ZSBpZiBwcm92aWRlciBzaG91bGQgdXNlIGEgcGVyc2lzdGVudCBjb29raWUgcmF0aGVyIHRoYW4gYSBzZXNzaW9uIG9uZVxuICAgICAgICAgICAgICAgIHRzOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgLy8gdW5peCB0aW1lc3RhbXAgb2YgdGhlIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIGNvbnNlbnQ6IHtcbiAgICAgICAgICAgIC8vICAgICAvLyB1c2UgdGhlIHNjb3BlIHByb3BlcnR5IGlmIHlvdSB3aXNoIHRvIHJlbW92ZS9hZGQgc2NvcGVzIGZyb20gdGhlIHJlcXVlc3QsIG90aGVyd2lzZSBkb24ndFxuICAgICAgICAgICAgLy8gICAgIC8vIGluY2x1ZGUgaXQgdXNlIHdoZW4gaS5lLiBvZmZsaW5lX2FjY2VzcyB3YXMgbm90IGdpdmVuLCBvciB1c2VyIGRlY2xpbmVkIHRvIHByb3ZpZGUgYWRkcmVzc1xuICAgICAgICAgICAgLy8gICAgIHNjb3BlOiAnc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2Ygc2NvcGVzJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuXG4gICAgICAgICAgICAvLyAgICAgLy8gbWV0YSBpcyBhIGZyZWUgb2JqZWN0IHlvdSBtYXkgc3RvcmUgYWxvbmdzaWRlIGFuIGF1dGhvcml6YXRpb24uIEl0IGNhbiBiZSB1c2VmdWxcbiAgICAgICAgICAgIC8vICAgICAvLyBkdXJpbmcgdGhlIGludGVyYWN0aW9uQ2hlY2sgdG8gdmVyaWZ5IGluZm9ybWF0aW9uIG9uIHRoZSBvbmdvaW5nIHNlc3Npb24uXG4gICAgICAgICAgICAvLyAgICAgbWV0YToge1xuICAgICAgICAgICAgLy8gICAgIC8vIG9iamVjdCBzdHJ1Y3R1cmUgdXAtdG8teW91XG4gICAgICAgICAgICAvLyAgICAgfSxcblxuICAgICAgICAgICAgLy8gICAgIFsnY3VzdG9tIHByb21wdCBuYW1lIHJlc29sdmVkJ106IHt9LFxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyAvLyBvcHRpb25hbGx5LCBpbnRlcmFjdGlvbnMgY2FuIGJlIHByaW1hdHVyZWx5IGV4aXRlZCB3aXRoIGEgYW4gZXJyb3IgYnkgcHJvdmlkaW5nIGEgcmVzdWx0XG4gICAgICAgICAgICAvLyAvLyBvYmplY3QgYXMgZm9sbG93OlxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIC8vIGFuIGVycm9yIGZpZWxkIHVzZWQgYXMgZXJyb3IgY29kZSBpbmRpY2F0aW5nIGEgZmFpbHVyZSBkdXJpbmcgdGhlIGludGVyYWN0aW9uXG4gICAgICAgICAgICAvLyAgICAgZXJyb3I6ICdhY2Nlc3NfZGVuaWVkJyxcblxuICAgICAgICAgICAgLy8gICAgIC8vIGFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIGZvciB0aGlzIGVycm9yXG4gICAgICAgICAgICAvLyAgICAgZXJyb3JfZGVzY3JpcHRpb246ICdJbnN1ZmZpY2llbnQgcGVybWlzc2lvbnM6IHNjb3BlIG91dCBvZiByZWFjaCBmb3IgdGhpcyBBY2NvdW50JyxcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29uc2VudDoge1xuICAgICAgICAgICAgfSwgLy8gY29uc2VudCB3YXMgZ2l2ZW4gYnkgdGhlIHVzZXIgdG8gdGhlIGNsaWVudCBmb3IgdGhpcyBzZXNzaW9uXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYXdhaXQgb3BlbklkQ29ubmVjdFNlcnZlci5pbnRlcmFjdGlvbkZpbmlzaGVkKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcywgcmVzdWx0KTtcbiAgICAgICAgYXdhaXQgbmV4dCgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgbmV4dCgpXG4gICAgfVxuXG59fVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvaWRjSW50ZXJhY3Rpb25Db25maXJtKHsgLy8gVE9ETzogRklYIG5vdCBjYWxsaW5nIGNvbmZpcm0gY29uc2VudCAhIVxuICAgIG9wZW5JZENvbm5lY3RTZXJ2ZXJcbn0pIHsgcmV0dXJuIGFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7IC8vIGFmdGVyIGNvbXBsZXRpbmcgaW50ZXJhY3Rpb24gcmV0dXJuIHRoZSByZXN1bHRzIHRvIGZpbmlzaCB0aGUgaW50ZXJhY3Rpb24sIGFuZCB0aGVuIGFzIGEgcmVzdWx0IC9hdXRob3JpemUgaXMgY2FsbGVkIGFnYWluLlxuICAgIGNvbnN0IHBhdGhBcnJheSA9IGNvbnRleHQucGF0aC5zcGxpdCggJy8nICkuZmlsdGVyKGl0ZW0gPT4gaXRlbSlcbiAgICBpZihwYXRoQXJyYXlbMF0gPT0gJ2ludGVyYWN0aW9uJyAmJiBwYXRoQXJyYXlbMl0gPT0gJ2NvbmZpcm0nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25maXJtIG1pZGRsZXdhcmUgY2FsbGVkJylcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyBjb25zZW50OiB7fSB9O1xuICAgICAgICBhd2FpdCBvcGVuSWRDb25uZWN0U2VydmVyLmludGVyYWN0aW9uRmluaXNoZWQoY29udGV4dC5yZXEsIGNvbnRleHQucmVzLCByZXN1bHQpO1xuICAgICAgICBhd2FpdCBuZXh0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IG5leHQoKVxuICAgIH1cbn19Il19