import React from 'react'
// import { useContext } from 'react'
// import { RecoveryContext } from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const navigate = useNavigate()
    // const {setPage} = useContext(RecoveryContext)
    function changePassword(){
// setPage("recovered")
navigate('/mainhomepage')
    }

  return (
    <div>
        <h2>Change Password</h2>
        <form>
            <div>
                <label htmlFor='change-password'>
                    change Password
                </label>
                <input
                type='password'
                name='change-password'
                id='change-password'
                required = ""
                />
            </div>
            <div>
                <label htmlFor='confirm-password'>
                    confirm Password
                </label>
                <input
                type='password'
                name='confirm-password'
                id='confirm-password'
                required = ""
                />
            </div>
        </form>
 <div >
    <button onClick={() => changePassword()}>Reset Password</button>
 </div>
    </div>
  )
}

export default ResetPassword
