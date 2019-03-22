import React from 'react';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   this.post = "Halooooo"
    // }
  }

  render() {
    console.log(this.props);
    return (
      // {/*<div>*/}
        <img src={this.props.puppies} className="changeSize20percent addMargin2percent"/>
      // </div>
    )
  }
}
