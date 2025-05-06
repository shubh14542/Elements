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
     forgot_password : {
      url : '/api/user/forgot-password',
      method : 'put'
   },
   forgot_password_otp : {
      url : '/api/user/otp-verification',
      method : 'put'
   },
   reset_password_api : {
      url : '/api/user/reset-password-api',
      method : 'put'
   }
}
export default SummaryApi