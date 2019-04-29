import React from 'react';
import Card from '../Card';

class CardList extends React.Component {
    render() {
        const items = [];
        const users = [
            {
                name: 'user1',
                skills: ['android', 'ios'],
            },
            {
                name: 'user2',
                skills: ['web', 'ios'],
            },
            {
                name: 'user3',
                skills: ['web'],
            },
            {
                name: 'user4',
                skills: ['web'],
            },
            {
                name: 'user5',
                skills: ['web'],
            },
            {
                name: 'user6',
                skills: ['web'],
            },
        ];
        users.forEach(user => {
            items.push(
                <li key={user.name} className={user.skills.join(" ") + " uk-width-1-1 uk-margin-small-bottom"}>
                        <Card user={user}></Card>
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

