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

  var PluginList = React.createClass({
    render: function () {
      var keyword = this.props.keyword;
      var allPlugins = this.props.all;
      var renderPlugins = function(column) {
        return <ul className={keyword+"-plugins-list"}>{
          _.map(column.props.items, function (plugin) {
            return (
              <Plugin
                key={plugin.id}
                icon={allPlugins[plugin.id].icon}
                title={allPlugins[plugin.id].title}
                enabled={plugin.enabled}
                hasStatusBlock={statusBlocks.job[plugin.id]}
                showStatus={plugin.showStatus}
                active={keyword === 'enabled'}
              />
            )
          })
        }</ul>
      }
      var hintStyle = {
        display: (this.props.plugins.length ? 'none' : '')
      }
      return (
        <div className={keyword+"-plugins"}>
          <h3>{this.props.heading}</h3>
          <span style={hintStyle} className="drop-here">Drag and drop here</span>
          <Column items={this.props.plugins} renderItems={renderPlugins} dropzone={this.props.dropzone} />
        </div>
      )
    }
  });

  return PluginList
}
