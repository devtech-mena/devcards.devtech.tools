module.exports = {
    siteMetadata: {
        title: "Syrian Developers",
        skills: ["ios", "web", "android", "devops"],
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/devs`,
                name: 'devs',
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-sass",
    ],
};