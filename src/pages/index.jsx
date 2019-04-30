import React from 'react';
import Helmet from 'react-helmet';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
import '../assets/main.scss';

class IndexWrapper extends React.Component {
    state = { ready: false };
    componentDidMount = () => {
        if (typeof window !== 'undefined') {
            const uikit = require('uikit');
            const icons = require('uikit/dist/js/uikit-icons.min');
            uikit.use(icons);
            this.setState({ ready: true });
        }
    };

    render() {
        return (
            <div className="uk-position-large">
                <Helmet>
                    <title>{this.props.data.site.siteMetadata.title}</title>
                </Helmet>
                <div uk-filter="target: .js-filter" className="uk-width-xxlarge@l uk-margin-auto-left uk-margin-auto-right">
                    <Filter skills={this.props.data.site.siteMetadata.skills}></Filter>
                    <CardList users={this.props.data.allMarkdownRemark.edges}></CardList>
                </div>
            </div>
        );
    }
}

export default IndexWrapper

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                skills
            }
        }
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        skills
                        photo {
                            publicURL
                        }
                        profiles {
                            github
                            gitlab
                            codepen
                            stackoverflow
                            email
                            website
                            phonenumber
                        }
                    }
                    internal {
                        content
                    }
                }
            }
        }
    }
`;