import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({});

commentsAxios.interceptors.request.use();

commentsAxios.interceptors.response.use();

export default commentsAxios;
