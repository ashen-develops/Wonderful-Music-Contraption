import config from '../config';

const AuthApiService = {
  // login user
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/api/auth`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),

      })
      .then(res =>
        (!res.ok) ?
        res.json().then(e => Promise.reject(e)) :
        res.json()
      )
      .catch(err => {
        console.log('error:', err)
      })
  },
  // register user
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/api/users`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res =>
      (!res.ok) ?
      res.json().then(e => Promise.reject(e)) :
      res.json()
      )
      .catch(err => {
        console.log('error:', err)
      })
  },
  // save combination of music
  postMusic(music) {
    return fetch(`${config.API_ENDPOINT}/api/music`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(music),
      })
      .then(res =>
      (!res.ok) ?
      res.json().then(e => Promise.reject(e)) :
      res.json()
      )
      .catch(err => {
        console.log('error:', err)
      })
  },
}

export default AuthApiService