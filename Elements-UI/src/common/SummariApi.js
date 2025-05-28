
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
   otp_verification : {
      url : '/api/user/otp-verification',
      method : 'put'
   },
   reset_password : {
      url : '/api/user/reset-password',
      method : 'put'
   },
   userDetails : {
      url :   'api/user/user-details',
      method : 'get'
   },
   logout : {
      url : '/api/user/logout',
      method : 'get'
   },
   refresh_token : {
         url : '/api/user/refresh-token',
         method : 'post'
   },
   upload_Avtar : {
      url : '/api/user/upload-avtar',
      method : 'put'
   },
   update_user : {
      url : '/api/user/update-user',
      method : 'put'
   },
   add_category : 
   {
      url : 'api/category/add-category',
      method : 'post'
   },
   upload_image : {
      url : '/api/file/upload',
      method : 'post'
   }
}
export default SummaryApi