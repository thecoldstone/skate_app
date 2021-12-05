/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import axios from 'axios';

/**
 * Configures api connection via axios 
 */
const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api'
});

export default api;