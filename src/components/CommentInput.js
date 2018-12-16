import React, { Component } from "react";

class CommentInput extends Component {
  constructor(props) {
    super();
  }
  handleSubmit(e) {
      this.props.onAddComment(this.textInput.value)
      e.preventDefault()
  }

  render() {
    return (
      <div>
        <form className="p-5" onSubmit={this.handleSubmit.bind(this)}>
          <label> leave your message</label>
          <input
            placeholder="leave your message"
            ref={(textInput)=>{
                this.textInput = textInput;
            }}
          />
          <button>Submit</button>
          <p>There are {this.props.commentLength} comments</p>
        </form>
      </div>
    );
  }
}

export default CommentInput;
