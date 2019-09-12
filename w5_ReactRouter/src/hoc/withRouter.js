/**
 * 
 * 简单版withRouter
 * 为了了解高阶组件的原理
 */
import React from 'react'
function withRouter(Component){
    // return function(){
    //     return <Component history="xxx" location="xxx" match="xxx"/>
    // }
    return class WrapComponent extends React.Component{
        render(){
            return <Component {...this.props} history={} location={} match={}/>
        }
    }
}

export default withRouter;