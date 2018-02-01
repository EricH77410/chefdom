import React, { Component } from 'react';

// Components
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import FullScreenSlider from './fullScreenSlider/FullScreenSlider';
import Gallery from './gallery/Gallery';

class App extends Component {
  state = {
    data: [
      {
        img: 'img/slide1.jpg',
        description: 'Buffet Italien',
        info: 'Novembre 2018, à Biarritz'
      },
      {
        img: 'img/slide2.jpg',
        description: 'Buffet espagnole',
        info: 'Novembre 2018, à Bordeaux'
      }
    ],
    gallery: [
      {
        img: 'img/thumb8.png',
        text: 'Lorem ipsum dolores harry potter'
      },
      {
        img: 'img/thumb7.png',
        text: 'Lorem ipsum dolores harry potter'
      },
      {
        img: 'img/thumb6.png',
        text: 'Lorem ipsum dolores harry potter'
      },
      {
        img: 'img/thumb5.png',
        text: 'Lorem ipsum dolores harry potter'
      },
      {
        img: 'img/thumb8.png',
        text: 'Lorem ipsum dolores harry potter'
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Header />
          <FullScreenSlider data={this.state.data} />
          <Gallery data={this.state.gallery} />
        <Footer />
      </div>
    );
  }
}

export default App;
