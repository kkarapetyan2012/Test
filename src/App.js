import React from 'react'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ImageContainer from "./components/img-container/ImageContainer";
import PaymentBlock from "./components/payment-block/PaymentBlock";
import MainSlider from "./components/slider/MainSlider";
import MainTabs from "./components/tabs/MainTabs";

const App = () => {
  return (
      <Router>
          <div>
              <Header />
              <Hero />
              <MainTabs />
              <ImageContainer />
              <MainSlider />
              <PaymentBlock />
              <Footer />
          </div>
      </Router>

  );
}

export default App;
