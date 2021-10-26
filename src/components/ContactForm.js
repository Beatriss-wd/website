import React, {useState} from 'react'
import styled from 'styled-components';


const FormStyle = styled.div`
width: 100%;
.form-group{
    width: 100%;
    margin-bottom: 1.5rem;
    color: #808080;
}
label{
    font-size: 1.5rem;
}
input,textarea{
    width:100%;
    font-size:1.5rem;
    padding: 1rem;
    color: #808080;
    background-color:#1E1E1E;
    outline:none;
    border:none;
    border-radius: 8px;
    margin-top: 1rem;
}
textarea{
    min-height: 250px;
    resize:vertical;
}
button[type='submit']{
    background-color:#808080;
    color:black;
    font-size: 1.5rem;
    display:inline-block;
    outline:none;
    border:none;
    padding: 1rem 2rem;
    border-radius: 8px;
    cursor: pointer;


}

`

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <FormStyle>
            <form>
                <div className = "form-group">
                <label htmlFor="name">Your name
                <input 
                type = "text" 
                id="name" 
                name="name" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                </label> 
                </div>
                <div className = "form-group">
                <label htmlFor="email">Your email
                <input 
                type = "text" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                </label> 
                </div>
                <div className = "form-group">
                <label htmlFor="message">Your message
                <textarea 
                type = "text" 
                id="message" 
                name="message" 
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                />
                </label> 
                </div>
                <button type="submit" >Send</button>
            </form>
        </FormStyle>
    )
}
