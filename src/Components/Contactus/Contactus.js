import React from 'react'
import { useState } from 'react';
import './Contact.css'
const Contactus = () =>  {
    const [name, setName] = useState('');
    const [num, setNum] = useState();
    const [date, setDate] = useState()
    const [message, setMessage] = useState()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleNumChange = (e) => {
        setNum(e.target.value)
    }

    const hadleDate = (e) => {
        setDate(e.target.value)
    }

    const handleMesChange = (e) => {
        setMessage(e.target.value)
    }

    const handleClear = (e) => {
        e.preventDefault();
        setName('');
        setNum('');
        setMessage('');
        setDate('');
    }
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
        const x = pointerX.toFixed(2)
        const y = pointerY.toFixed(2)
        const xp = (pointerX / window.innerWidth).toFixed(2)
        const yp = (pointerY / window.innerHeight).toFixed(2)
        document.documentElement.style.setProperty('--x', x)
        document.documentElement.style.setProperty('--xp', xp)
        document.documentElement.style.setProperty('--y', y)
        document.documentElement.style.setProperty('--yp', yp)
    }
    document.body.addEventListener('pointermove', syncPointer)
    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         name: name,
    //         numPeople: num,
    //         date: date,
    //         message: message
    //     };
    //     try {
    //         const response = await fetch('https://dummy.restapiexample.com/api/v1/create', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         });
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <h2>Get in Touch with Us Today – We're Here to Help!</h2>
            <p>At Exotic Veda, your satisfaction is our top priority. Whether you have a question about our products, need assistance with an order, or just want to share your feedback, we’re here to help. Please fill out the form below, and one of our team members will get back to you as soon as possible. We look forward to hearing from you and assisting with anything you need!</p>
            <p className="catering_test">Adress-1001 S MAIN ST STE 500 KALISPELL, MT 59901</p>
            <form>
                <input onChange={handleChange} value={name} placeholder="name"   />
                <input   placeholder="Message " type="test" />
               
                <br />
             
                <input onChange={handleMesChange} value={message} placeholder="Message \ Special requirements" type="test" />
                {message}
                <div className="button ">
                <button className='btn' ><span> SEND MESSAGE </span> </button>
                <button onClick={handleClear}  className='btn'><span>CLEAR MESSAGE</span></button>

                </div>            </form>
        </div>
    )
}

export default Contactus
