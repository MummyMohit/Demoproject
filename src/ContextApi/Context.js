
import { useState,useContext } from 'react';
import UserContext from './UserContext'
export const Context = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        console.log(isModalOpen)
    }
  return (
    <>
    <UserContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </UserContext.Provider>
    </>
  )
}
export default Context
