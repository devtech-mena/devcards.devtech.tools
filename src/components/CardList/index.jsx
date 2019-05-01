import React from 'react';
import Card from '../Card';

class CardList extends React.Component {
    render() {
        const items = [];
        const users = this.props.users || [];
        users.forEach(user => {
            items.push(
                <li key={user.node.id} className={user.node.frontmatter.skills.join(" ") + " uk-width-1-1 uk-margin-small-bottom"}>
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
