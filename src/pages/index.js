import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { SinglePost, PostInfo, PreTitle, Title, Subtitle, Update, Freshnew, Excrept, Card, CardColumns }  from "../components/style/emo-home-posts";

let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let months = days * 30;

export default ({ data }) => {
  return (
    <Layout>
      <CardColumns>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}>
            <Link to={node.fields.slug}>
              <SinglePost>
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	               node.frontmatter.update !== node.frontmatter.date &&(
                  <Update>Update</Update>
                )}
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	              node.frontmatter.update === node.frontmatter.date &&(
		              <Freshnew>Fresh New</Freshnew>
	              )}
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                <PostInfo>
                  <PreTitle>{node.frontmatter.category}</PreTitle>
                  <Title>{node.frontmatter.title}</Title>
	                <Subtitle>{node.frontmatter.subtitle}</Subtitle>
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
      sort: { fields: [frontmatter___update], order: DESC }
      filter: { frontmatter: { category: { ne: "2ndcat" } } }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            update(formatString: "DD MMMM, YYYY")
            title
            subtitle
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
        }
      }
    }
  }
`;
