import React from 'react'
import { Modal } from 'react-responsive-modal'
const Register = () => {
    return (
        <>
            <h1>Register:</h1>
            <form action="#" className="form-message">
                <div className="field">
                    <div className="field">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" />
                    </div>
                    <div className="field">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="pwd">Password:</label>
                        <input type="text" id="pwd" />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" />
                    </div>
                    <div className="field">
                        <label htmlFor="invite">Invite Code:</label>
                        <input type="text" id="invite" />
                    </div>
                    <input type="submit" style={{ boxShadow: 'none' }} className="btn" value="Register" />
                </div>
            </form>
        </>
    )
}

export default Register
