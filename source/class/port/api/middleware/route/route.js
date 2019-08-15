"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _koaCompose = _interopRequireDefault(require("koa-compose"));
var _koaRouter = _interopRequireDefault(require("koa-router"));
var _customQuery = _interopRequireDefault(require("../database/customQuery.js"));

let routerAPI = new _koaRouter.default({ prefix: '/api/v1' });
routerAPI.get('/test', _customQuery.default.test);var _default =

() => (0, _koaCompose.default)([
routerAPI.routes(),
routerAPI.allowedMethods()]);exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jbGFzcy9wb3J0L2FwaS9taWRkbGV3YXJlL3JvdXRlL3JvdXRlLmpzIl0sIm5hbWVzIjpbInJvdXRlckFQSSIsIlJvdXRlciIsInByZWZpeCIsImdldCIsImN1c3RvbVF1ZXJ5IiwidGVzdCIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIl0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLFNBQVMsR0FBRyxJQUFJQyxrQkFBSixDQUFXLEVBQUVDLE1BQU0sRUFBRSxTQUFWLEVBQVgsQ0FBaEI7QUFDQUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsT0FBZCxFQUF1QkMscUJBQVlDLElBQW5DLEU7O0FBRWUsTUFBTSx5QkFBUTtBQUN6QkwsU0FBUyxDQUFDTSxNQUFWLEVBRHlCO0FBRXpCTixTQUFTLENBQUNPLGNBQVYsRUFGeUIsQ0FBUixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWZhdWx0IGFzIHNlcnZlckNvbmZpZ30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2V0dXAvY29uZmlndXJhdGlvbi9zZXJ2ZXJDb25maWcuanMnXG5pbXBvcnQgY29tcG9zZSBmcm9tICdrb2EtY29tcG9zZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAna29hLXJvdXRlcidcbmltcG9ydCB7ZGVmYXVsdCBhcyBjdXN0b21RdWVyeX0gZnJvbSAnLi4vZGF0YWJhc2UvY3VzdG9tUXVlcnkuanMnXG5cbmxldCByb3V0ZXJBUEkgPSBuZXcgUm91dGVyKHsgcHJlZml4OiAnL2FwaS92MScgfSlcbnJvdXRlckFQSS5nZXQoJy90ZXN0JywgY3VzdG9tUXVlcnkudGVzdClcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gY29tcG9zZShbXG4gICAgcm91dGVyQVBJLnJvdXRlcygpLFxuICAgIHJvdXRlckFQSS5hbGxvd2VkTWV0aG9kcygpXG5dKSJdfQ==