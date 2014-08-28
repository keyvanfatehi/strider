/**
* @jsx React.DOM
*/

module.exports = function (React) {
  var dragndrop = require('dragndrop')

  var Plugin = React.createClass({
    render: function() {
      var classTail = (this.props.enabled ? '' : 'disabled')
      var className = "plugin-item moveable clearfix "+classTail
      console.log('!!', this.props);
      return (
        <li className={className}>
          <div className='img'></div>
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
