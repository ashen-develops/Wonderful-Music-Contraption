import React from 'react'

export default React.createContext({
  users: [],
  passwords: [],
  addUser: () => {},
  addPassword: () => {},
})