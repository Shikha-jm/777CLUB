import React from 'react';
import foot_logo from '../Assets/images/foot-logo.png';
import insta from '../Assets/images/insta.png';
import twiter from '../Assets/images/twiter.png';
import discord from '../Assets/images/discord.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const Footer = () => {
   
    return (
        <div className="footer">
            <div className='container-wrapper'>
                <div className='foot-logo-content'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img src={foot_logo} alt='foot_logo'/>
                    </AnimationOnScroll>
                    <div className='social-icons'>
                        <AnimationOnScroll animateIn="animate__heartBeat">
                            <a href='https://www.instagram.com/the777io/' target='_blank'>
                                <img src={insta} alt='insta' /></a>
                            <a href='https://twitter.com/the777io' target='_blank'>
                                <img src={twiter} alt='twiter' /></a>
                            <a href='https://discord.com/invite/eKCscACuU4' target='_blank'>
                                <img src={discord} alt='discord' /></a>
                        </AnimationOnScroll>
                    </div>
                </div>
                <div className='copyright-sec'>
                    <div className='copy-right-row'>
                        <div className='col_left_inn'>
                            <span>
                                <a href='#'>Copyright 2022, The 777 Club NFT LLC</a>
                            </span>
                        </div>
                        <div className='col_right_inn'>
                            <span><a href="/termscontent">Terms & Conditions</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Footer;