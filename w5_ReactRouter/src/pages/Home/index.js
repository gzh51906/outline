import React,{Component} from 'react';


class Home extends Component{
    render(){
        console.log('Home:',this.props);
        return (
            <div>
                首页Home
            </div>
        )
    }
}

export default Home;