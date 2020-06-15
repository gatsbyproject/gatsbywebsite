import { eventsActionTypes } from './events.types'
import axios from '../../../config/axios'
export const setAllEvents = (events) => ({
    type: eventsActionTypes.SET_EVENTS,
    payload: events
})
export const setApiEvents = (data) => ({
    type: eventsActionTypes.SETAPI_EVENTS,
    payload: data
})
export const getEvents = () => {
    return async (dispatch) => {
        console.log('getEvents')
        const res = await axios.get('/getEvents')
        const data = [...res.data.events]

        const events = []
        let count = 1
        res.data.events.map(d1 => {
            const host = {}
            if (count == 1) {
                host['host'] = d1.host
                const event = { ...d1 }
                delete event.host
                // console.log(event)
                host['event'] = [event]
                events.push(host)
            } else {
                const check = events.find(f1 => f1.host.id === d1.host.id)
                if (check) {
                    events.map(e1 => {
                        if (e1.host.id === d1.host.id) {

                            const event = { ...d1 }
                            delete event.host
                            e1.event.push(event)
                            // console.log(e1.event.length)
                        }
                    })
                } else {
                    host['host'] = d1.host
                    const event = { ...d1 }
                    delete event.host
                    // console.log(event)
                    host['event'] = [event]
                    events.push(host)
                }
            }
            count++
            // console.log(events.length)
        })
        dispatch(setAllEvents(events))
        dispatch(setApiEvents(data))
        console.log('2')
        return 'done';
    }
}