import React from 'react'
import classNames from 'classnames'

class Input extends React.Component {
    render() {
        const { disabled } = this.props
        return (
            <input className={classNames('cpt-input', { disabled })} />
        );
    }
}

Input.defaultProps = {
    disabled: false
}

export default Input
