import Axios from "axios";
// global axios api
const axios = Axios.create({
    baseURL: "https://app.niftywidgets.io/app/md"
});
export default axios;