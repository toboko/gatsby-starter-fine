import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import {
	SinglePost,
	PostInfo,
	Title,
	Excrept,
	Card,
	CardColumns
} from "../components/style/emo-home-posts";

export default ({ data }) => {
  return (
	  <Layout>
		  <CardColumns>
			  {data.allMarkdownRemark.edges.map(({ node }) => (
				  <Card key={node.id}>
					  <Link to={node.fields.slug}>
						  <SinglePost>
							  <Img
								  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
							  />
							  <PostInfo>
								  <Title>{node.frontmatter.title}</Title>
								  <Excrept>{node.excerpt}</Excrept>
							  </PostInfo>
						  </SinglePost>
					  </Link>
				  </Card>
			  ))}
		  </CardColumns>
	  </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "2ndcat" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
