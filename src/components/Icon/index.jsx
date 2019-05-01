import React from 'react';
import ICONS from '../../assets/icons';
import './icons.scss'

class Icon extends React.Component {
    render() {
        const icon = ICONS[this.props.icon];
        return (
            <span className="icon">{new icon(icon.defaultProps)}</span>
        )
    }
}

export default Icon;