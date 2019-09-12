import React,{Component} from 'react';

import withStorage from '@/hoc/withStorage';

// ES7装饰器写法
@withStorage
class Home extends Component{
    render(){
        console.log('Home:',this.props);
        return (
            <div>
                首页Home
                <button onClick={()=>{
                    // this.props.history.push('/goods/123456')
                    this.props.history.push({
                        pathname:'/goods/10086',
                        search:'username=laoxie&passowrd=123',
                        state:{a:100,b:200}
                    })
                }}>商品详情</button>
            </div>
        )
    }
}

// Home = withStorage(Home);

export default Home;