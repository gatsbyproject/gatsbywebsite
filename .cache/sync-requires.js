const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-components-events-event-js": hot(preferDefault(require("D:\\new1\\src\\components\\Events\\Event.js"))),
  "component---src-components-events-events-js": hot(preferDefault(require("D:\\new1\\src\\components\\Events\\Events.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\new1\\src\\pages\\404.js"))),
  "component---src-pages-about-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\AboutPage.js"))),
  "component---src-pages-event-calendar-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\EventCalendarPage.js"))),
  "component---src-pages-event-host-js": hot(preferDefault(require("D:\\new1\\src\\pages\\EventHost.js"))),
  "component---src-pages-event-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\EventPage.js"))),
  "component---src-pages-event-visual-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\EventVisualPage.js"))),
  "component---src-pages-events-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\EventsPage.js"))),
  "component---src-pages-faq-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\FAQPage.js"))),
  "component---src-pages-home-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\HomePage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\new1\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("D:\\new1\\src\\pages\\page-2.js"))),
  "component---src-pages-testimonial-page-js": hot(preferDefault(require("D:\\new1\\src\\pages\\TestimonialPage.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("D:\\new1\\src\\pages\\using-typescript.tsx")))
}

