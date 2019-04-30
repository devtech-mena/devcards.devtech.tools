import React from 'react';

class Filter extends React.Component {
    render() {
        const items = [];
        const skills = this.props.skills;
        skills.forEach(skill => {
            items.push(<li className="uk-width-1-4" uk-filter-control={"." + skill} key={"filter-" + skill}><a className="uk-text-center" href="/#">{skill}</a></li>)
        });
        return (
            <div className="uk-background-default" style={{ zIndex: 980 }} uk-sticky="show-on-up: true">
                <div className="uk-subnav uk-subnav-pill">
                    {items}
                </div>
            </div>
        );
    }
}

export default Filter;
