import React, { Component } from 'react'

class CommentList extends Component {
    constructor(props) {
        super() 
        this.state={
            value:'',
            comments:[],
            total:'0'
        } 
    }
handleChange(e){
    this.setState({
        value: e.target.value
    }
    )
}
handleSubmit(e){
    this.setState({
        total: ++this.state.total,
        comments:this.state.comments.push(e.target.value)
    },
    e.preventDefault()
    )
}

    render() {
        return(
            <div>
                <div>
                    <h1>Comment List</h1>
                    <ul>
                        {this.state.comments.map((item,key)=>
                            <li key={key}>{item}</li>
                        )}
                    </ul>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h2> leave your message</h2>
                    <input type='text'
                    placeholder='leave your message'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.value}>
                    </input>
                    <button>Submit</button> 
                    <p>There are {this.state.total} comments</p>

                </form>
            </div>
        )
    }

 }

 export default CommentList