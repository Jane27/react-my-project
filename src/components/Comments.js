import React, { Component } from 'react'

import CommentList from './CommentList';
import CommentInput from './CommentInput';

class Comments extends Component {
    constructor(props){
        super()
        this.state= {
            comments:['First Comments']
        }
    }
    addComment(comment){
        this.setState ({
            comments:[...this.state.comments, comment]
        });
        console.log('comments',this.state.comments)
    }
    render(){
        const {comments} = this.state
        return(
            <div>
                <CommentList Comments={comments}/>
                <CommentInput commentLength={comments.length} 
                onAddComment={this.addComment.bind(this)}/>  
            </div>

        )
    }
}

export default Comments