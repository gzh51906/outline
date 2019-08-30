export default {
    state:{
        authorization:''
    },
    getters:{
        a(){
            return 100
        }
    },
    mutations:{
        login(state,authorization){
            localStorage.setItem('Authorization',authorization)
            state.authorization = authorization
        },
        logout(state){
            state.authorization = ''
            localStorage.removeItem('Authorization');
        }
    }
}