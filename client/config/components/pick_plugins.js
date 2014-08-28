/**
* @jsx React.DOM
*/
var _ = {
  findIndex: require('lodash.findindex'),
  swap: function(array_object, index_a, index_b) {
    var temp = array_object[index_a];
    array_object[index_a] = array_object[index_b];
    array_object[index_b] = temp;
  }
}

module.exports = function (React) {
  var PluginList = require('./plugin_list')(React);

  var PickPlugins = React.createClass({
    render: function () {
      console.log(this.props);
      return (
        <div className="pick-plugins">
          <h3>Choose Plugins</h3>
          <p>
             Drag and drop plugins from Available to Active to enable them for this project.
             Plugins are run in the order they are specified here. Active plugins can be
             configured by clicking their corresponding tabs on the left.
          </p>
          <PluginList
            keyword='enabled'
            heading='Active Plugins'
            all={this.props.plugins}
            plugins={this.props.enabled_plugins}
            dropzone={this.enabledDropzone}
          />
          <PluginList
            keyword='disabled'
            heading='Available Plugins'
            all={this.props.plugins}
            plugins={this.props.disabled_plugins}
            dropzone={this.disabledDropzone}
          />
        </div>
      )
    },
    enabledDropzone: {
      start: function (e) {},
      appended: function ($el) {
        console.log('en appended', $el);
      },
      swapped: function ($1, $2) {
        console.log('en swap');
        var array = [] // TODO find array
        var i1 = _.findIndex(array, { name: $1.text().trim() })
        var i2 = _.findIndex(array, { name: $2.text().trim() })
        if (i1 && i2) _.swap(branches, i1, i2);
      },
      removed: function ($el) {
        console.log('en removed', $el);
      },
      end: function (e) { }
    },
    disabledDropzone: {
      start: function (e) {},
      appended: function ($el) {
        console.log('appended', $el);
      },
      swapped: function ($1, $2) {
        console.log('swap');
        var array = [] // TODO find array
        var i1 = _.findIndex(array, { name: $1.text().trim() })
        var i2 = _.findIndex(array, { name: $2.text().trim() })
        if (i1 && i2) _.swap(branches, i1, i2);
      },
      removed: function ($el) {
        console.log('removed', $el);
      },
      end: function (e) {
        
      }
    }
  })
  return PickPlugins
}
