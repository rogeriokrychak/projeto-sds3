import axios from 'axios';

export const api=axios.create({
    baseURL:'https:https://rogerio-aulas-sds3.herokuapp.com/'?? 'http://localhost:8080'
});