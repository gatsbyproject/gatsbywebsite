import React from 'react'
import 'react-responsive-modal/styles.css';
import './style.css'
import { startSetUser } from '../../redux/User/user.actions'
import { connect } from 'react-redux'

const User = (props) => {
    // const name = props.name
    const parentCall = props.parentCall
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
                        <input type="password" id="password" required name="password2" onChange={handleChange1} />
                    </div>
                    <input type="submit" style={{ boxShadow: 'none' }} className="btn" value="Login" />
                </div>
            </form>
            <a type="button" onClick={() => { parentCall('register'); }}>Don't have an account <b>Register</b></a>


        </>
    )
}


export default connect()(User)

// Modal({ open, center, blockScroll, closeOnEsc, closeOnOverlayClick, container, showCloseIcon, closeIconId, closeIcon, focusTrapped, animationDuration, classNames, styles, role, ariaDescribedby, ariaLabelledby, modalId, onClose, onEscKeyDown, onOverlayClick, onAnimationEnd, children, }: ModalProps): React.ReactPortal