import React from 'react';

class Filter extends React.Component {
    render() {
        const items = [];
        const skills = ['android', 'ios'];
        // const skills = this.props.data.site.siteMetadata.skills;
        skills.forEach(skill => {
            items.push(<li uk-filter-control={"." + skill}><a href="#">{skill}</a></li>)
        });
        return (
            <ul className="uk-subnav uk-subnav-pill">
                {items}
            </ul>
        );
    }
}

export default Filter;
