import React, { Component } from 'react';
import MainContainer from '../Components/MainContainer';
import CardRight from '../Components/CardRight';
import CardLeft from '../Components/CardLeft';
import Button from '../Components/Button';
import CardFullWidth from '../Components/CardFullWidth';
import Intro from '../Components/Intro';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
       <Intro
            introH1="Hey there! I’m Eric"
            introP="I'm a UI Designer and Front End Developer interested in creating and developing functional web user experiences for a diverse range of people."
       >
           <Link to="/about"><Button value="About Me" className="btn-large-blue animated fadeInUp" /></Link>
       </Intro>
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

                <CardFullWidth
                    imageUri="./images/personal-blog.png"
                    alt="React app"
                    cardHeader="Responsive Blog Website"
                    descriptor1="UI, Logo Design: Adobe XD"
                    descriptor2="Development: HTML5, CSS3, JavaScript"
                >
                <Button value="Design" className="btn-medium-white"/>
                <Button value="Code" className="btn-medium-white"/>
                </CardFullWidth>

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
        )
    }
}

export default Home
