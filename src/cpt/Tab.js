import React from 'react'
import cls from 'classnames'

class Tab extends React.Component {
    render() {
        return (
            <div className={cls('cpt-tab')}>{this.props.children}</div>
        );
    }
}

Tab.defaultProps = {
    title: ''
}

export default Tab
