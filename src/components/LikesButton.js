import React, {Component} from 'react';

class LikesButton extends Component {
    constructor(props){
        super()
        this.state= {
            likes:0,
        }

    }

    handleClick ()
    {
        // alert(1234)
        // console.log(this);
        this.setState ({
            likes:++this.state.likes
        })
    }
    render(){
        return(
            <div className='likes-buton-component'>
            <button type='button'
                    className='btn btn-outline-primary btn-lg' 
                    // onClick = {this.handleClick.bind(this)}>
                    onClick={()=>this.handleClick() }>
                {this.state.likes}  
            </button>
            </div>

        )
    }
}

export default LikesButton;
