import React, { Component } from 'react';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
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
                <div uk-filter="target: .js-filter">
                    <div className="uk-position-large uk-position-top-center">
                        <div className="uk-position-top-center">
                            <Filter></Filter>
                        </div>
                        <CardList></CardList>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexWrapper