/**
* @jsx React.DOM
*/

var _ = {
  map: require('lodash.map'),
  filter: require('lodash.filter')
}


module.exports = function (React) {
  var Column = require('./column')(React);
  var Plugin = require('./plugin')(React);

  var EnabledPlugins = React.createClass({
    render: function () {
      var plugins = this.props.plugins;
      var renderPlugins = function(column) {
        return <ul className="enabled-plugins-list">{
          _.map(column.props.items, function (plugin) {
            return (
              <Plugin key={plugin.id}
                title={plugins[plugin.id].title}
                enabled={plugin.enabled}
              />
            )
          })
        }</ul>
      }
      var hintStyle = {
        display: (this.props.enabled_plugins.length ? 'none' : '')
      }
      return (
        <div className="enabled-plugins">
          <h3>Active Plugins</h3>
          <span style={hintStyle} className="drop-here">Drag and drop here</span>
          <Column items={this.props.enabled_plugins} renderItems={renderPlugins} dropzone={this.props.dropzone} />
        </div>
      )
    }
  });

  return EnabledPlugins
}
