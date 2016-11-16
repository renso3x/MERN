import React from 'react';
import classnames from 'classnames';

const FlashMessage = ({
    id,
    type,
    text,
    onClick
}) => {
    return(
        <div class={
            classnames('alert', {
                'alert-success': type == 'success',
                'alert-danger': type == 'error'
            })
        }>
            <button onClick={onClick} className="close"><span>&times;</span></button>
            {text}
        </div>
    )
}

FlashMessage.propTypes = {
    text: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired,
    type: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default FlashMessage;