import React, { Component } from 'react';
import './App.css';
import './Components/Header/header.scss';
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import CardRight from './Components/CardRight';
import CardLeft from './Components/CardLeft';
import Button from './Components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContainer>
         <CardLeft
            imageUri="./images/react-app-slide-views.png"
            alt="React app"
            cardHeader="Onboarding Mobile Rotator"
            descriptor1="UI, Logo Design: Adobe XD"
            descriptor2="Development: HTML5, CSS3, React"
         >
          <Button value="Design" className="btn-medium-blue"/>
          <Button value="Code" className="btn-medium-blue"/>
         </CardLeft>

         <CardRight
            imageUri="./images/emails.png"
            alt="Email design"
            cardHeader="Email Design"
            descriptor1="Design: Sketch"
            descriptor2="Repository: Abstract"
            >
         </CardRight>

         <CardLeft
            imageUri="./images/restaurant-reviews-app.png"
            alt="Reviews app"
            cardHeader="Restaurant Reviews Web App"
            descriptor1="UI Design: Sketch"
            descriptor2="Development: HTML5, CSS3, JavaScript"
         >
          <Button value="Design" className="btn-medium-blue"/>
          <Button value="Code" className="btn-medium-blue"/>
         </CardLeft>

         <CardRight
            imageUri="./images/github-profile-app.png"
            alt="React app"
            cardHeader="Github Profile App"
            descriptor1="UI Design: Adobe XD"
            descriptor2="Development: HTML5, CSS3, React"
         >
          <Button value="Design" className="btn-medium-blue"/>
          <Button value="Code" className="btn-medium-blue"/>
         </CardRight>

        </MainContainer>
      </div>
    
    );
  }
}

export default App;
