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
            <div className="uk-card uk-card-default uk-grid-collapse uk-width-1-2@l uk-margin" uk-grid="">
                <div className="uk-card-media-left uk-cover-container uk-width-1-4@m">
                    <img src="https://getuikit.com/docs/images/light.jpg" alt="" uk-cover="" />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div className="uk-card-body uk-width-3-4@m uk-text-left">
                    <span className="uk-card-badge">
                        {userSkills}
                    </span>
                    <h3 className="uk-card-title">{this.props.user.name}</h3>
                    <p>User {this.props.user.name} has skills {this.props.user.skills}</p>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Card;