import styled, {css} from "react-emotion";
import {mwS} from "./breakpoints";

export const Main = styled.main`
  max-width: 1150px;
  width: 100%;
  float: left;
  display: block;
  padding: 30px;
  position: relative;
  margin-top: 130px;
  
  ${mwS.medium(css`
    margin-top: 0;
    width: auto;
    margin-left: 235px;
    max-width: 75%;
  `)};
`;

export const Aside = styled.aside`
	width: 100%;
  position: fixed;
  display: block;
  top: 0;
  overflow-y: hidden;
  transition: .3s all ease;
  background: #fff;
  z-index: 10;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${mwS.medium(css`
		height: 100vh;
		min-height: 500px;
		width: 235px;
		float: left;

  `)};
`;

export const Navigator = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Logo = styled.div`
  padding: 10px 10px;
  position: relative;

  p {
    display: none;
  }

  ${mwS.medium(css`
    display: block;
    padding: 30px 5px;
	  a {
	    text-transform: uppercase;
	    letter-spacing: .05em;
	    margin-bottom: 0.5em;
      text-align: center;
	    display: block;
	  }
	  p {
      display: block;
	    margin-bottom: 0;
	    text-align: left;
	  }
  `)};
`;


export const LinksList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    position: relative;
    display: block;
    list-style: none;
    height: 32px;
    width: auto;
    float: left;
    margin-left: 5px;
  }

  li a {
    color: #000;
    padding: 0 7px;
    display: block;
    position: relative;
    text-align: left;
    margin: auto;
    z-index: 1;
  }

  li a:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    left: 0;
    height: 30px;
    z-index: -1;
    background: #f5f5f5;
    transition: .3s width ease-out;
  }

  li:hover a:after, li a.active:after {
    width: 100%;
    border: 1px solid #f7f7f7;
  }

  ${mwS.medium(css`
    li {
      width: 100%;
      float: none;
      margin: 7px auto;
    }

    li a {
    
    }
  `)};
`;

export const SocialList = styled.span`
  text-align: left;
  letter-spacing: 0.05em;
  display: inline-block;
  & span {
    width: auto;
    text-align: center;

  }
  & span > a {
    display: inline-block;
    background: whitesmoke;
    border-radius: 110px;
    margin: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  
  
  ${mwS.medium(css`
    text-align: left;
  `)};
  `;