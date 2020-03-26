import React from 'react'

const UserConctext=React.createContext('codevoulation')

const UserProvide=UserConctext.Provider
const UserConsumer=UserConctext.Consumer

export {UserProvide,UserConsumer}
export default UserConctext