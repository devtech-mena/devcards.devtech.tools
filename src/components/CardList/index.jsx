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
                <div key={user.name} className={user.skills.join(" ")}>
                        <Card user={user}></Card>
                </div>
            );
        });

        return (
            <div className="js-filter uk-margin-xlarge-top">
                {items}
            </div>
        )
    }
}

export default CardList;

