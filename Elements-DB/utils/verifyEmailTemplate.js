
const verifyEmailTemplate = ({name,url}) =>{
    return `
    <p>Dear ${name} </p>
    <p> Thank you for registering BinkeyIt.</p>

    <a href = ${url} > Verify Email </a> `
}

export default verifyEmailTemplate