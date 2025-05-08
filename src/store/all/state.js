export default {
    showMap: false,
    showCityDetails: false,
    showMapCityDetails:false,
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}'),
    isLogin: !!localStorage.getItem('token')
};
  