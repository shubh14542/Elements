export const baseURL = "http://localhost:5000"

const SummaryApi = {

    register : {
        url : '/api/user/register',
        method : 'post'
     },
     login : {
        url : '/api/user/login',
        method : 'post'
     },
     forgot_password_api : {
      url : '/api/user/forgot-password-api',
      method : 'put'
   },
   forgot_password_otp_api : {
      url : '/api/user/forgot-password-otp-api',
      method : 'put'
   },
   reset_password_api : {
      url : '/api/user/reset-password-api',
      method : 'put'
   }
}
export default SummaryApi