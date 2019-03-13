import React from 'react'
import Button from './Button'

class Form extends React.Component {
    render() {
        const { onCancel, onConfirm, children } = this.props
        return <div className="cpt-form">
            <div className="cpt-form-body">{children}</div>
            <div className="cpt-form-foot">
                {onConfirm && <Button onClick={onConfirm}>确认</Button>}
                {onCancel && <Button onClick={onCancel}>取消</Button>}
            </div>
        </div>
    }
}

Form.Item = ({
    required,
    title,
    render,
    children
}) => {
    return <div className="cpt-form-row">
        <div className="cpt-form-left">{render(title)}{required && <i className="required"></i>}</div>
        <div className="cpt-form-right">{children}</div>
    </div>
}

Form.Item.defaultProps = {
    required: false,
    title: '',
    render: title => title
}

export default Form
