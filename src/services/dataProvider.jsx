import axios from 'axios'
import jsonServerProvider from 'ra-data-json-server'
import {fetchUtils} from 'react-admin'
import inMemoryJWT from './inMemoryJWT'

const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/admin`

const fetchJson = async(url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'})
    }

    const { accessToken, expiry } = JSON.parse(localStorage.getItem('oauth')) || {};
    const jwt = inMemoryJWT.getToken()

    if (accessToken && expiry && new Date(expiry) > new Date()) {
        options.headers.set('oauth_token', accessToken)
    }
    else {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/oauth/token`, {
            client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
            client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
        })

        options.headers.set('oauth_token', response.data.access_token)
        localStorage.setItem('oauth', JSON.stringify({
            accessToken: response.data.access_token,
            expiry: response.data.expires_in,
        }))
    }

    if (jwt) {
        options.headers.set('Authorization', `Bearer ${jwt}`)
    }

    return fetchUtils.fetchJson(url, options)
}

const dataProvider = jsonServerProvider(apiUrl, fetchJson)

export default dataProvider