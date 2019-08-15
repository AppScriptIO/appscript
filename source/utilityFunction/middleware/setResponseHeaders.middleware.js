"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;
function _default() {
  return async (context, next) => {


    await context.set('Access-Control-Allow-Origin', '*');
    await context.set('connection', 'keep-alive');
    await next();
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS91dGlsaXR5RnVuY3Rpb24vbWlkZGxld2FyZS9zZXRSZXNwb25zZUhlYWRlcnMubWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJjb250ZXh0IiwibmV4dCIsInNldCJdLCJtYXBwaW5ncyI6IjtBQUNlLG9CQUFZO0FBQ3ZCLFNBQU8sT0FBT0EsT0FBUCxFQUFnQkMsSUFBaEIsS0FBeUI7OztBQUc1QixVQUFNRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSw2QkFBWixFQUEyQyxHQUEzQyxDQUFOO0FBQ0EsVUFBTUYsT0FBTyxDQUFDRSxHQUFSLENBQVksWUFBWixFQUEwQixZQUExQixDQUFOO0FBQ0EsVUFBTUQsSUFBSSxFQUFWO0FBQ0gsR0FORDtBQU9IIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgICAgIC8vIGluc3RhbmNlLm1pZGRsZXdhcmVBcnJheS5wdXNoKG1pZGRsZXdhcmUpXG4gICAgICAgIC8vIGF3YWl0IGNvbnRleHQucmVxLnNldFRpbWVvdXQoMCk7IC8vIGNoYW5nZXMgZGVmYXVsdCBOb2RlanMgdGltZW91dCAoZGVmYXVsdCAxMjAgc2Vjb25kcykuICAgICAgICAgIFxuICAgICAgICBhd2FpdCBjb250ZXh0LnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAgICAgICBhd2FpdCBjb250ZXh0LnNldCgnY29ubmVjdGlvbicsICdrZWVwLWFsaXZlJylcbiAgICAgICAgYXdhaXQgbmV4dCgpXG4gICAgfVxufVxuIl19