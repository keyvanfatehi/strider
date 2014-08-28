/**
* @jsx React.DOM
*/

module.exports = function (React) {
  var dragndrop = require('dragndrop')

  var Plugin = React.createClass({
    render: function() {
      var classTail = (this.props.enabled ? '' : 'disabled')
      var className = "plugin-item moveable clearfix "+classTail
      var imageStyle = (this.props.icon ? {
        backgroundImage: "url('/ext/"+this.props.key+"/"+this.props.icon+"')"
      } : {})
      return (
        <li className={className}>
          <div style={imageStyle} className='img'></div>
          <span>{this.props.title}</span>
        </li>
      )
    },
    removeBranch: function () {
      scope.remove(this.props.branch)
    },
    componentDidMount: function () {
      dragndrop($(this.getDOMNode()), {})
    }
  })

  return Plugin;
}
