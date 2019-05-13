import React from 'react';
import Icon from '../Icon';
import ReactCardFlip from 'react-card-flip';
import './style.scss';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            isWide: false,
        };
        this.flipCard = this.flipCard.bind(this);
        this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isWide: window.innerWidth > 950 });
    }

    flipCard(e) {
        if (!(e.target.tagName === "A" || e.target.tagName === "PATH" || e.target.tagName === "svg" || e.target.tagName === "polyline")) {
            e.preventDefault();
            this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        }
    }

    render() {
        const userSkills = [];
        const dev = this.props.dev;
        dev.skills.forEach(skill => {
            userSkills.push(
                <span key={dev.name + skill} className="uk-label uk-margin-right">{skill}</span>
            );
        });
        const profilesConfig = this.props.profilesConfig;
        const userProfiles = [];
        const profiles = dev.profiles;
        let profile, profileConfig;
        for (let profileName in profiles) {
            profile = profiles[profileName];
            profileConfig = profilesConfig[profileName];
            if (profile && profile !== "") {
                userProfiles.push(
                    <li key={profileName + dev.name}>
                        <a target="_blank" href={profileConfig.profileLink || profileConfig.profileLink === '' ? profileConfig.profileLink + profile : "/#"} className="uk-margin-right">
                            <Icon icon={profileConfig.icon} /> {profile}
                        </a>
                    </li>
                );
            }
        }
        const userProjects = []
        dev.projects.forEach((project) => {
            userProjects.push(
                <li key={dev.name + project.name} className="uk-height-1-1">
                    <img src={project.photoURL} alt="" uk-cover="" />
                    <div className="uk-padding-remove-vertical uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-top">
                        <h3 className="uk-margin-remove">{project.name}</h3>
                    </div>
                </li>
            );
        });
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection={this.state.isWide ? 'vertical' : 'horizontal'}>
                <div className="uk-card uk-card-default uk-height-large uk-height-medium@m uk-grid-collapse" uk-grid="" key="front" onClick={this.flipCard}>
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
                        <div>
                            <div className="uk-card-title">
                                <h3>{dev.name}</h3>
                                <span className="uk-align-center uk-margin-small">{userSkills}</span>
                            </div>
                            <blockquote>
                                <p className="uk-margin-small-bottom">
                                    {dev.content}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="uk-card uk-card-default uk-height-large uk-height-medium@m uk-visible-toggle uk-light uk-padding-remove" key="back" onClick={this.flipCard} tabIndex="-1" uk-slideshow="animation: slide">
                    <ul className="uk-slideshow-items">
                        {userProjects}
                    </ul>
                    <a className="uk-position-top-left uk-position-small uk-margin-remove-top" href="/#" uk-slidenav-previous="" uk-slideshow-item="previous"></a>
                    <a className="uk-position-top-right uk-position-small uk-margin-remove-top" href="/#" uk-slidenav-next="" uk-slideshow-item="next"></a>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Card;