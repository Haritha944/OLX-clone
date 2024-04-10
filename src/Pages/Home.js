import React from 'react';
import Banner from '../Components/Banner/Banner';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function Home(props){
  return (
    <div className='homeParentDiv'>
        <Header />
        <Banner />

        <Footer />
        </div>
  );
}

export default Home;