/**
* @jsx React.DOM
*/

var React = require('react')
var reactComponents = require('../components')
var PickPlugins = reactComponents.PickPlugins(React);

var _ = {
  map: require('lodash.map'),
  find: require('lodash.find'),
  findIndex: require('lodash.findindex'),
  swap: function(array_object, index_a, index_b) {
    if (index_a < 0 || index_b < 0) return false;
    var temp = array_object[index_a];
    array_object[index_a] = array_object[index_b];
    array_object[index_b] = temp;
  }
}

module.exports = function () {
  return {
    link: function (scope, $mount, attr) {
      function dragged(e) {
        var plugin = _.find(scope.plugins, {id: e.id});
        if (!plugin) return false;

        scope.$apply(function () {
          var swaps = function () {
            if (e.swaps) {
              _.map(e.swaps, function (i) {
                var i1 = _.findIndex(scope.branch.plugins, { id: i[0] })
                var i2 = _.findIndex(scope.branch.plugins, { id: i[1] })
                _.swap(scope.branch.plugins, i1, i2);
              });
            }
          }
          if (e.transfer) {
            if (e.end.column === 'enabled') {
              scope.enablePlugin(plugin, e.transfer.index, swaps);
            } else {
              scope.disablePlugin(plugin, e.transfer.index);
            }
            pp.setProps({
              plugins: scope.plugins,
              branch: scope.branch,
              disabled_plugins: scope.disabled_plugins[scope.branch.name],
              dragged: dragged
            });
            //e.el.remove()
          } else {
            swaps()
            scope.savePluginOrder()
          }
        })
      }


      var pp = window.pp = React.renderComponent(
        <PickPlugins
          plugins={scope.plugins} branch={scope.branch}
          disabled_plugins={scope.disabled_plugins[scope.branch.name]}
          dragged={dragged}
        />, $mount.get(0)
      )
    }
  }
}
