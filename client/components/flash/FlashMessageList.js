import React from 'react';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessages';
import FlashMessage from './FlashMessage';

class FlashMessageList extends React.Component {
    render() {
        const messages = this.props.messages.map(message =>
            <FlashMessage
                key={message.id}
                id={message.id}
                type={message.type}
                text={message.text}
                onClick={(e) => {
                    e.preventDefault();
                    this.props.onDeleteFLashMessages(message.id)
                }}
            />
        )
        return(
            <div>
                {messages}
            </div>
        )
    }
}
FlashMessageList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    onDeleteFLashMessages: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteFLashMessages:(id) => {
            dispatch(deleteFlashMessage(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlashMessageList);