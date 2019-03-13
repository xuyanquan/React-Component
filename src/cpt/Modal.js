import React from 'react'
import ReactDOM from 'react-dom'
import cls from 'classnames'

class Modal extends React.Component {
    render() {
        const { children, visible } = this.props
        if (visible) {
            return <div className={cls('cpt-modal', {visible})}>{children}</div>
        }
        return null
    }
}

export default (props) => {
    let div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(<Modal {...props}></Modal>, div)
    return null
}
