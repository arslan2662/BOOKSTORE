import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                isLoggedIn: false,
                user: null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            window.location.reload();
        } catch (error) {
            toast.error("error:" + error.message);
        }
    }
  return (
    <div>
      <button classNmame="pxp-3 py-2 bg-red  text-white rounded-md cursor-pointer"
      onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
 