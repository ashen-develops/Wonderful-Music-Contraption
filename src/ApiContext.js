import React from 'react'

export default React.createContext({
  users: [],
  passwords: [],
  songs: [],
  addUser: () => {},
  addPassword: () => {},
})