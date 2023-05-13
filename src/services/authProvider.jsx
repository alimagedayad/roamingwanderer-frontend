import inMemoryJWT from "./inMemoryJWT";
import axiosClient from "./axiosClient";

const authProvider = {
    login: ({ username, password }) => { 
        const request = axiosClient.post('/admin/login', { email: username, password });
        return request.then(response => {
            if(response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText)
            }
            inMemoryJWT.setToken(response.data.jwt)
            return response.data
        })
    },
    logout: () => {
        inMemoryJWT.eraseToken();
        return Promise.resolve()
    },
    
    checkAuth: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject()
    },

    checkError: ({ status }) => {
        if(status === 401 || status === 403) {
            inMemoryJWT.eraseToken();
            return Promise.reject()
        }
        return Promise.resolve()
    },

    getPermissions: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject()
    }
}

export default authProvider;