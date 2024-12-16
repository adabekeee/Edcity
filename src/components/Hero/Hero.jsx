import './Hero.css'
import arrowhead from '../../assets/arrowhead.png';

const Hero = () => {
  return (
    <div className='hero Container'>
      <div className="hero_text">
        <h1>Better Education for a better tomorrow</h1>
        <p>Our approach to education ensures an eagerness and easy acceptance of knowldge by people from different backgrounds which equips students with cutting-edge knowledge, skills and experiences</p>
        <button className='button'>Explore more <img src={arrowhead} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default Hero
