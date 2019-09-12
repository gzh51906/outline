import React,{Component} from 'react';

// import withAjax from '@/hoc/withAjax'


class Goods extends Component{
    state = {
        id:''
    }
    componentDidMount(){
        let {id} = this.props.match.params;

        // this.props.get()

        this.setState({
            id
        })
    }
    render(){
        console.log('Goods:',this.props);
        return (
            <div>
                商品{this.state.id}
            </div>
        )
    }
}

// Goods = withAjax(Goods);
export default Goods;