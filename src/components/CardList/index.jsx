import React from 'react';

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
        ];
        users.forEach(user => {
            items.push(
                <li key={user.name} className={user.skills.join(" ")}>
                    <div className="uk-card uk-card-default uk-card-body">{user.name}</div>
                </li>
            );
        });

        return (
            <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="">
                {items}
            </ul>
        )
    }
}

export default CardList;

