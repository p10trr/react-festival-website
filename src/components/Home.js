import React, {useState, useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from '../data'
const Home = () => {
  const [artists,setArtists] = useState(data);
  const [index,setIndex] = useState(0);

  useEffect(()=>{
const lastIndex = artists.length - 1;
if(index < 0) {
  setIndex(lastIndex)
} 
if(index > lastIndex){
  setIndex(0);
}
},[index,artists]);

useEffect(()=>{
  let slider = setInterval(()=>{
    setIndex(index + 1);
  },9000);
  return ()=> clearInterval(slider)
},[index])
  return (
    <main className='home-container'>
      <div className='main-container'>
        {artists.map((artist, artistIndex)=>{
          const {id,image, name, desc, tags} = artist;
          let position = 'nextSlide';
          if (artistIndex === index) {
            position = 'activeSlide'
          }
          if(artistIndex === index - 1 || 
            (index === 0 && artistIndex === artists.length - 1)){
            position = 'lastSlide'
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='artist-img' />
              <h4 className='artist-name'>{name}</h4>
              {desc && <p>{desc}</p>}
              {tags && <div><p className='tags'>{tags}</p>
              </div> }
            </article>
          );
        })}
        <button className='prev' onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
         <button className='next' onClick={()=> setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </main>
  )
}

export default Home