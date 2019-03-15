import React from 'react'
import ReactDOM from 'react-dom'
import cls from 'classnames'

class Modal extends React.Component {
    render() {
        const { children, visible } = this.props
        console.log(visible)
        if (visible) {
            return <div className={cls('cpt-modal', {visible})}>{children}</div>
        }
        return null
    }
}

class ModalWrap extends React.Component {
    componentWillMount() {
        let div = document.createElement('div')
        document.body.append(div)
        this.setState({ div })
    }
    componentDidUpdate() {
        ReactDOM.unmountComponentAtNode(this.state.div)
        ReactDOM.render(<Modal {...this.props}></Modal>, this.state.div)
    }
    render() {
        return null
    }
}

export default ModalWrap
