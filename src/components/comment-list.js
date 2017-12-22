import React, {Component} from 'react';
import { connect} from 'react-redux';

class CommentList extends Component {
     render() {  
        console.log(this.props);
        const list = this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
        return (
            <ul className="comment-list">
                {list}
            </ul>
            )
        }
    };

function mapStateToProps(state) { 
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
