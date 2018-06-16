/* eslint no-console:0 */
// 字符串转驼峰
// camelCase('dwdDdwdS') => "DwdDdwdS"
// camelCase('abc-de-FghiJ') => "AbcDeFghiJ"
function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase();
    });
}

// Just import style for https://github.com/ant-design/ant-design/issues/3745
// https://webpack.js.org/guides/dependency-management/#require-context
// api: require.context(directory, useSubdirectories = false, regExp = /^\.\//);
// 通过正则批量匹配引入相应的文件模块。
// 第二个参数指包含子目录
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

req.keys().forEach((mod) => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    if (match[1] === 'message' || match[1] === 'notification') {
      // message & notification should not be capitalized
      exports[match[1]] = v;
    } else {
      exports[camelCase(match[1])] = v;
    }
  }
});

module.exports = require('./components');
