import React from 'react';
import Icon from '../Icon';
import './style.scss';

class Card extends React.Component {
    render() {
        const userSkills = [];
        const dev = this.props.dev;
        dev.skills.forEach(skill => {
            userSkills.push(
                <span key={dev.name + skill} className="uk-label uk-margin-right">{skill}</span>
            );
        });
        const userProfiles = [];
        const profiles = dev.profiles;
        for (let profileName in profiles) {
            if (profiles[profileName] && profiles[profileName] !== "") {
                userProfiles.push(
                    <li key={profileName + dev.name}>
                        <a href="/#" className="uk-margin-right"><Icon icon={profileName} /> {profiles[profileName]}</a>
                    </li>
                );
            }
        }
        return (
            <div className="uk-card uk-card-default uk-grid-collapse" uk-grid="">
                <div className="uk-card-media-left uk-cover-container uk-width-1-4@m">
                    <img src={dev.photoURL} alt="" uk-cover="" />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div className="uk-card-body uk-width-3-4@m uk-text-left uk-text-top uk-text-justify">
                    <div className="uk-card-badge">
                        <span className="uk-text-primary"><Icon icon="info" className="info-badge" /></span>
                        <div uk-dropdown="bottom-right">
                            <ul className="uk-nav uk-dropdown-nav">
                                {userProfiles}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-card-title">
                        <h3>{dev.name}</h3>
                        <span className="uk-align-center uk-margin-small">{userSkills}</span>
                    </div>
                    <blockquote>
                        <p class="uk-margin-small-bottom">
                            {dev.content}
                        </p>
                    </blockquote>
                </div>
            </div>
        );
    }
}

export default Card;