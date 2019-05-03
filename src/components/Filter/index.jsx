import React from 'react';

class Filter extends React.Component {
    render() {
        const items = [];
        const skills = this.props.skills;
        skills.forEach(skill => {
            items.push(<li className="uk-width-1-3 uk-width-1-4@s" uk-filter-control={"." + skill} key={"filter-" + skill}><a className="uk-text-center" href="/#">{skill}</a></li>)
        });
        return (
            <>
                <h3 className="uk-text-muted uk-text-center">You're Searching for ..</h3>
                <div className="uk-background-default uk-box-shadow-small" style={{ zIndex: 980 }} uk-sticky="show-on-up: true">
                    <div className="uk-subnav uk-subnav-pill">
                        {items}
                    </div>
                </div>
            </>
        );
    }
}

export default Filter;
