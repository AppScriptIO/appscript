"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = async self => {
  let context = self.context;
  let path = context.request.url;


  let lastSlash = path.lastIndexOf("/");
  let lastQuestionMark = path.lastIndexOf("?");
  if (lastQuestionMark > lastSlash) path = path.substring(0, lastQuestionMark);

  let pathArray = await path.split("/");
  pathArray = await pathArray.filter(String);
  pathArray = pathArray.filter(string => !string.startsWith('?'));
  return pathArray;
};exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS91dGlsaXR5RnVuY3Rpb24vY29uZGl0aW9uQ2hlY2svZ2V0VXJsUGF0aEFzQXJyYXkuanMiXSwibmFtZXMiOlsic2VsZiIsImNvbnRleHQiLCJwYXRoIiwicmVxdWVzdCIsInVybCIsImxhc3RTbGFzaCIsImxhc3RJbmRleE9mIiwibGFzdFF1ZXN0aW9uTWFyayIsInN1YnN0cmluZyIsInBhdGhBcnJheSIsInNwbGl0IiwiZmlsdGVyIiwiU3RyaW5nIiwic3RyaW5nIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Im1IQUFlLE1BQU9BLElBQVAsSUFBZ0I7QUFDM0IsTUFBSUMsT0FBTyxHQUFHRCxJQUFJLENBQUNDLE9BQW5CO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRCxPQUFPLENBQUNFLE9BQVIsQ0FBZ0JDLEdBQTNCOzs7QUFHQSxNQUFJQyxTQUFTLEdBQUdILElBQUksQ0FBQ0ksV0FBTCxDQUFpQixHQUFqQixDQUFoQjtBQUNBLE1BQUlDLGdCQUFnQixHQUFHTCxJQUFJLENBQUNJLFdBQUwsQ0FBaUIsR0FBakIsQ0FBdkI7QUFDQSxNQUFHQyxnQkFBZ0IsR0FBR0YsU0FBdEIsRUFBaUNILElBQUksR0FBR0EsSUFBSSxDQUFDTSxTQUFMLENBQWUsQ0FBZixFQUFrQkQsZ0JBQWxCLENBQVA7O0FBRWpDLE1BQUlFLFNBQVMsR0FBRyxNQUFNUCxJQUFJLENBQUNRLEtBQUwsQ0FBVyxHQUFYLENBQXRCO0FBQ0FELEVBQUFBLFNBQVMsR0FBRyxNQUFNQSxTQUFTLENBQUNFLE1BQVYsQ0FBaUJDLE1BQWpCLENBQWxCO0FBQ0FILEVBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDRSxNQUFWLENBQWlCRSxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxVQUFQLENBQWtCLEdBQWxCLENBQTVCLENBQVo7QUFDQSxTQUFPTCxTQUFQO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChzZWxmKSA9PiB7XG4gICAgbGV0IGNvbnRleHQgPSBzZWxmLmNvbnRleHRcbiAgICBsZXQgcGF0aCA9IGNvbnRleHQucmVxdWVzdC51cmwgLy8gZ2V0IHBhdGhcblxuICAgIC8vIFJlbW92ZSBwYXJhbWV0ZXJzIHN0YXJ0aW5nIHdpdGggXCI/XCIgYWZ0ZXIgbGFzdCBzbGFzaCBcbiAgICBsZXQgbGFzdFNsYXNoID0gcGF0aC5sYXN0SW5kZXhPZihcIi9cIilcbiAgICBsZXQgbGFzdFF1ZXN0aW9uTWFyayA9IHBhdGgubGFzdEluZGV4T2YoXCI/XCIpXG4gICAgaWYobGFzdFF1ZXN0aW9uTWFyayA+IGxhc3RTbGFzaCkgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIGxhc3RRdWVzdGlvbk1hcmspXG5cbiAgICBsZXQgcGF0aEFycmF5ID0gYXdhaXQgcGF0aC5zcGxpdChcIi9cIikgLy8gc3BsaXQgcGF0aCBzZWN0aW9ucyB0byBhbiBhcnJheS5cbiAgICBwYXRoQXJyYXkgPSBhd2FpdCBwYXRoQXJyYXkuZmlsdGVyKFN0cmluZykgLy8gcmVtb3ZlIGVtcHR5IHN0cmluZy5cbiAgICBwYXRoQXJyYXkgPSBwYXRoQXJyYXkuZmlsdGVyKHN0cmluZyA9PiAhc3RyaW5nLnN0YXJ0c1dpdGgoJz8nKSkgLy8gcmVtb3ZlIHBhcmFtZXRlcnMgZnJvbSBpbmRpdmlkdWFsIHBhdGggaW4gdGhlIGFycmF5LiBpLmUuIGRvbid0IGNvdW50IHBhcmFtcyBhcyBwYXRoLlxuICAgIHJldHVybiBwYXRoQXJyYXlcbn0iXX0=