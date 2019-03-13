import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class  Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const context = this;
    axios.get('/pictures')
    .then((images) => {
      console.log(images);
      context.setState({
        images: images.data
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render() {
    let { images } = this.state;
    images = images ? images : [];

    return (
      <div>
        { images.map((image) => <img src={image}/>) }
     </div>
    )
  }
}

module.exports = Feed;
