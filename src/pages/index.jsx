import React from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import '../assets/main.scss';

export default () =>
    <div className="container">
        <div className="item">
            <Search></Search>
        </div>
        <div className="item">
            <Card></Card>
        </div>
    </div>