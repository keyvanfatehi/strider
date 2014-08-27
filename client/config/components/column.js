/**
* @jsx React.DOM
*/

module.exports = function (React) {
  var dragndrop = require('dragndrop')

  var Column = React.createClass({
    render: function() {
      return this.props.renderItems(this)
    },
    componentDidMount: function () {
      dragndrop($(this.getDOMNode()), { dropzone: this.props.dropzone })
    }
  })

  return Column;
}

