var path = require('path')
module.exports = [
    {
        path: '/about',
        component: path.resolve(`src/pages/AboutPage.js`)
    },
    {
        path: '/',
        component: path.resolve(`src/pages/HomePage.js`)
    },
    {
        path: '/event-host',
        component: path.resolve(`src/pages/EventHost.js`)
    },
    {
        path: '/faq',
        component: path.resolve(`src/pages/FAQPage.js`)
    },
    {
        path: '/testimonial',
        component: path.resolve(`src/pages/TestimonialPage.js`)
    },
    {
        path: '/event-calendar',
        component: path.resolve(`src/pages/EventCalendarPage.js`)
    },
    {
        path: '/event-visual',
        component: path.resolve(`src/pages/EventVisualPage.js`)
    },
    {
        path: '/events',
        component: path.resolve(`src/pages/EventCalendarPage.js`)
    },
    {
        path: '/hostEvent',
        matchPath: '/hostEvent/:id',
        component: path.resolve(`src/components/Events/Event.js`)
    }
]