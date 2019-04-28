import React, { Component } from 'react';
import Filter from '../components/Filter';
import Card from '../components/Card';
import '../assets/main.scss';

class IndexWrapper extends Component {
    state = { ready: false };
    componentDidMount = () => {
        if (typeof window !== 'undefined') {
            const uikit = require('uikit');
            const icons = require('uikit/dist/js/uikit-icons.min');
            uikit.use(icons);
            this.setState({ ready: true });
        }
    };

    render() {
        return (
            <div dir="rtl">
                <Filter></Filter>
                <Card></Card>
            </div>
        );
    }
}

export default IndexWrapper