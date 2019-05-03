module.exports = {
    siteMetadata: {
        title: "Dev Cards",
        description: "Neat Developers CV",
        repoUrl: "https://github.com/devtech-mena/devcards.devtech.tools",
        homeUrl: "https://devcards.devtech.tools",
        skills: ["angular", "react", "nodejs", "python", "php", "ios", "android"],
        profiles: {
            github: {
                profileLink: "https://github.com/",
                icon: "github"
            },
            gitlab: {
                profileLink: "https://gitlab.com/",
                icon: "gitlab"
            },
            stackoverflow: {
                profileLink: "https://stackoverflow.com/users/",
                icon: "stackoverflow"
            },
            codepen: {
                profileLink: "https://codepen.io/",
                icon: "codepen"
            },
            email: {
                profileLink: "mailto:",
                icon: "email"
            },
            phonenumber: {
                icon: "phonenumber"
            },
            website: {
                profileLink: "",
                icon: "website"
            },
        }
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/devs/`,
                name: 'devs',
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `${__dirname}/src/assets/`
                }
            }
        },
    ],
};