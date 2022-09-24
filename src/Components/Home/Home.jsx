import React from 'react'
import cart1 from '../../Assets/images/assistClass/1.png';
import cart2 from '../../Assets/images/assistClass/2.png';
import cart3 from '../../Assets/images/assistClass/3.png';
import cart4 from '../../Assets/images/assistClass/4.png';
import cart5 from '../../Assets/images/assistClass/5.png';
import cart6 from '../../Assets/images/assistClass/6.png';
import cart7 from '../../Assets/images/assistClass/7.png';
import cart8 from '../../Assets/images/assistClass/8.png';
import cart9 from '../../Assets/images/assistClass/9.png';
import cart10 from '../../Assets/images/assistClass/10.png';
import cart11 from '../../Assets/images/assistClass/11.png';
import cart12 from '../../Assets/images/assistClass/12.png';
import cart13 from '../../Assets/images/assistClass/13.png';
import cart14 from '../../Assets/images/assistClass/14.png';
import cart15 from '../../Assets/images/assistClass/15.png';
import allowposter from '../../Assets/images/allowposter.jpg';
import allowusvd from '../../Assets/images/allowus_vd.mp4';
import work from '../../Assets/images/work.png';
import roadMap from '../../Assets/images/ROADMAP/Imgoadmap.png';
import Group01 from '../../Assets/images/ROADMAP/Group01.png';
import Group02 from '../../Assets/images/ROADMAP/Group02.png';
import Group03 from '../../Assets/images/ROADMAP/Group03.png';
import Group04 from '../../Assets/images/ROADMAP/Group04.png';
import Group05 from '../../Assets/images/ROADMAP/Group05.png';
import ApeGuevara from '../../Assets/images/team/apeGuevara.png';
import designteam from '../../Assets/images/team/designTeam.png';
import lions from '../../Assets/images/team/lions.png';
import insta from '../../Assets/images/insta.png';
import twiter from '../../Assets/images/twiter.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import 'react-animation/dist/keyframes.css';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const { Panel } = Collapse;
function callback(key) {
    console.log(key);
}
const Home = () => {
    return (
        <>
            {/* home-banner section */}
            <div className="home-banner" >
                <div className="container-wrapper scroll-top" id='home'>
                    <div className='banner-row'>
                        <div className='ban-left-sec'>
                            <div className='wraper-text'>
                                <AnimationOnScroll animateIn="animate__fadeIn">
                                    <h1>777 Clubhouse Founders Collection</h1>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1.5s">
                                    <p>Elevate your lifestyle</p>
                                </AnimationOnScroll>
                            </div>
                            <AnimationOnScroll animateIn="animate__fadeIn animate__delay-1.8s">
                                <button className='get-btn btn_gradient'>Connect Wallet</button>
                            </AnimationOnScroll>
                        </div>
                        <div className='ban-right-sec'>
                            <div className='row-anim'>
                                <div className='col_anim' animateIn="animate__fadeIn">
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                            <img src={cart1} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                            <img src={cart2} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                            <img src={cart3} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                </div>
                                <div className='col_anim' animateIn="animate__fadeIn">
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                            <img src={cart4} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                            <img src={cart5} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                            <img src={cart6} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                </div>
                                <div className='col_anim' animateIn="animate__fadeIn">
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                            <img src={cart7} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                            <img src={cart8} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                    <div className='img-wrap'>
                                        <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                            <img src={cart9} alt="cartoon" />
                                        </AnimationOnScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home-banner section */}

            {/* The 777 Club section */}
            <div className='allowus-sec scroll-top' id='about'>
                <div className='container-wrapper'>
                    <div className='allow-row'>
                        <div className='allow-left'>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <Player
                                    playsInline
                                    poster={allowposter}
                                    src={allowusvd}
                                />
                            </AnimationOnScroll>
                        </div>
                        <div className='allow-right'>
                            <div className='wraper-text'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.2s">
                                    <h2> The 777 Club</h2>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <p>We are the 777Club, a global collective of like-minded individuals with a DeFi lifestyle who appreciate access to the finest things in life. We have a lot planned. The wildest events, real-world benefits like none-other, a metaverse social club, connections to new business opportunities, and a ton more.
                                    </p>
                                    <p>Our NFT collection is a launchpad to the best things in life and we want to give you the chance to share it with us. Getting in early on the 777Club will give you more benefits, more utility, and more opportunities to enhance your lifestyle.
                                    </p>
                                </AnimationOnScroll>
                            </div>
                            <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.6s">
                                <button className='readmore-btn btn_gradient'>Connect Wallet</button>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            {/* The 777 Club section */}

            {/*Sneak Peak section */}
            <div className='assetsclass-sec scroll-top'>
                <div className='container-wrapper'>
                    <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1s">
                        <h2>Sneak Peak</h2>
                    </AnimationOnScroll>
                    <div className='row-anim'>
                        <div className='col_anim'>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                    <img src={cart1} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.6s">
                                    <img src={cart2} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart3} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='col_anim'>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                    <img src={cart4} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.6s">
                                    <img src={cart5} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart6} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='col_anim'>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                    <img src={cart7} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.6s">
                                    <img src={cart8} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart9} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='col_anim'>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                    <img src={cart10} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.6s">
                                    <img src={cart11} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap hide-768'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart12} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='col_anim'>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.8s">
                                    <img src={cart13} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.6s">
                                    <img src={cart14} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap hide-768'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart15} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div className='col_anim show-tab'>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart12} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                            <div className='img-wrap'>
                                <AnimationOnScroll animateIn="animate__fadeInUp animate__delay-1.4s">
                                    <img src={cart15} alt="cartoon" />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sneak Peak section */}

            {/* roadmap section */}
            <div className='howitwork-sec scroll-top' id='roadmap'>
                <div className='container-wrapper'>
                    <div className='roadmap'>
                        <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.5s">
                            <img src={work} alt="roadmap" />
                        </AnimationOnScroll>
                    </div>
                    <div className='road-map-circle'>
                        <div className='road-map'>
                            <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.5s">
                                <h3><img src={roadMap} alt="roadMap" /></h3>
                            </AnimationOnScroll>
                            <ul>
                                <li>
                                    <img src={Group01} alt="Group01" />
                                    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.8s">
                                        <div className='txtWraps'>
                                            The 777 Club lifestyle is fast-paced and actively seeks the best things in life.
                                            The first stage of our club is establishing a
                                            strong community based on the Clubhouse Founders Collection of 777 member passes.
                                            It’s how we live, and we want to share it with you. Throughout late Q1,
                                            we will be focused on building our community and personally connecting with our followers,
                                            collaborating with other NFT projects, and creating meaningful partnerships.
                                        </div>
                                    </AnimationOnScroll>
                                </li>
                                <li className='darkBlue borderSky'>
                                    <img src={Group02} alt="Group02" />
                                    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.8s">
                                        <div className='txtWraps'>
                                            In early Q2, we will mint! We will sell the Clubhouse Founders Pass to our founding members, who will reap extra rewards.
                                            Members will get immediate access to exclusive in person event at Coachella Weekend 1 (To be announced shortly).
                                            Soon after, we will launch the concierge service, including a social networking aspect, and deliver our 777 Clubhouse welcome packages to your door.
                                            We will sell the Clubhouse Collection to our founding members, who will reap extra rewards.
                                        </div>
                                    </AnimationOnScroll>
                                </li>
                                <li className='darkBlue borderSkylite'>
                                    <img src={Group03} alt="Group03" />
                                    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.8s">
                                        <div className='txtWraps'>
                                            In April, we will purchase a plot of prime meta-estate to launch our metaverse social club.
                                            A spot where NFT holders can meet, display their NFT collections,
                                            and help monetize the space for more rewards.
                                        </div>
                                    </AnimationOnScroll>
                                </li>
                                <li className='darkBlue borderPurple'>
                                    <img src={Group04} alt="Group04" />
                                    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.8s">
                                        <div className='txtWraps'>
                                            We will begin a merch collab with a top-tier design label in May while distributing the 777 Club Friends Airdrop.
                                            This will take us to our next in-person event,
                                            to be announced shortly after the sale.
                                        </div>
                                    </AnimationOnScroll>
                                </li>
                                <li className='lightBlue borderblue'>
                                    <img src={Group05} alt="Group05" />
                                    <AnimationOnScroll animateIn="animate__fadeIn animate__delay-0.8s">
                                        <div className='txtWraps'>
                                            In Q3, we are headed to Mykonos because that’s what one does in the summer.
                                            That will be followed by the casual stop in Ibiza before wrapping things up for the fall/winter schedule. Get ready for some exciting events + member meet-ups across Europe this summer.
                                        </div>
                                    </AnimationOnScroll>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*roadmap section */}

            {/* Meet Our Founding Team section */}
            <div className='team-section scroll-top' id='team'>
                <div className='container-wrapper'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <h2>Meet Our Founding Team</h2>
                    </AnimationOnScroll>
                    <div className='team-wrap'>
                        <div className='team-row'>
                            <div className='team-col team-img-col pd-right'>
                                <div className="team-img">
                                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                                        <img src={lions} alt="Lyons" />
                                        <p>Lyons</p>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                            <div className='team-col team-content-col'>
                                <div className='team-content'>
                                    <AnimationOnScroll animateIn="animate__fadeInRight">
                                        <ul>
                                            <li>-10+ years of experience in the hospitality/entertainment industry </li>
                                            <li>-BA in Finance, loves to stay fit, travel, & live life to the fullest.</li>
                                        </ul>
                                        <div className='icons-social-team'>
                                            <a href='https://www.instagram.com/lyons/' target="_blank"><img src={insta} alt="insta" /></a>
                                            <a href='https://twitter.com/niftylyons' target="_blank"><img src={twiter} alt="twiter" /></a>
                                        </div>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                        <div className='team-row'>
                            <div className='team-col team-content-col'>
                                <div className='team-content apeguevara-cont'>
                                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                                        <ul>
                                            <li>-Hospitality Tech Founder + Crypto/Web3 Investor</li>
                                            <li>-Holder of BAYC, MAYC, Meebits, & more</li>
                                            <li>-Avid golfer</li>
                                        </ul>
                                        <div className='icons-social-team'>
                                            <a href=' https://twitter.com/ApeGuevara' target="_blank"><img src={twiter} alt="twiter" /></a>
                                        </div>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                            <div className='team-col team-img-col pd-left'>
                                <div className='team-img'>
                                    <AnimationOnScroll animateIn="animate__fadeInRight">
                                        <img src={ApeGuevara} alt="ApeGuevara" />
                                        <p>ApeGuevara</p>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                        <div className='team-row'>
                            <div className='team-col team-img-col pd-right'>
                                <div className='team-img'>
                                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                                        <img src={designteam} alt="Design Team" />
                                        <p>Design Team</p>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                            <div className='team-col team-content-col'>
                                <div className='team-content links-wrap'>
                                    <AnimationOnScroll animateIn="animate__fadeInRight">
                                        <p> <a href='https://www.artstation.com/vaxopipia' target="_blank">https://www.artstation.com/vaxopipia</a></p>
                                        <p><a href='https://www.artstation.com/dazdud' target="_blank">https://www.artstation.com/dazdud</a></p>
                                        <p> <a href='https://www.artstation.com/bachibacho' target="_blank">https://www.artstation.com/bachibacho</a>
                                        </p>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Meet Our Founding Team section */}

            {/* Frequently Asked Questions section */}
            <div className='frequentltask-sec scroll-top'>
                <div className='container-wrapper'>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <h2>Frequently Asked Questions</h2>
                    </AnimationOnScroll>
                    <div className='collapse-row'>
                        <div className='collapse-col'>
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                                <Collapse defaultActiveKey={['1']} onChange={callback}>
                                    <Panel header="When is the official Mint?" key="1">
                                        <p>The official mint is planned for the first week of April. The date will be announced in the #announcements channel. Minting will be on the official website.
                                        </p>
                                    </Panel>
                                    <Panel header="How many 777 Club NFTs will be released?" key="2">
                                        <p>The Clubhouse Founder collection is our first drop, including 777 Clubhouse Passes, enabling owners to benefit from alpha and drops in the digital world and unique experiences in the physical world. Get in early and stay for the long run; you’ll thank us later.
                                        </p>
                                        <p>777 (Yes, seven hundred and seventy-seven) Clubhouse Passes for people looking to catch the latest drop, travel the world, party with the most exclusive crowds in the most remote destinations, or enjoy a unique experience… that’s all we’ll say for now. This will give you access to free mint at public sale plus utility, rewards, and exclusive access to upcoming events.</p>
                                    </Panel>
                                    <Panel header="How do I buy a 777 Club NFT?" key="3">
                                        <p>All sales will happen directly on our official website. We will never DM you or send you any links from unofficial channels.
                                        </p>
                                    </Panel>
                                    <Panel header="What blockchain is the project hosted?" key="4">
                                        <p>The Ethereum Blockchain. -  ERC721. </p>
                                    </Panel>
                                    <Panel header="How can I use my 777?" key="5">
                                        <p>We have been travelling the world for the better part of a decade, mapping the biggest and best destinations, parties, and festivals, and making personal connections with the whos-who across the globe. You can use your NFT for our insane Coachella weekend getaway (lineup announcement in next two weeks), access to all our private parties worldwide with the biggest DJs in the world, 24/7 concierge service for yacht rentals, jet charters, travel, and an overall VIP lifestyle. We are also taking a plot of meta-estate to develop our metaverse social club for special events, NFT exhibitions, and more. Your Clubhouse pass gives you exclusive access to all we know and more.
                                        </p>
                                        <p>We have been travelling the world for the better part of a decade, mapping the biggest and best destinations, parties, and festivals, and making personal connections with the whos-who across the globe. You can use your NFT for our insane Coachella weekend getaway (lineup announcement in next two weeks), access to all our private parties worldwide with the biggest DJs in the world, 24/7 concierge service for yacht rentals, jet charters, travel, and an overall VIP lifestyle. We are also taking a plot of meta-estate to develop our metaverse social club for special events, NFT exhibitions, and more. Your Clubhouse pass gives you exclusive access to all we know and more.

                                        </p>
                                        <p>A little sneak peek:
                                            -Coachella Kick-Off Event
                                            -Formula 1 Activation
                                            -Private event in Barcelona during OffWeek Festival
                                            -Villa party in Mykonos with surprise guest
                                            -Burning Man
                                        </p>
                                        <p>& So much more.
                                        </p>
                                    </Panel>
                                    <Panel header="Do you have a whitelist?" key="6">
                                        <p>Yes! You can find out more on the #whitelist-channel in our Discord.</p>
                                    </Panel>
                                </Collapse>
                            </AnimationOnScroll>
                        </div>
                        <div className='collapse-col'>
                            <AnimationOnScroll animateIn="animate__fadeInRight">
                                <Collapse defaultActiveKey={['1']} onChange={callback}>
                                    <Panel header=" What do we expect on roadmap development after mint day?" key="7">
                                        <p>We have quite a few things planned for our Clubhouse Founders. We don’t want to ruin all the surprises, but we’re focused on creating a DAO giving governance and voting rights through staking to people looking to experience 777 culture.
                                        </p>
                                        <p>The 1st stage on our roadmap is having a successful mint of the Clubhouse Collection - 777 Founding Mint Passes with some extra kick.
                                            Following that, we will begin a mass-marketing campaign utilizing some of the best marketing firms in the crypto and NFT space to grow our community and benefit our holders.
                                        </p>
                                    </Panel>
                                    <Panel header="Do you have any plans to collaborate with other projects?" key="8">
                                        <p>Yes. Expect some significant collaborations. Our team members are holders of BAYC, MAYC, & more.</p>
                                    </Panel>
                                    <Panel header=" How many Whitelist spots will there be after the Clubhouse Collection?" key="9">
                                        <p>After the Clubhouse mint, we will update the number of WL spots.</p>
                                    </Panel>
                                    <Panel header="Are there any plans to invest some of the money obtained by the sale into the project's future? If so, could you give us a general idea of how?" key="10">
                                        <p>We’re focused on long-term development by investing funds to acquire property early in the history of the Metaverse and lock down more exclusive events. We will also develop a 24/7 concierge service via a proprietary app, more in-person events, and exclusive access.
                                        </p>
                                    </Panel>
                                    <Panel header="Any updates on the OpenSea account? Including rarity.tools?" key="11">
                                        <p>We are working on verification with OpenSea and will ensure that it will be on a rarity site after we reveal our collection. This will not be necessary for the Clubhouse Founder Passes.</p>
                                    </Panel>
                                    <Panel header="When are you going to publish the smart contract?" key="12">
                                        <p>The smart contract address will be listed closer to the mint date.
                                            We will link it to our OpenSea account in due course.
                                        </p>
                                    </Panel>
                                </Collapse>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </div>
            {/* Frequently Asked Questions section */}
        </>
    );
};
export default Home;