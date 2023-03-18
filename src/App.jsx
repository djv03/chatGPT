import React from 'react'
import './App.css';

import { Navbar } from './components/support';
import Header from './blocks/Header/Header';
import Brand from './components/brand/Brand';
import Features from './blocks/features/Features';
import Possibility from './blocks/possibility/Possibility';
import Footer from './blocks/footer/Footer';

function App() {

  return (
    <div className="app">

      <div className="App bg_gradient">
        <Navbar />
        <Header />
      </div>
        <Brand />
        <Features />
        <Possibility />

        <Footer />
    </div>
  )
}

export default App
