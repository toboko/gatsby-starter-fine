import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MainPost, Title } from "../components/style/emo-post";

export default ({ data }) => {
	return (
		<Layout>
			<MainPost>
				<header>
					<Title>Single Page</Title>
				</header>
				<div
					className={"content"}>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					This is the second file.
					</p>
					<h1>h1 title</h1>
					<h2>h2 title</h2>
					<h3>h3 title</h3>
					<h4>h4 title</h4>
					<h5>h5 title</h5>
					<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					This is the second file.</span>
				</div>
			</MainPost>
		</Layout>
	);
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        subtitle
      }
    }
  }
`
