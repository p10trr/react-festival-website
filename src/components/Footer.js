import React from 'react'

const Footer = () => {
  return (
    <section className='footer-container'>
        <div className='sponsors-container'>
            <h1 className='heading'>OUR COLLABORATORS</h1>
            <div className='sponsors'>
              <div className='partner'>
                <img src="/assets/worthingSquare.png" alt="worthing square logo" />
                <div className='middle'><h1>Worthing <br/> Square</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/holdersMarket.jpeg" alt="holders market logo" />
                       <div className='middle'><h1>Holders <br/>House <br/>Farmers<br/>Market</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/bimVibes.jpeg" alt="bim bives logo" />
                       <div className='middle'><h1>BIM Vibes.</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/mountGay.png" alt="Mount gay logo" />
                       <div className='middle'><h1>Mount Gay</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/rhajPaul.jpeg" alt="rhaj paul logo" />
                       <div className='middle'><h1>Rhaj Paul</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/Victor Olivier.jpeg" alt="victor olivier logo" />
                     <div className='middle'><h1>Victor  <br/>Olivier</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/juniorsealy.jpeg" alt="junior sealy logo" />
                     <div className='middle'><h1>Junior<br/>Sealy</h1></div>
              </div>
              <div className='partner'>
                <img src="/assets/sageBar.jpeg" alt="sage bar logo" />
                     <div className='middle'><h1>Sage Bar<br/>And Stage</h1></div>
              </div>
            </div>
        </div>
        <footer>P10+rek | 2022</footer>
    </section>
  )
}

export default Footer