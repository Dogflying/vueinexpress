import {LOGIN_SHOW} from './type'

export default{
    [LOGIN_SHOW](state){
        state.isLogin  =!state.isLogin
    }
}