import '../App.css';
import React from 'react';

class Headlines extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsCard">
        <img src={this.props.image} style={{width:"200px", margin:"auto", display:"block"}}/>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
  
}

export default Headlines;
