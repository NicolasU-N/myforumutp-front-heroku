import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://myforumutp-back.herokuapp.com"; //http://localhost:8080

axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get("userLoggedToken");

export default {
    getForos() {
        return axios.get(ENDPOINT_PATH + "/api/publicacion/all");
    },

    createForo(foro) {
        return axios.post(ENDPOINT_PATH + "/api/publicacion/new", foro);
    },
};