import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import {
	MainPost,
	Title,
	Stats,
	SocialShare
} from "../components/style/emo-post";

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>{post.frontmatter.title}</Title>
				</header>
				<div
					className={"content"}
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
				<footer>
					<Stats>
						<SocialShare>
							<li className={"social-icon"}>
								<Link to="#">
									<span className={"icon-twitter"}> </span>
								</Link>
							</li>
							<li className={"social-icon"}>
								<Link to="#">
									<span className={"icon-facebook"}> </span>
								</Link>
							</li>
							<li className={"social-icon"}>
								<Link to="#">
									<span className={"icon-google-plus"}> </span>
								</Link>
							</li>
						</SocialShare>
					</Stats>
				</footer>
			</MainPost>
		</Layout>
	);
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
