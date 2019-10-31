"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;const namedImportMap = [
{
  namedImport: 'webcomponent',
  path: 'asset/webcomponent' },

{
  namedImport: 'javascript',
  path: 'asset/javascript' }];



function _default() {
  return async (context, next) => {
    let path = context.path;

    let pathArray = path.split('/').filter(item => item);
    let firstURLPart = pathArray[0];

    let relativeAtPathName = firstURLPart.substring(firstURLPart.indexOf('@') + 1, firstURLPart.length);

    let namedImportObject = namedImportMap.filter(item => item.namedImport == relativeAtPathName)[0];
    let mappedPath = namedImportObject.path;

    context.relativeAtPathName = relativeAtPathName;


    if (mappedPath) {

      pathArray[0] = mappedPath;
      context.path = pathArray.join('/');
    }
    await next();
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9taWRkbGV3YXJlL2RlcHJlY2F0ZWQvbWFwQFBhdGhUb0Fic29sdXRlUGF0aC5taWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbIm5hbWVkSW1wb3J0TWFwIiwibmFtZWRJbXBvcnQiLCJwYXRoIiwiY29udGV4dCIsIm5leHQiLCJwYXRoQXJyYXkiLCJzcGxpdCIsImZpbHRlciIsIml0ZW0iLCJmaXJzdFVSTFBhcnQiLCJyZWxhdGl2ZUF0UGF0aE5hbWUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVuZ3RoIiwibmFtZWRJbXBvcnRPYmplY3QiLCJtYXBwZWRQYXRoIiwiam9pbiJdLCJtYXBwaW5ncyI6InNHQUFBLE1BQU1BLGNBQWMsR0FBRztBQUNyQjtBQUNFQyxFQUFBQSxXQUFXLEVBQUUsY0FEZjtBQUVFQyxFQUFBQSxJQUFJLEVBQUUsb0JBRlIsRUFEcUI7O0FBS3JCO0FBQ0VELEVBQUFBLFdBQVcsRUFBRSxZQURmO0FBRUVDLEVBQUFBLElBQUksRUFBRSxrQkFGUixFQUxxQixDQUF2Qjs7OztBQVdlLG9CQUFXO0FBQ3hCLFNBQU8sT0FBT0MsT0FBUCxFQUFnQkMsSUFBaEIsS0FBeUI7QUFDOUIsUUFBSUYsSUFBSSxHQUFHQyxPQUFPLENBQUNELElBQW5COztBQUVBLFFBQUlHLFNBQVMsR0FBR0gsSUFBSSxDQUFDSSxLQUFMLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUJDLElBQUksSUFBSUEsSUFBL0IsQ0FBaEI7QUFDQSxRQUFJQyxZQUFZLEdBQUdKLFNBQVMsQ0FBQyxDQUFELENBQTVCOztBQUVBLFFBQUlLLGtCQUFrQixHQUFHRCxZQUFZLENBQUNFLFNBQWIsQ0FBdUJGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixHQUFyQixJQUE0QixDQUFuRCxFQUFzREgsWUFBWSxDQUFDSSxNQUFuRSxDQUF6Qjs7QUFFQSxRQUFJQyxpQkFBaUIsR0FBR2QsY0FBYyxDQUFDTyxNQUFmLENBQXNCQyxJQUFJLElBQUlBLElBQUksQ0FBQ1AsV0FBTCxJQUFvQlMsa0JBQWxELEVBQXNFLENBQXRFLENBQXhCO0FBQ0EsUUFBSUssVUFBVSxHQUFHRCxpQkFBaUIsQ0FBQ1osSUFBbkM7O0FBRUFDLElBQUFBLE9BQU8sQ0FBQ08sa0JBQVIsR0FBNkJBLGtCQUE3Qjs7O0FBR0EsUUFBSUssVUFBSixFQUFnQjs7QUFFZFYsTUFBQUEsU0FBUyxDQUFDLENBQUQsQ0FBVCxHQUFlVSxVQUFmO0FBQ0FaLE1BQUFBLE9BQU8sQ0FBQ0QsSUFBUixHQUFlRyxTQUFTLENBQUNXLElBQVYsQ0FBZSxHQUFmLENBQWY7QUFDRDtBQUNELFVBQU1aLElBQUksRUFBVjtBQUNELEdBcEJEO0FBcUJEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmFtZWRJbXBvcnRNYXAgPSBbXG4gIHtcbiAgICBuYW1lZEltcG9ydDogJ3dlYmNvbXBvbmVudCcsIC8vIEB3ZWJjb21wb25lbnRcbiAgICBwYXRoOiAnYXNzZXQvd2ViY29tcG9uZW50JyxcbiAgfSxcbiAge1xuICAgIG5hbWVkSW1wb3J0OiAnamF2YXNjcmlwdCcsIC8vIEBqYXZhc2NyaXB0XG4gICAgcGF0aDogJ2Fzc2V0L2phdmFzY3JpcHQnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgbGV0IHBhdGggPSBjb250ZXh0LnBhdGhcbiAgICAvLyBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpIC8vIHJlbW92ZSBmaXJzdCBhbmQgbGFzdCBzbGFzaFxuICAgIGxldCBwYXRoQXJyYXkgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKGl0ZW0gPT4gaXRlbSkgLy8gc3BsaXQgcGF0aCBhbmQgcmVtb3ZlIGVtcHR5IHZhbHVlc1xuICAgIGxldCBmaXJzdFVSTFBhcnQgPSBwYXRoQXJyYXlbMF1cbiAgICAvLyBsZXQgbGFzdEluZGV4UG9zaXRpb24gPSAocGF0aC5pbmRleE9mKFwiL1wiKSA9PSAtMSkgPyBwYXRoLmxlbmd0aCA6IHBhdGguaW5kZXhPZihcIi9cIik7XG4gICAgbGV0IHJlbGF0aXZlQXRQYXRoTmFtZSA9IGZpcnN0VVJMUGFydC5zdWJzdHJpbmcoZmlyc3RVUkxQYXJ0LmluZGV4T2YoJ0AnKSArIDEsIGZpcnN0VVJMUGFydC5sZW5ndGgpXG5cbiAgICBsZXQgbmFtZWRJbXBvcnRPYmplY3QgPSBuYW1lZEltcG9ydE1hcC5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWVkSW1wb3J0ID09IHJlbGF0aXZlQXRQYXRoTmFtZSlbMF0gLy8gZXhhbXBsZSAnL0B3ZWJjb21wb25lbnQvcGFja2FnZS94L3guanMnXG4gICAgbGV0IG1hcHBlZFBhdGggPSBuYW1lZEltcG9ydE9iamVjdC5wYXRoXG5cbiAgICBjb250ZXh0LnJlbGF0aXZlQXRQYXRoTmFtZSA9IHJlbGF0aXZlQXRQYXRoTmFtZVxuICAgIC8vIGNoYW5nZSBwYXRoIGlmIEAgcGF0aCBpcyBtYXBwZWRcbiAgICAvLyBpZihtYXBwZWRQYXRoKSBjb250ZXh0LnBhdGggPSBjb250ZXh0LnBhdGgucmVwbGFjZShgQCR7cmVsYXRpdmVBdFBhdGhOYW1lfWAsIG1hcHBlZFBhdGgpXG4gICAgaWYgKG1hcHBlZFBhdGgpIHtcbiAgICAgIC8vIHJlcGxhY2UgcGFydCB0byBiZSBtYXBwZWRcbiAgICAgIHBhdGhBcnJheVswXSA9IG1hcHBlZFBhdGhcbiAgICAgIGNvbnRleHQucGF0aCA9IHBhdGhBcnJheS5qb2luKCcvJylcbiAgICB9XG4gICAgYXdhaXQgbmV4dCgpXG4gIH1cbn1cbiJdfQ==