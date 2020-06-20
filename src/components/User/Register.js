import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import './style.css'
import axios from '../../../config/axios'
import swal from 'sweetalert';
import { startSetUser } from '../../redux/User/user.actions'
import { connect } from 'react-redux'

const Register = ({ parentCall }) => {
    const tel = React.useRef(null)
    const numberOnly = () => {
        if (tel.current.value) {
            var regex = /[^0-9]/gi;
            tel.current.value = tel.current.value.replace(regex, "");
        }
    }
    const [values, getValues] = React.useState({ firstName: '', lastName: '', email: '', password2: '', phone: '', referInviteCode: '' })
    const handleInput = (e) => {
        getValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/register', values)
        try {
            if (res.data.err) {
                swal("Error", String(res.data.err), "error");
            } else {
                swal('Success', 'Registered', 'success')
                parentCall('login')
            }
        } catch (e) {
            swal("Error", String(e), "error");
        }
    }
    return (
        <>
            <h1>Register:</h1>
            <form action="#" className="form-message" onSubmit={handleSubmit}>
                <div className="field">
                    <div className="field">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" id="fname" name="firstName" style={{ height: '52px' }} required onChange={handleInput} />
                    </div>
                    <div className="field">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" id="lname" name="lastName" style={{ height: '52px' }} required onChange={handleInput} />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" style={{ height: '52px' }} required onChange={handleInput} />
                    </div>
                    <div className="field">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" id="pwd" name="password2" style={{ height: '52px' }} required onChange={handleInput} />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" ref={tel} onChange={(e) => { numberOnly(); handleInput(e) }} maxLength="10" style={{ height: '52px' }} required />
                    </div>
                    <div className="field">
                        <label htmlFor="invite">Invite Code:</label>
                        <input type="text" id="invite" name="referInviteCode" style={{ height: '52px' }} onChange={handleInput} />
                    </div>
                    <input type="submit" style={{ boxShadow: 'none' }} className="btn" value="Register" />
                </div>
            </form>
            <a type="button" onClick={() => { parentCall('login'); }}>Login Now</a>
        </>
    )
}
export default Register