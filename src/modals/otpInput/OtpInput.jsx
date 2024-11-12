import React, { useContext, useEffect, useState } from 'react'
// import { RecoveryContext } from '../../components/navbar/Navbar'
import axios from 'axios'
const OtpInput = () => {

// const {email,  otp , setPage} = useContext(RecoveryContext)
const [timeCount , setTimeCount] = useState(60)
const [disable , setDisable]  = useState(false)
const [OTPinput , setOTPinput] = useState[0,0,0,0]

function resentOTP (){
    if(disable) return;
    else{
    axios.post("http://localhost:5000/send_recovery_emaill" ,{
OTP :otp,
recipient_email : email
    })
    .then(()=> setDisable(true))
    .then(() => alert ("A New otp has successfully been sent to your email"))
    .then(() => setTimeCount(60))
    .catch(() => console.log("new error occured "))
}
}
function verifyOTP (){
    if(parseInt(OTPinput.join("")) === otp){
        setPage("reset");
        return;
    }
    alert("this code you entered is not coorect , try again or re-send the link")
    return ;
}
useEffect(()=>{
let interval = setInterval(()=>{
    setTimeCount((lastTimerCount)=>{
        lastTimerCount <= 1 && clearInterval(interval) 
        if(lastTimerCount <= 1) setDisable(false);
        if(lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1
    })
},1000)
return ()=> clearInterval(interval)
},[disable])
  return (
    <div>
      Email verification
      {/* <p>we have sent a code to your email {email}</p> */}

      <form>
        <div>
            <div>
                <input
                maxLength="1"
type='text'
name=''
id=''
onChange={(e) => 
    setOTPinput ([
        e.target.value,
        OTPinput[1],
        OTPinput[2],
        OTPinput[3],

    ])}
                />
                <input
                maxLength="1"
type='text'
name=''
id=''
onChange={(e) => 
    setOTPinput ([
        OTPinput[0],
        e.target.value,
        OTPinput[2],
        OTPinput[3],

    ])}
                />
                <input
                maxLength="1"
type='text'
name=''
id=''
onChange={(e) => 
    setOTPinput ([
        OTPinput[0],
        
        OTPinput[1],
        e.target.value,
        OTPinput[3],

    ])}
                />
                <input
                maxLength="1"
type='text'
name=''
id=''
onChange={(e) => 
    setOTPinput ([
        e.target.value,
        OTPinput[1],
        OTPinput[2],
        OTPinput[3],

    ])
}
                />
            </div>
        </div>
        <div>
            <a onClick={ () => verifyOTP()}>
                verify Account
            </a>
        </div>
        <div>
<p>Didn't receive otp. <a 
style={{
    color: disable ? "gray" : "blue",
    cursor: disable ? "none" : "pointer",
    textDecorationLine: disable ? "none" : "underline"
}}
onClick={() => resentOTP()}>{disable ? `resend OTP in  ${timeCount}s`  : "resend OTP"}</a></p>
        </div>
      </form>
    </div>
  )
}

export default OtpInput
