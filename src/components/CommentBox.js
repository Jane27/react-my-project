import React, { Component } from "react";

class CommentBox extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   value: ""
    // };
  }

//   handleChange (e) {
//       this.setState({
//             value: e.target.value
//       }

//       )
//   }

  handleSubmit(e){
    //   alert(this.state.value)
    alert(this.textInput.value)
      e.preventDefault()
 

  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Comment Box</label>
          <input
            type="text"
            className="form-control"
            placeholder="Please leave your comment"
            // onChange={this.handleChange.bind(this)}
            // value={this.state.value}
            ref={(textInput)=>{
                this.textInput=textInput
            }}
          />
        </div>
        <button type='submit' className='btn btn-primary'>sumbit</button>
      </form>
    );
  }
}

export default CommentBox;
