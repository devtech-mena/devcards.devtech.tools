import React from 'react';
import Helmet from 'react-helmet';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
import '../assets/main.scss';
import { graphql } from 'gatsby';

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
        const siteMetadata = this.props.data.site.siteMetadata;
        const profilesConfig = this.props.data.site.siteMetadata.profiles;
        const devs = this.props.data.allMarkdownRemark.edges.map(
            (edge) => {
                let projects = edge.node.frontmatter.projects.map(project => {
                    return { name: project.name, photoURL: project.photo.publicURL };
                });
                return {
                    id: edge.node.id,
                    name: edge.node.frontmatter.name,
                    skills: edge.node.frontmatter.skills,
                    photoURL: edge.node.frontmatter.photo ? edge.node.frontmatter.photo.publicURL : null,
                    content: edge.node.internal.content,
                    profiles: edge.node.frontmatter.profiles,
                    projects: projects,
                };
            }
        );
        return (
            <div className="uk-position-large">
                <Helmet>
                    <meta property="og:title" content="Syrian Developers" />
                    <meta property="og:image" content="https://syriandevs.devtech.tools/devtech-logo.png" />
                    <meta property="og:description" content="A curated list of Syrian developers." />
                    <meta property="og:url" content="https://syriandevs.devtech.tools" />
                    <title>{siteMetadata.title}</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css" />
                </Helmet>
                <a className="github-fork-ribbon" href="https://github.com/devtech-mena/syriandevs.devtech.tools" data-ribbon="Add Your Profile" title="Add Your Profile">Add Your Profile</a>
                <div uk-filter="target: .js-filter" className="uk-width-xxlarge@l uk-margin-auto-left uk-margin-auto-right">
                    <h1 className="uk-text-primary uk-text-center"><img src="/logo.svg" /></h1>
                    <Filter skills={siteMetadata.skills}></Filter>
                    <CardList devs={devs} profilesConfig={profilesConfig}></CardList>
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
                profiles {
                    github {
                        profileLink
                        icon
                    }
                    gitlab {
                        profileLink
                        icon
                    }
                    stackoverflow {
                        profileLink
                        icon
                    }
                    codepen {
                        profileLink
                        icon
                    }
                    email {
                        profileLink
                        icon
                    }
                    phonenumber {
                        icon
                    }
                    website {
                        profileLink
                        icon
                    }
                }
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
                        projects {
                      	  name
                        	photo {
                        	  publicURL
                        	}
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