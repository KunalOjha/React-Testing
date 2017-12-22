import React , {Component} from 'react';
import  {saveComment} from '../actions/index';
import {connect} from 'react-redux';

class CommentBox extends Component {

    constructor(props){
        super(props);
        this.state = {comment: ''}
    }

    handleChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const comment = this.state.comment;
        this.props.saveComment(comment);

        this.setState({
            comment: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}
                className="comment-box">
                <h4>Add a Comment</h4>
                <textarea
                    onChange={this.handleChange.bind(this)}
                    value={this.state.comment}
                    placeholder='enter comment here'/>
                <button action="submit">Submit Comment</button>
            </form>
        );
    }
}
export default connect(null, {saveComment})(CommentBox);