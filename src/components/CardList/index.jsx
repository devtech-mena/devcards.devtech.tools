import React from 'react';
import Card from '../Card';

class CardList extends React.Component {
    render() {
        const items = [];
        const devs = this.props.devs || [];
        devs.forEach(dev => {
            items.push(
                <li key={dev.id} className={dev.skills.join(" ") + " uk-width-1-1 uk-margin-small-bottom"}>
                    <Card dev={dev}></Card>
                </li>
            );
        });

        return (
            <ul className="js-filter uk-margin-top" uk-grid="">
                {items}
            </ul>
        )
    }
}

export default CardList;
