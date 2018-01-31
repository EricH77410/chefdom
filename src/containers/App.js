import React, { Component } from 'react';

// Components
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import FullScreenSlider from '../components/fullScreenSlider/FullScreenSlider';

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
    ]
  }
  render() {
    return (
      <div className="App">
        <Header />
        <FullScreenSlider data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
