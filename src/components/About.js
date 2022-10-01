import React from 'react'


const About = () => {
  return (
   <section className='home-container'>
    <div className='lineup'>
      <h1 className='heading'>OUR VISION</h1>
      <div className='vision-container'>
        <img src="/assets/barbadosOutline.jpg" alt="view of the sea" />
        <div className='vision-text'>
        <p>An annual cultural exchange</p>
        <p>Bringing together Bajan, regional and international artists from different cultures and backgrounds under one event to create a multi-genre, socially conscious performing arts festival</p>
        <p>SAT 18 MARCH 2023</p>
        <p>GREEN ACRES VENUE, BRIDGETOWN <br/> 2000+ capacity</p>
        </div>
      </div>
      <p className='quote'><em>“This is not only a great idea but a necessary one. We need a festival like this annually as there is nothing happening where a mix of different musical styles and local and regional artists can share the stage” </em><br/>Arturo Tappin, Saxophonist</p>
    </div>
    <div className='content-container'>
      <h1 className='heading'> WHAT TO EXPECT</h1>
      <p>Silk Road festival is more than a music event. It represents cross-cultural collaboration - connecting musicians, artists, changemakers and audiences.</p>
      <div className='overview-container'>
        <div className='overview-card'>
          <img src="/assets/Guitarist.jpg" alt="guitarist" />
          <h5 className='overview-heading'>LIVE MUSIC & DJs</h5>
          <p className='overview-paragraph'>Featuring a diverse array of Bajan and regional talent - bands, artists, DJs and dancers performning musical styles including Reggae, Soca, Jazz, Funk, NeoSoul, Pop, Rock, Afrobeats, Latin & World Music</p>
        </div>
        <div className='overview-card'>
          <img src="/assets/GraphicGirl.jpg" alt="Girl with painted body" />
          <h5 className='overview-heading'>ARTS & FASHION</h5>
          <p className='overview-paragraph'>Showcasing Caribbean artists and fashion designers from the region. The festival will feature art and fashion exhibits, street art , tattoo art and craft stalls</p>
        </div>
        <div className='overview-card'>
          <img src="/assets/drumming barbados.jpg" alt="hand drums" />
          <h5 className='overview-heading'>EDUCATION</h5>
          <p className='overview-paragraph'>Discussions and workshops with changemakers and leaders in their field on social and environmental causes including women and girls empowerment; LGBTQ+ rights; climate conservation; supporting disadvantaged youth through music & creative arts therapy</p>
        </div>
      </div>
    </div>
    <div className='content-container'>
        <h1 className='heading'>FOUNDERS AND TEAM</h1>
        <div className='team-container'>
          <div className='person'>
            <img src="/assets/priyanka.png" alt="priyanka"/>
            <div className='team-text'>
              <h6 className='overview-heading'>PRIYANKA DEVANI</h6>
              <p>Founder of Silk Road Music Ltd</p>
              <p>Multi-instrumentalist and events organizer based in the UK and Barbados</p>
              <p>International development practitioner - Education and Women’s rights</p>
            </div>
          </div>
          <div className='person'>
            <img src="/assets/faye.png" alt="faye"/>
            <div className='team-text'>
              <h6 className='overview-heading'>FAYE FINISTERRE</h6>
              <p>Attorney and Founder of Finsisterre Attorneys based in Barbados</p>
              <p>Visiting Lecturer at UWI</p>
              <p>Events organizer</p>
              <p>Afro Deity and fashion model</p>
            </div>
          </div>
          <div className='person'>
            <div className='team-text back'>
              <h6 className='overview-heading'>SHANE BEST</h6>
              <p>Owner of production company BESTEFEX</p>
              <p>Successfully running high profile events all over the Caribbean for the past 10 years</p>
              <p>Venues include: Sandals resorts, Nikki Beach Barbados and many other established brands</p>
            </div>
            <img src="/assets/shane.png" alt="shane"/>
          </div>
          <div className='person'>
            <div className='team-text back'>
              <h6 className='overview-heading'>SHARA GRAHAM</h6>
              <p>Entrepreneur based in Barbados</p>
              <p>Events planner and manager</p>
              <p>Barbados’ Coordinator for the group T&T Citizens Overseas</p>
              <p>Community organizer</p>
            </div>
            <img src="/assets/shara.png" alt="shara"/>
          </div>
        </div>
    </div>
   </section>
  )
}

export default About