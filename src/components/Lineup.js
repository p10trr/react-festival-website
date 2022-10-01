import React from 'react';
import data from '../data'

const Lineup = () => {
  return (
    <section className='lineup-container'>
      <div className='lineup'>
        <h1 className='heading'>PERFORMERS</h1>
        <div className='sponsors'>
          {data.map((artist)=>{
        const {id, image, name} = artist;
        return (
        <>
          {id > 0 && <div key={id} className="artist-card partner">
            <img src={image} alt={name} />
            <h3>{name}</h3>
          </div>}
         </> 
        )
        })}
        </div>
      </div>

    </section>
  )
}

export default Lineup