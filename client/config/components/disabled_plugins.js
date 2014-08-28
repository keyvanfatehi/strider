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

  var DisabledPlugins = React.createClass({
    render: function () {
      var hintStyle = {
        display: (this.props.plugins.length > 0 ? 'none' : '') //"branch.plugins.length"
      }
      console.log(hintStyle);
      return (
        <div className="disabled-plugins">
          <h3>Available Plugins</h3>
          <span style={hintStyle} className="drop-here">Drag and drop here</span>
          <Column dropzone={this.props.dropzone} items={
            _.filter(this.props.plugins, function (plugin, name) {
              if (!plugin.enabled) return plugin;
            })
          } renderItems={function(column) {
            return <ul className="disabled-plugins-list">{
              _.map(column.props.items, function (plugin, name) {
                return <Plugin key={plugin.id} title={plugin.title} disabled={plugin.disabled}/>
              })
            } </ul>
          }} />
        </div>
      )
    }
  });

  return DisabledPlugins
}
