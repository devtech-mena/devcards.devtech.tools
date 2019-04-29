import React from 'react';

class Card extends React.Component {
    render() {
        const userSkills = [];
        this.props.user.skills.forEach(skill => {
            userSkills.push(
                <span key={this.props.user.name + skill} className="uk-label">{skill}</span>
            );
        });
        return (
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2@l uk-margin">
                <span className="uk-card-badge">
                    {userSkills}
                </span>
                <h3 className="uk-card-title">{this.props.user.name}</h3>
                <p>User {this.props.user.name} has skills {this.props.user.skills}</p>
            </div>
        );
    }
}

export default Card;