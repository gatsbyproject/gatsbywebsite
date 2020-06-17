import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css';
import './style.css'
import axios from '../../../config/axios'
import swal from 'sweetalert';
import { startSetUser } from '../../redux/User/user.actions'
import { connect } from 'react-redux'
const Register = () => {
    const tel = React.useRef(null)
    const numberOnly = () => {
        if (tel.current.value) {
            var regex = /[^0-9]/gi;
            tel.current.value = tel.current.value.replace(regex, "");
        }
    }
    const [values, getValues] = React.useState({ firstName: '', lastName: '', email: '', password: '', phone: '', referInviteCode: '' })
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
                        <input type="text" id="pwd" name="password" style={{ height: '52px' }} required onChange={handleInput} />
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" ref={tel} onChange={numberOnly} maxLength="10" style={{ height: '52px' }} required onChange={handleInput} />
                    </div>
                    <div className="field">
                        <label htmlFor="invite">Invite Code:</label>
                        <input type="text" id="invite" name="referInviteCode" style={{ height: '52px' }} onChange={handleInput} />
                    </div>
                    <input type="submit" style={{ boxShadow: 'none' }} className="btn" value="Register" />
                </div>
            </form>
        </>
    )
}
const User = (props) => {
    // const name = props.name
    const parentCall = props.parentCall
    const [openFirst, setOpenFirst] = React.useState(false)
    const [openSecond, setOpenSecond] = React.useState(false)
    const [loginValue, getloginValues] = React.useState({})
    const handleChange1 = (e) => {
        getloginValues({
            ...loginValue,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit1 = async (e) => {
        e.preventDefault()
        var c = await props.dispatch(startSetUser(loginValue))
        console.log(c)
        if (c) {
            parentCall('yes')
        }
    }


    return (
        <>
            {/* <button className="button" onClick={() => setOpenFirst(true)}>
                Open first modal
      </button> */}

            <h1>Login:</h1>
            <form action="#" className="form-message" style={{ marginBottom: '3em' }} onSubmit={handleSubmit1}>
                <div className="field">
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required name="email" onChange={handleChange1} />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Password:</label>
                        <input type="password" id="password" required name="password" onChange={handleChange1} />
                    </div>
                    <input type="submit" style={{ boxShadow: 'none' }} className="btn" value="Login" />
                </div>
            </form>
            <a type="button" onClick={() => setOpenSecond(true)}>Don't have an account <b>Register</b></a>

            <Modal
                styles={{ modal: { borderRadius: '14px' }, overlay: { background: 'rgba(0, 0, 0, 0.25)' } }}
                open={openSecond}
                onClose={() => setOpenSecond(false)}
                classNames={{
                    animationIn: 'customEnterAnimation',
                    animationOut: 'customLeaveAnimation',
                }}

                animationDuration={1000}
                center>
                <Register />
            </Modal>
        </>
    )
}


export default connect()(User)

// Modal({ open, center, blockScroll, closeOnEsc, closeOnOverlayClick, container, showCloseIcon, closeIconId, closeIcon, focusTrapped, animationDuration, classNames, styles, role, ariaDescribedby, ariaLabelledby, modalId, onClose, onEscKeyDown, onOverlayClick, onAnimationEnd, children, }: ModalProps): React.ReactPortal