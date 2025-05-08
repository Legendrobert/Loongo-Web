export default {
    setShowMap(state, value) {
      state.showMap = value;
    },
    setShowCityDetails(state, value){
      state.showCityDetails = value;
      
    },
    setShowMapCityDetails(state, value){
      state.showMapCityDetails = value;
    },
    SET_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('token', token)
    },
    SET_USER_INFO(state, userInfo) {
        state.userInfo = userInfo
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    SET_LOGIN_STATUS(state, status) {
        state.isLogin = status
    },
    CLEAR_USER_DATA(state) {
        state.token = ''
        state.userInfo = {}
        state.isLogin = false
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
    }
};
  