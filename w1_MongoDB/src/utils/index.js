exports.formatData = function formData({code=1,data=[],msg='success'}={}){
    // let {code,data,msg} = {code:0}
    // let {code,data,msg} = undefined

    if(code === 0){
        msg = 'fail';
    }

    return {
        code,
        data,
        msg
    }
}

const {create,verify} = require('./token');

exports.token = {create,verify}

// {
//     formatData,
//     token:{
//         create,
//         verify
//     }
// }

