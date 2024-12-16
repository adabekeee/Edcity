import './Testimonials.css'
import back_icon from '../../assets/back_icon.png'
import forward_icon from '../../assets/forward_icon.png'
import student_1 from '../../assets/student_1.jpg'
import student_2 from '../../assets/student_2.jpg'
import student_3 from '../../assets/student_3.jpg'
import student_4 from '../../assets/student_4.jpg'
import { useRef } from 'react'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return ( 
    <div className='testimonials'>      
        <img src={back_icon} alt="" className='back_button' onClick={slideBackward}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        <img src={forward_icon} alt="" className='forward_button' onClick={slideForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={student_1} alt="" />
                            <div>
                               <h3>Annaelese Tommos</h3> 
                               <span>MSc. Computer Science</span>
                            </div>
                        </div>
                        <p>This school has helped me become who I am today. I started out shy and unsure, but with the encouragement of my teachers and friends, I’ve grown confident and found my voice. I’m truly grateful for the support and care I’ve received here. Thank you!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={student_2} alt="" />
                            <div>
                               <h3>Juliet Romero</h3> 
                               <span>BEng. Computer Engineering</span>
                            </div>
                        </div>
                        <p>This school has been a place of growth and opportunity. From academics to extracurriculars, I’ve learned teamwork, discipline, and perseverance. Thank you to the teachers who pushed me to aim higher and believe in myself.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={student_3} alt="" />
                            <div>
                               <h3>James Miller</h3> 
                               <span>MSc. Industrial chemistry</span>
                            </div>
                        </div>
                        <p>To me, this school is home. The teachers, friends, and sense of community made me feel valued and supported every step of the way. I’ve learned kindness and teamwork, and I’ll always carry those lessons with me.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={student_4} alt="" />
                            <div>
                               <h3>Taylor Smith</h3> 
                               <span>PhD. Computer Science</span>
                            </div>
                        </div>
                        <p>This school turned my dreams into reality. With the guidance of my teachers and the support of this environment, I learned to work hard and never give up. Thank you for inspiring me to achieve my best.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
