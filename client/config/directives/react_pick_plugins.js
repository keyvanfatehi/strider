/**
* @jsx React.DOM
*/

var React = require('react')
var reactComponents = require('../components')
var PickPlugins = reactComponents.PickPlugins(React);

module.exports = function () {
  return {
    link: function (scope, $mount, attr) {
      scope.$pickPlugins = React.renderComponent(
        <PickPlugins plugins={scope.plugins}
          enabled_plugins={scope.branch.plugins}
          disabled_plugins={scope.disabled_plugins[scope.branch.name]}
        />, $mount.get(0)
      );
    }
  }
}
