/**
* @jsx React.DOM
*/

var React = require('react')
var Column = require('../components').Column(React);

var dragndrop = require('dragndrop')

var _ = {
  findIndex: require('lodash.findindex'),
  swap: function(array_object, index_a, index_b) {
    var temp = array_object[index_a];
    array_object[index_a] = array_object[index_b];
    array_object[index_b] = temp;
  }
}


module.exports = function () {
  return {
    link: function (scope, $mount, attr) {
      var branches = scope.branches;

      var dropzone = {
        start: function (e) {},
        swapped: function ($1, $2) {
          var i1 = _.findIndex(branches, { name: $1.text().trim() })
          var i2 = _.findIndex(branches, { name: $2.text().trim() })
          _.swap(branches, i1, i2)
        },
        end: function (e) { scope.changeBranchOrder(branches) }
      }

      var Branch = React.createClass({
        render: function() {
          var master = this.props.key === "master";
          var rmStyle = master ? {display:'none'} : {color:'red'};
          var nameClass = "branch-name "+(master ? 'ismaster' : '')
          return <li className="branch-item moveable">
            <span className="remove">
              <span className="clickable" style={rmStyle} onClick={this.removeBranch}>
                <i className="fa fa-times"></i>
              </span>
            </span>
            <span className={nameClass}>{this.props.key}</span>
          </li>
        },
        removeBranch: function () {
          scope.remove(this.props.branch)
        },
        componentDidMount: function () {
          dragndrop($(this.getDOMNode()), {})
        }
      })

      var renderBranches = function(column) {
        return <ol className="branch-list">{
          column.props.items.map(function (item) {
            return <Branch key={item.name} branch={item} />
          })
        }</ol>
      }

      scope.$reactBranches = React.renderComponent(
        <Column items={branches} renderItems={renderBranches} 
        dropzone={dropzone} />, $mount.get(0)
      )
    }
  }
}
