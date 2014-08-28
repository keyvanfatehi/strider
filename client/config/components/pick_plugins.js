/**
* @jsx React.DOM
*/
module.exports = function (React) {
  var Dropzone = require('../plugin_dropzone');
  var PluginList = require('./plugin_list')(React);

  var PickPlugins = React.createClass({
    render: function () {
      console.log(this.props);
      var allPlugins = this.props.plugins
        , enabled = this.props.branch.plugins
        , disabled = this.props.disabled_plugins
      return (
        <div className="pick-plugins">
          <h3>Choose Plugins</h3>
          <p>
             Drag and drop plugins from Available to Active to enable them for this project.
             Plugins are run in the order they are specified here. Active plugins can be
             configured by clicking their corresponding tabs on the left.
          </p>
          <PluginList
            all={allPlugins}
            keyword='enabled'
            heading='Active Plugins'
            plugins={enabled}
            dropzone={new Dropzone('enabled', this.props.dragged)}
          />
          <PluginList
            all={allPlugins}
            keyword='disabled'
            heading='Available Plugins'
            plugins={disabled}
            dropzone={new Dropzone('disabled', this.props.dragged)}
          />
        </div>
      )
    }
  })
  return PickPlugins
}
