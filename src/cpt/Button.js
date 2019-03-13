import React from 'react'
import classNames from 'classnames'

class Button extends React.Component {
    clickHandler = () => {
        if (this.props.disabled) return
        this.props.onClick()
    }
    render() {
        const { disabled } = this.props
        return (
            <div className={classNames('cpt-button', { disabled })} onClick={this.clickHandler} >
                {this.props.children}
            </div>
        );
    }
}

Button.defaultProps = {
    disabled: false,
    onClick: () => {}
}

export default Button
