/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

export { default as wrapRootElement } from './src/redux/store';

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <meta charSet="utf-8"></meta>,
        <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>,
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>,
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>,

        // <link href="https.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Source+Sans+P://fontsro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
        // <script src="/assests/js/jquery.main.js" defer=""></script>
    ])
}
