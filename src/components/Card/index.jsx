import React from 'react';
import Icon from '../Icon';

class Card extends React.Component {
    render() {
        const userSkills = [];
        this.props.user.node.frontmatter.skills.forEach(skill => {
            userSkills.push(
                <span key={this.props.user.node.frontmatter.name + skill} className="uk-label uk-margin-right">{skill}</span>
            );
        });
        const userProfiles = [];
        const profiles = this.props.user.node.frontmatter.profiles;
        for (let profileName in profiles) {
            if (profiles[profileName] && profiles[profileName] !== "") {
                userProfiles.push(
                    <li key={profileName + this.props.user.node.frontmatter.name}>
                        <a href="/#" className="uk-margin-right"><Icon icon={profileName} /> {profiles[profileName]}</a>
                    </li>
                );
            }
        }
        return (
            <div className="uk-card uk-card-default uk-grid-collapse" uk-grid="">
                <div className="uk-card-media-left uk-cover-container uk-width-1-4@m">
                    <img src={this.props.user.node.frontmatter.photo.publicURL} alt="" uk-cover="" />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div className="uk-card-body uk-width-3-4@m uk-text-left uk-text-top uk-text-justify">
                    <div className="uk-card-badge">
                        <button className="uk-button uk-button-default" type="button">Contact</button>
                        <div uk-dropdown="bottom-right">
                            <ul className="uk-nav uk-dropdown-nav">
                                {userProfiles}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-card-title">
                        <h3>{this.props.user.node.frontmatter.name}</h3>
                        <span>{userSkills}</span>
                    </div>
                    <p>{this.props.user.node.internal.content}</p>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Card;