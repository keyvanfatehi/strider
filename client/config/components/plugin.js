/**
* @jsx React.DOM
*/

module.exports = function (React) {
  var dragndrop = require('dragndrop')

  var Plugin = React.createClass({
    getInitialState: function () {
      return {
        enabled: this.props.enabled,
        showStatus: this.props.showStatus
      }
    },
    render: function() {
      var classTail = (this.props.enabled ? '' : 'disabled')
      var className = "plugin-item moveable clearfix "+classTail
      var imageStyle = (this.props.icon ? {
        backgroundImage: "url('/ext/"+this.props.key+"/"+this.props.icon+"')"
      } : {})
      return (
        <li data-id={this.props.key} className={className}>
          <div style={imageStyle} className='img'></div>
          <div className="rest">
          <span className="title">{this.props.title}</span>
            {this.props.active ?
            <label type="checkbox">
              <input onChange={this.boolToggler('enabled')}
                checked={this.state.enabled} type="checkbox"
              /> Enabled
            </label>
            :''}
            {this.props.hasStatusBlock ?
            <label type="checkbox">
              <input onChange={this.boolToggler('showStatus')}
                checked={this.state.showStatus} type="checkbox"
              /> Show Status
            </label>
            :''}
          </div>
        </li>
      )
    },
    boolToggler: function (key) {
      return function() {
        var newState = {}
        newState[key] = !this.state[key]
        this.setState(newState)
      }.bind(this)
    },
    componentDidMount: function () {
      dragndrop($(this.getDOMNode()), {})
    }
  })

  return Plugin;
}
