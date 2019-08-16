"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _ApplicationClass = _interopRequireDefault(require("../../Application.class.js"));
var _decoratorUtility = require("@dependency/commonPattern/source/decoratorUtility.js");
var _extendedSubclassPattern = require("@dependency/commonPattern/source/extendedSubclassPattern.js");var _dec, _dec2, _class, _class2, _temp;

const self = (_dec =
(0, _decoratorUtility.execute)({ staticMethod: 'initializeStaticClass' }), _dec2 =
_extendedSubclassPattern.extendedSubclassPattern.Subclass(), _dec(_class = _dec2(_class = (_temp = _class2 = class
StaticContent extends _ApplicationClass.default {







  static initializeStaticClass(self) {
    super.initializeStaticClass();
    self.port = 8081;
    self.url = `${self.config.PROTOCOL}cdn.${self.config.HOST}`;
  }
  constructor() {
    super(true);this.middlewareArray = [];
    this.config = {};
  }}, _class2.middlewareArray = [], _temp)) || _class) || _class);var _default =



self;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jbGFzcy9wb3J0L3N0YXRpY0NvbnRlbnQvU3RhdGljQ29udGVudC5jbGFzcy5qcyJdLCJuYW1lcyI6WyJzZWxmIiwic3RhdGljTWV0aG9kIiwiZXh0ZW5kZWRTdWJjbGFzc1BhdHRlcm4iLCJTdWJjbGFzcyIsIlN0YXRpY0NvbnRlbnQiLCJBcHBsaWNhdGlvbiIsImluaXRpYWxpemVTdGF0aWNDbGFzcyIsInBvcnQiLCJ1cmwiLCJjb25maWciLCJQUk9UT0NPTCIsIkhPU1QiLCJjb25zdHJ1Y3RvciIsIm1pZGRsZXdhcmVBcnJheSJdLCJtYXBwaW5ncyI6Ijs7QUFFQTtBQUNBO0FBQ0Esc0c7O0FBRUEsTUFBTUEsSUFBSTtBQUNULCtCQUFRLEVBQUVDLFlBQVksRUFBRSx1QkFBaEIsRUFBUixDQURTO0FBRVRDLGlEQUF3QkMsUUFBeEIsRUFGUyxrREFDVjtBQUVNQyxhQUZOLFNBRTRCQyx5QkFGNUIsQ0FFd0M7Ozs7Ozs7O0FBUXBDLFNBQU9DLHFCQUFQLENBQTZCTixJQUE3QixFQUFtQztBQUMvQixVQUFNTSxxQkFBTjtBQUNBTixJQUFBQSxJQUFJLENBQUNPLElBQUwsR0FBWSxJQUFaO0FBQ0FQLElBQUFBLElBQUksQ0FBQ1EsR0FBTCxHQUFZLEdBQUVSLElBQUksQ0FBQ1MsTUFBTCxDQUFZQyxRQUFTLE9BQU1WLElBQUksQ0FBQ1MsTUFBTCxDQUFZRSxJQUFLLEVBQTFEO0FBQ0g7QUFDREMsRUFBQUEsV0FBVyxHQUFHO0FBQ1YsVUFBTSxJQUFOLEVBRFUsS0FQZEMsZUFPYyxHQVBJLEVBT0o7QUFFVixTQUFLSixNQUFMLEdBQWMsRUFBZDtBQUNILEdBaEJtQyxDQUg5QixVQVFDSSxlQVJELEdBUW1CLEVBUm5CLCtCQUFWLEM7Ozs7QUF1QmViLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdGF0aWMgY29udGVudCBzZXJ2ZXIgLSBjb3VsZCBiZSB1cGdyYWRlZCB0byBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmtcbmltcG9ydCBLb2EgZnJvbSAna29hJyAvLyBLb2EgYXBwbGljYWl0b24gc2VydmVyXG5pbXBvcnQge2RlZmF1bHQgYXMgQXBwbGljYXRpb259IGZyb20gJy4uLy4uL0FwcGxpY2F0aW9uLmNsYXNzLmpzJ1xuaW1wb3J0IHsgYWRkLCBleGVjdXRlLCBhcHBseU1peGluIH0gZnJvbSAnQGRlcGVuZGVuY3kvY29tbW9uUGF0dGVybi9zb3VyY2UvZGVjb3JhdG9yVXRpbGl0eS5qcydcbmltcG9ydCB7IGV4dGVuZGVkU3ViY2xhc3NQYXR0ZXJuIH0gZnJvbSAnQGRlcGVuZGVuY3kvY29tbW9uUGF0dGVybi9zb3VyY2UvZXh0ZW5kZWRTdWJjbGFzc1BhdHRlcm4uanMnO1xuXG5jb25zdCBzZWxmID1cbkBleGVjdXRlKHsgc3RhdGljTWV0aG9kOiAnaW5pdGlhbGl6ZVN0YXRpY0NsYXNzJyB9KVxuQGV4dGVuZGVkU3ViY2xhc3NQYXR0ZXJuLlN1YmNsYXNzKClcbmNsYXNzIFN0YXRpY0NvbnRlbnQgZXh0ZW5kcyBBcHBsaWNhdGlvbiB7XG5cbiAgICBzdGF0aWMgc2VydmVyS29hO1xuICAgIHN0YXRpYyBwb3J0O1xuICAgIHN0YXRpYyB1cmw7XG4gICAgc3RhdGljIG1pZGRsZXdhcmVBcnJheSA9IFtdXG4gICAgbWlkZGxld2FyZUFycmF5ID0gW11cbiAgICBcbiAgICBzdGF0aWMgaW5pdGlhbGl6ZVN0YXRpY0NsYXNzKHNlbGYpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVN0YXRpY0NsYXNzKClcbiAgICAgICAgc2VsZi5wb3J0ID0gODA4MVxuICAgICAgICBzZWxmLnVybCA9IGAke3NlbGYuY29uZmlnLlBST1RPQ09MfWNkbi4ke3NlbGYuY29uZmlnLkhPU1R9YFxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIodHJ1ZSlcbiAgICAgICAgdGhpcy5jb25maWcgPSB7fSAvLyBwb3B1bGF0ZWQgYnkgdXNlcmFnZW50RGV0ZWN0aW9uIG1vZHVsZS5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VsZiJdfQ==