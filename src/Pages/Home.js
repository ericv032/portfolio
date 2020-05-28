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
            introP="I'm a UI Designer and Front End Developer interested in creating and developing web user experiences for a diverse range of people."
       >
           <Link to="/about"><Button value="About Me" className="btn-large-blue animated fadeInUp" /></Link>
       </Intro>
        <MainContainer>

        <CardFullWidth
                    imageUri="./images/personal-blog.png"
                    alt="React app"
                    cardHeader="Responsive Blog Website"
                    descriptor1="UI, Logo Design: Adobe XD"
                    descriptor2="Development: HTML5, CSS3, JavaScript" 
                >
                <Link to={{ pathname: "https://ericv032.github.io/udacity-personal-blog-website/" }} target="_blank"><Button value="Preview" className="btn-medium-white"/>
                </Link>
                <Link to={{ pathname: "https://github.com/ericv032/udacity-personal-blog-website/" }} target="_blank"><Button value="Code" className="btn-medium-white"/>
                </Link>
                </CardFullWidth>

                <CardLeft
                    imageUri=""
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
                    cardHeader="GitHub Profile App"
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
