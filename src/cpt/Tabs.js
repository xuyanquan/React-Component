import React from 'react'
import cls from 'classnames'

let TabKey = 0

class Tabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            child: props.children[0]
        }
    }
    renderTitle = () => {
        return this.props.children.map(child => {
            return <span
                key={child.props.key || child.props.title || String(TabKey++)}
                className={cls('cpt-tabs-title', { hot: child === this.state.child })}
                onClick={() => this.setState({ child })}>
                {child.props.title}
            </span>
        })
    }
    render() {
        return (
            <div className={cls('cpt-tabs')}>
                <div className="cpt-tabs-header">{this.renderTitle()}</div>
                <div className="cpt-tabs-content">
                    {this.state.child}
                </div>
            </div>
        );
    }
}

export default Tabs
