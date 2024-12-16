import { useState } from 'react';
import './Order.css';

export default function Order() {

    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter => counter + 1)
    }
    const remove = () => {
        setCounter(counter => counter - 1)
    }

    const [userSearch, setUserSearch] = useState('')
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="order">
                <div className="your-order">
                    <h2>Your Order</h2>
                    <div className="container3">
                        <div className="input-field">
                            <label htmlFor="">Your Name:</label>
                            <input type="text" placeholder='Enter your name' ></input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="">Mobile No:</label>
                            <input type="number" placeholder='..........'></input>
                        </div>
                        <div className="input-field">
                            <label>Your Order:</label>
                            <input type="number" placeholder={counter} ></input>
                        </div>
                        <div className="btn">
                            <button onClick={add}>Add</button>
                            <button onClick={remove}>Remove</button>
                        </div>
                    </div>
                </div>
                <div className="feedback">
                    <h2>Your Feedback</h2>
                    <div className="container4">
                        <p>Your feedback is valuable for us!</p>
                        <div className="box">
                            <input type="text" onChange={(a) => setUserSearch(a.target.value)}></input>
                            <button onClick={() => { setToggle(toggle => !toggle) }}>Submit</button>
                        </div>
                        {
                            toggle &&
                            <p>Your Feedback : <strong>{userSearch}</strong></p>
                        }
                    </div>
                    <h2 id='thanks'>Thanks For Visiting..Come Again..!</h2>
                </div>
            </div>
        </>
    )
}