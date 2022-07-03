const path = require('path');

/*
   Notes:
   - all graphql function call returns a Promise
 */

const createProjectPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(projects)/" } }) {
        edges {
          node {
            html
            frontmatter {
              title
              description
              category
              link
              featured_image {
                childImageSharp {
                  gatsbyImageData(width: 1200, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (!result || !result.data) return;
  console.log(result);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node.fields.slug);
    createPage({
      path: `ecosystem/projects/${node.fields.slug}/`,
      component: path.resolve(`./src/templates/single-project.js`),
      context: {
        node,
      },
    });
  });
};

module.exports = {
  createProjectPages,
};
