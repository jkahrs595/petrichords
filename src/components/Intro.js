import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class Intro extends React.Component {
    render(){
        return (
            <Jumbotron>
                <h1>Hey!</h1>
                <p>This is a blog for me to work on web development, music production, and post any other personal updates I might have.</p>
                <p>My goal is to eventually take all that I learn and write about here to produce high quality webpages for others, as well as helping beginners with writing electronic music.
                Consider this page to be under construction as long as this banner is here.</p>
            </Jumbotron>
        )
    }
}
export default Intro;