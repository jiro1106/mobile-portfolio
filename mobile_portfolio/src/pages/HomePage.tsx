  import React from "react";
  import {ScrollView,View } from "react-native";
  import MainInfo from '../pages/components/MainInfo';
  import About from '../pages/components/About';
  import Skills from '../pages/components/Skills';
  import Contact from '../pages/components/Contact';
  import Projects from '../pages/components/Projects';
  import Footer from '../pages/components/Footer';


  const HomePage = () => {
  

    return (
      <View>
          <MainInfo/>
          <About/>
          <Skills/>
          <Contact/>
          <Projects/>
          <Footer/>
      </View>
    );
  };

  export default HomePage;
