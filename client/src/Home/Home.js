import React from 'react';
import Carousel from 'react-material-ui-carousel';
import homeImg1 from '../assets/_IMG4318-min.jpg';
import homeImg2 from '../assets/_IMG3334-min.jpg';
import homeImg3 from '../assets/_IMG7928-min.jpg';
import homeImg4 from '../assets/_IMG7933-min.jpg';

const imgs = [
    { image: homeImg1, description: 'Boat on river' },
    { image: homeImg2, description: 'Lizard' },
    { image: homeImg3, description: 'Water droplet' },
    { image: homeImg4, description: 'Small bug' },
];

const Home = () => {
    return (
        <Carousel
            interval={5000}
            animation='slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            autoPlay={true}
        >
            {imgs.map(img => (
                <div
                    key={img.description}
                    style={{
                        height: '100vh',
                        background: `url(${img.image}) no-repeat center center fixed`,
                        backgroundSize: 'cover',
                        marginTop: '-4rem',
                    }}
                />
            ))}
        </Carousel>
    );
};

export default Home;
