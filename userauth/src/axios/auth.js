import axios from "axios";

export const authApi = axios.create({});

authApi.interceptors.request.use();
