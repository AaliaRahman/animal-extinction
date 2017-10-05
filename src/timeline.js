import React, { Component } from 'react';
import './App.css';
import './App.js';

class Timeline extends Component {
render(){
return(

  // This one's a little tricky! Comments inline.

  var ChildComponent = React.createClass({
    render: function() {
      return (
        <div>
          <button onClick={this.props.onMagicClick}>Do Magic</button>
        </div>
      );
    }
  });

  var ParentComponent = React.createClass({
    performMagic: function() {
      alert('TAADAH!');
    },

    render: function() {
      return (
        <div>
          {/* Notice how we're passing a function as a prop to ChildComponent */}
          <ChildComponent onMagicClick={this.performMagic} />
        </div>
      );
    }
  });

  ReactDOM.render(
    <ParentComponent />,
    document.getElementById('container')
  );





);
};
}
