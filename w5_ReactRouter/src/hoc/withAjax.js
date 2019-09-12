/**
 * 
 * 简单版withRouter
 * 为了了解高阶组件的原理
 */
import React from 'react';

import api from '@/api';

function withAjax(Component){
    let ajax = {
        get(data){
            let url = 'xxx'
            api.get(url,data)
        },
        post(){},
        delete(){},
        patch(){}
    }
    return class WrapComponent extends React.Component{
        
        render(){
            return <Component {...this.props} {...ajax} />
        }
    }
}

export default withAjax;