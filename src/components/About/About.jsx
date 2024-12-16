import './About.css'
import about_image from '../../assets/about_image.jpg'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayVideo}) => {
  return (
    <div className='about'>
      <div className="about_left">
        <img src={about_image} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {
          setPlayVideo(true)
        }}/>
      </div>
      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Building Leaders of Tomorrow</h2>
        <p>Our university is a hub of innovation, academic excellence, and holistic growth, dedicated to nurturing future leaders and problem-solvers. With a vibrant campus culture, state-of-the-art facilities, and a commitment to impactful research, we strive to empower students with the skills and knowledge to thrive in a dynamic world.</p>
        <p>We offer a diverse range of programs designed to meet global standards, ensuring students are prepared for the demands of modern industries and professions. Our distinguished faculty, industry partnerships, and community-focused initiatives create an enriching environment where creativity, collaboration, and critical thinking flourish.</p>
        <p>At the heart of our mission is the drive to shape a brighter future through education and innovation. By fostering inclusivity, sustainability, and technological advancement, we are building a community of thinkers and doers who are ready to make a difference locally and globally.</p>
      </div>
    </div>
  )
}

export default About
