let initState = {
    userInfo:null,
    token:'',
    showMenu:true
}

function reducer(state=initState,action){
    switch(action.type){
        // {type:'login',userInfo,token}
        case 'login':
            return {
                ...state,
                userInfo:action.userInfo,
                token:action.token
            }
        case 'logout':
            return {
                ...state,
                userInfo:null,
                token:''
            }
        case 'show_menu':
            return {
                ...state,
                showMenu:true
            }
        case 'hide_menu':
            return {
                ...state,
                showMenu:false
            }
        default:
            return state;

    }
}

export default reducer;