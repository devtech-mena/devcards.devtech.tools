import React from 'react';

class Filter extends React.Component {
    render() {
        const items = [];
        const skills = ['android', 'ios', 'web'];
        // const skills = this.props.data.site.siteMetadata.skills;
        skills.forEach(skill => {
            items.push(<li uk-filter-control={"." + skill} key={"filter-" + skill}><a href="/#">{skill}</a></li>)
        });
        return (
            <ul className="uk-subnav uk-subnav-pill" uk-sticky="show-on-up: true">
                {items}
            </ul>
        );
    }
}

export default Filter;
