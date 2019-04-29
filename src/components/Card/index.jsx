import React from 'react';

class Card extends React.Component {
    render() {
        const userSkills = [];
        this.props.user.node.frontmatter.skills.forEach(skill => {
            userSkills.push(
                <span key={this.props.user.node.frontmatter.name + skill} className="uk-label">{skill}</span>
            );
        });
        return (
            <div className="uk-card uk-card-default uk-grid-collapse" uk-grid="">
                <div className="uk-card-media-left uk-cover-container uk-width-1-4@m">
                    <img src="https://getuikit.com/docs/images/light.jpg" alt="" uk-cover="" />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div className="uk-card-body uk-width-3-4@m uk-text-left uk-text-top uk-text-justify">
                    <span className="uk-card-badge">
                        {userSkills}
                    </span>
                    <h3 className="uk-card-title">{this.props.user.node.frontmatter.name}</h3>
                    <p>{this.props.user.node.internal.content}</p>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Card;