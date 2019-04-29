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
            const userSkills = [];
            user.skills.forEach(skill => {
                userSkills.push(
                    <span key={user.name + skill} className="uk-label">{skill}</span>
                );
            });
            items.push(
                <div key={user.name} className={user.skills.join(" ")}>
                    <div className="uk-card uk-card-default uk-card-body uk-width-xxlarge uk-margin">
                        <span className="uk-card-badge">
                            {userSkills}
                        </span>
                        <h3 className="uk-card-title">{user.name}</h3>
                        <p>User {user.name} has skills {user.skills}</p>
                    </div>
                </div>
            );
        });

        return (
            <div className="js-filter uk-text-center uk-margin-xlarge-top">
                {items}
            </div>
        )
    }
}

export default CardList;

