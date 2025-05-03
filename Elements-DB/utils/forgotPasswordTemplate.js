const forgotPasswordTemplate = ({name,otp}) =>{

     return `
    <div>
    <p> Dear, ${name} </p>
    <p> You are requested a password reset.</p>
    </div>
    <div>
    ${otp}
    </div>
    <div>
     <p>valid for 30 mins only</p>
     <p>Thanks, BinkeyIt</p>
    </div>
    `

}

export default forgotPasswordTemplate