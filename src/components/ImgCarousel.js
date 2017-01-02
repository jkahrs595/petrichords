import React from 'react';
import guitarPlayer from '../img/guitarPlayer.jpg';
import guyLaughing from '../img/guyLaughing.jpg';
import headphonesKeyboard from '../img/headphonesKeyboard.jpg';
import {Carousel} from 'react-bootstrap';

class ImgCarousel extends React.Component {
    render(){
        return(
            <div className="col-lg-4">
                <Carousel>
                    <Carousel.Item>
                        <img width={450} height={320} alt="fuck" src={guitarPlayer}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={450} height={320} alt="900x500" src={guyLaughing}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={450} height={320} alt="900x500" src={headphonesKeyboard}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
export default ImgCarousel;