import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import forward_icon from '../../assets/forward_icon.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

       
        formData.append("access_key", "Your_Access_Key");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Email sent Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };


  return (
    <div className='contact'>
        <div className="contact_column">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out to us through the contact information below. Yor feedback, questions and suggestions are important to us as we strive to provide an exceptional seervice to our university community.</p>
            <ul>
                <li>📧 develop.email00@gmail.com</li>
                <li>☎ +234 9087856782</li>
                <li>📍 2 louis avenue, Sydney  VU 009134, Auatralia. </li>
            </ul>
        </div>
        <div className="contact_column">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Your Phone Number</label>
                <input type="tel" name='number' placeholder='Enter your mobile phone nummber' required/>
                <label>Write Your Message Here</label>
                <textarea name="message" rows= "6" placeholder='Enter your message here' required></textarea>
                <button type='submit' className='button dark_button'>Submit Now <img src={forward_icon} alt="" /></button>            
            </form>
            <span>{result}</span>
        </div>   
    </div>
  )
}

export default Contact
