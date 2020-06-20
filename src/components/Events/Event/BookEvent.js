import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './style.css'
const BookEvent = ({ event, parentCall }) => {
    const { handleSubmit, register, errors, setError, clearError } = useForm();

    let thisYear = (new Date()).getFullYear();
    const [monthOptions, getMonth] = useState(null)
    const [yearOptions, getYears] = useState(null)
    useEffect(
        () => {
            const yearsOptions = [], monthsOptions = []
            for (var i = 0; i <= 60; i++) {
                const Year = thisYear;
                yearsOptions.push(Year)
                thisYear = thisYear + 1
            }
            for (var i = 1; i <= 12; i++) {
                const Month = i
                monthsOptions.push(Month)
            }
            getYears(yearsOptions)
            getMonth(monthsOptions)
        }, []
    )
    const formatAMPM = (date) => {
        var date = new Date(date);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const startTime = formatAMPM(event.eventStartTime)
    const endTime = formatAMPM(event.eventEndTime)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
        "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const date = new Date(event.eventStartTime)
    const year = date.getUTCFullYear()
    const month = monthNames[date.getUTCMonth() + 1]
    const datee = date.getUTCDate()
    var dif;
    dif = (new Date(event.eventEndTime) - new Date(event.eventStartTime)) / 1000 / 60;
    if (dif > 90) {
        dif = (new Date(event.eventEndTime) - new Date(event.eventStartTime)) / 1000 / 60 / 60;
    }
    const [cardType, setCardType] = useState(null)
    console.log(event)
    console.log(cardType)
    const onSubmit = values => console.log(values);
    return (
        <>
            <div class="host-detail">
                <header class="head">
                    <a type="button" class="btn-back" onClick={() => parentCall(1)}><i class="icon icon-back"></i>Back</a>
                </header>
                <div class="detail-box style">
                    <h1 class="h3">{event.title}</h1>
                    <p>{event.description}</p>
                    <div class="event-location" style={{ marginBottom: '17px' }}>
                        <div class="col">
                            <i class="icon icon-calendar"></i>
                            <strong class="heading"><time>{`${month} ${datee}th, ${year}`}</time></strong>
                            <span class="time">{`${startTime}-${endTime}`}</span>
                        </div>
                        <div class="col">
                            <i class="icon icon-location"></i>
                            <strong class="heading">Location:</strong>
                            <address>{event.eventCity}</address>
                        </div>
                    </div>
                    <form class="form-booking" onSubmit={handleSubmit(onSubmit)}>
                        <div class="row-fields">
                            <div class="col1">
                                <label htmlFor="promo">Promo/Pass Code:</label>
                            </div>
                            <div class="col1">
                                <input type="text" id="promo" />
                            </div>
                        </div>
                        <div class="row-fields">
                            <div class="col1">
                                <strong class="heaing">Cost:</strong>
                            </div>
                            <div class="col1">
                                <div class="price-info" style={{ justifyContent: 'flex-end' }}>
                                    <strong class="price">${event.price}</strong>
                                </div>
                            </div>
                        </div>
                        <div class="row-fields" style={{ justifyContent: 'center' }}>
                            <span class="info-text">Includes the evnet and one drink tickets at the after event mixer.</span>
                        </div>
                        <hr />
                        <div class="row-fields">
                            <div class="col1">
                                <label htmlFor="card">Card Type:</label>
                            </div>
                            <div class="col1">
                                <select
                                    id="card"
                                    name="creditCard"
                                    style={{ width: '100%' }}
                                    onChange={(e) => { setCardType(e.target.value) }}
                                    ref={register({ required: true })}
                                >
                                    <option hidden value="">Select Card Type</option>
                                    <option value="VISA">VISA</option>
                                    <option value="MASTER CARD">MASTER CARD</option>
                                    <option value="DISCOVER">DISCOVER</option>
                                </select>
                            </div>
                        </div>
                        <div class="row-fields">
                            <div class="col1">
                                <label htmlFor="name">Name on Card:</label>
                                <input type="text" name="cardName" id="name" style={{ width: '207%' }} ref={register({ required: true })} />
                            </div>
                        </div>
                        <div class="row-fields">
                            <div class="col1">
                                <label htmlFor="number">Card Number:</label>
                                <input type="text" name="cardNumber" id="number" style={{ width: '207%' }} ref={register({
                                    required: true,
                                })}
                                    onChange={
                                        (e) => {
                                            const value = e.target.value;
                                            var regex = /[^0-9]/gi;
                                            e.target.value = e.target.value.replace(regex, "");
                                            var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
                                            var masterCard = /^(?:5[1-5][0-9]{14})$/;
                                            var discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
                                            if (cardType === "VISA") {
                                                if (value.match(visa)) {
                                                    return clearError("cardNumber");
                                                }
                                                else {
                                                    setError("cardNumber", "notMatch", "Not a Valid VISA Card Number");
                                                }
                                            } else if (cardType === "MASTER CARD") {
                                                if (value.match(masterCard)) {
                                                    return clearError("cardNumber");
                                                }
                                                else {
                                                    setError("cardNumber", "notMatch", "Not a Valid MASTER Card Number");
                                                }
                                            } else if (cardType === "DISCOVER") {
                                                if (value.match(discover)) {
                                                    return clearError("cardNumber");
                                                }
                                                else {
                                                    setError("cardNumber", "notMatch", "Not a Valid DISCOVER Card Number");
                                                }
                                            } else {
                                                setError("cardNumber", "notMatch", "Select Card Type");
                                            }
                                        }
                                    }
                                />
                                {errors.cardNumber && <p class="errors">{errors.cardNumber.message}</p>}
                            </div>
                        </div>
                        <div class="row-fields">
                            <div class="col1">
                                <label htmlFor="ccv">CCV:</label>
                            </div>
                            <div class="col1 d-flex" style={{ justifyContent: "flex-end" }}>
                                <input type="password" name="ccv" id="ccv" style={{ width: '38%' }} ref={register({ required: true })}
                                    maxLength="3"
                                    onChange={
                                        (e) => {
                                            const value = e.target.value;
                                            var regex = /[^0-9]/gi;
                                            e.target.value = e.target.value.replace(regex, "");
                                        }
                                    }
                                />
                            </div>
                        </div>
                        <div class="row-fields">
                            <div class="col1">
                                <label htmlFor="expiry">Expire Date:</label>
                            </div>
                            <div class="col1">
                                <div class="two-fields">
                                    <div class="field">
                                        <select id="expiry" name="expireMonth" style={{ width: '100%' }} ref={register({ required: true })}>
                                            <option hidden value="">Month</option>
                                            {
                                                (monthOptions) ?
                                                    monthOptions.map(m1 => {
                                                        return (
                                                            <option key={m1} value={m1}>{m1}</option>
                                                        )
                                                    }) : (<option>Loading...</option>)
                                            }
                                        </select>
                                    </div>
                                    <div class="field">
                                        <select id="expiry" name="expireYear" style={{ width: '100%' }} ref={register({ required: true })}>
                                            <option hidden value="">Year</option>
                                            {
                                                (yearOptions) ?
                                                    yearOptions.map(y1 => {
                                                        return (
                                                            <option key={y1} value={y1}>{y1}</option>
                                                        )
                                                    }) : (<option>Loading...</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <label class="check-holder">
                            <input type="checkbox" name="save" value="yes" ref={register} />
                            <span class="fake-check"></span>
                                                                        Save card for later use
                                                                    </label>
                        <input type="submit" class="btn" value="Book Event" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookEvent



