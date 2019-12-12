import setting from './settings'

export default (() => {
  return {
    'AUTH': 'Basic YWRtaW5Aa29vbGthbnlhOmtvb2xrYW55YUBhZG1pbg==',
    'USER_LOGIN': setting.api.url + "user/login",
    'USER_LOGOUT': setting.api.url + "user/logout",
    'USER_REGISTER': setting.api.url + "user/signUp",
    'EMAIL_EXIST_CHECK': setting.api.url + "user/emailExists",
    'USER_FORGOT_PASSWORD': setting.api.url + "user/forgotPassword",
    'USER_RESET_PASSWORD': setting.api.url + "user/resetPassword",
    'USER_PROFILE': setting.api.url + "user/getProfile",
    'EMAIL_VERIFICATION': setting.api.url + "user/verifyEmail",
    'LINKEDIN_DATA': setting.api.url + "user/linkedinData",
    'USER_CREATE_POST': setting.api.url + "post/create",
    'USER_GET_POST': setting.api.url + "post/getPost?",
    'USER_LIKE_POST': setting.api.url + "like/like",
    'USER_POST_COMMENT': setting.api.url + "comment/comment",
    'USER_INTERESTED_TAGS': setting.api.url + "user/saveInterest",
    'POWER_READS': setting.api.prevUrl + 'common/getTrending',
    'COMPANY_LIST': setting.api.prevUrl + 'companies',
    'ADD_EMAIL_TO_MAILCHIMP': setting.api.prevUrl + 'common/notifyMe',
    'SEARCHED_DATA': setting.api.prevUrl + 'companies/searchedCompanies',
    'COMPANY_DETAIL': setting.api.prevUrl+'companies/company/'
  }

})()
