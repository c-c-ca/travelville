import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/style.css';
import Navigation from './Navigation';
import Slider from './Slider';
import Search from './Search';
import IconBoxes from './IconBoxes';
import Popular from './Popular';
import Follow from './Follow';
import Gallery from './Gallery';
import Contact from './Contact/Contact';
import Footer from './Footer';

const App = () => (
  <div>
    <Navigation />
    <Slider />
    <Search />
    <IconBoxes />
    <Popular />
    <Follow />
    <Gallery />
    <Contact />
    <Footer />
  </div>
);

export default App;
