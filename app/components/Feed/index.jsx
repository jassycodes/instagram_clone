import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Photo from '../Photo/index.jsx';

class  Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    const context = this;
    axios.get('/pictures/all')
    .then((images) => {
      console.log(images);
      context.setState({
        images: images.data,
      });
    })
    .catch((err) => {
      console.error(err);
    })
  }

  //   componentDidMount() {
  //   const context = this;
  //   axios.get('/pictures/puppies')
  //   .then((images) => {
  //     console.log(images);
  //     context.setState({
  //       images: images.data,
  //     });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  // }

  render() {
    let { images } = this.state;
    images = images ? images : [];

    return (
      <div>
        { images.map((image) => <Photo puppies={image}/>) }

        {/*<Photo jasmine="https://meanmaureen.files.wordpress.com/2015/06/screen-shot-2015-06-09-at-3-21-33-pm.png"/>*/}
     </div>
    )
  }
}

module.exports = Feed;
