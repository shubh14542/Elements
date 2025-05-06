
const verifyEmailTemplate = ({name,url}) =>{
    return `
    <p>Dear ${name} </p>
    <p> Thank you for registering Elements.</p>

    <a href = ${url} > Verify Email </a> `
}

export default verifyEmailTemplate