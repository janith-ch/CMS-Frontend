import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../components/HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<video src='/src/videos/video-1.mp4' autoPlay loop muted />*/}
            <h1>WELCOME TO</h1>

            <br/>
            <h2>Attendify</h2>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Upcoming Events
                </Button>
                {/*<Button*/}
                {/*    className='btns'*/}
                {/*    buttonStyle='btn--primary'*/}
                {/*    buttonSize='btn--large'*/}
                {/*    onClick={console.log('hey')}*/}
                {/*>*/}
                {/*    Sign up <i clssName='far fa-play-circle' />*/}
                {/*</Button>*/}
            </div>
        </div>
    );
}

export default HeroSection;