import styled, { css } from "react-emotion";
import { mwS } from "./breakpoints";
import React from "react";

export const Header = styled.header`
  padding-bottom: 20px;
  margin-bottom: 20px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  & p > strong {
    font-weight: 100;
  }
  & p > a {
    text-decoration: underline;
  }
`;

export const MainPost = styled.article`
  max-width: 100%;
  width: auto;
  padding: 50px 20px 30px 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  background: #fff;
  & div.content > p,
  & div.content > ol,
  & div.content > ul,
  & > article,
  & > header,
  & > footer {
    text-align: left;
    margin: 0 20px;
  }
  & div.content > iframe {
    margin: 30px 20px;
  }
  & div.content > p a iframe {
    margin: 30px 0;
  }
  & div.content > span {
    margin: 30px 0;
  }
  & div.content p > a {
    text-decoration: underline;
  }
  & div.content > ul,
  & div.content > ol {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
  & div.content > img {
    max-width: 89%;
    float: rigth;
  }
  ${mwS.medium(css`
    max-width: 97%;
    padding: 50px 50px 30px 50px;
  `)}
  ${mwS.large(css`
    max-width: 950px;
    & div.content > img {
      max-width: 490px;
    }
  `)};
`;

export const Title = styled.h3`
`;
export const Subtitle = styled.h4`
  margin-bottom: 30px;
  font-weight: 300;
`;

export const PreTitle = styled.h5`
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #777;
  font-weight: 300;
`;

export const Tags = ({ children }) => (
  <div
    css={`
      & ul > li {
        list-style: none;
        display: inline-block;
        padding: 7px 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        border: 1px solid #ddd;
        background: #ddd;
        width: auto;
      }
    `}
  >
    <ul>{children}</ul>
  </div>
);

export const Date = styled.h6`
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #777;
  font-weight: 300;
`;

export const Stats = ({ children }) => (
  <div
    css={`
      margin: 30px 0;
      padding: 30px 0;
      overflow: hidden;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    `}
  >
    {children}
  </div>
);

export const SocialShare = ({ children }) => (
  <ul
    css={`
      float: right;
      & > li {
        width: auto;
        list-style: none;
        display: inline-block;
      }
      & > li.social-icon {
        color: #666666;
        font-size: 15px;
        display: inline-block;
        padding: 0.5rem 0.5rem;
      }
    `}
  >
    <li>SHARE : </li>
    {children}
  </ul>
);

export const SocialReact = ({ children }) => (
  <ul
    css={`
      float: left;
      & > li {
        list-style: none;
        display: inline-block;
        color: #666666;
        font-size: 15px;
        display: inline-block;
        padding: 0.5rem 0.5rem;
      }
      & li.visit-counter {
        user-select: none;
        -o-user-select: none;
      }
    `}
  >
    {children}
  </ul>
);

const TextInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  color: #464a4c;
  background-color: #fff;
  background-image: none;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  &:focus {
    color: #464a4c;
    background-color: #fff;
    border-color: #5cb3fd;
    outline: none;
  }
`;

export const Comments = ({ children }) => (
  <div
    css={`
      margin: 30px 0;
      padding: 30px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid #ddd;
      background: #fff;
    `}
  >
    <form>
      <div
        className={"row"}
        css={`
          & > div ${TextInput} {
            margin-bottom: 30px;
            border-radius: 1px;
            border: 0;
            border-bottom: 1px solid #ddd;
            height: 45px;
            line-height: 45px;
            box-shadow: none;
            padding: 0;
            width: 100%;
          }
        `}
      >
        <div className={"col-sm-6"}>
          <TextInput
            type={"text"}
            name={"contact-form-name"}
            placeholder={"Enter your name"}
            required={""}
            aria-invalid={"true"}
            aria-required={"true"}
          />
        </div>
        <div className={"col-sm-6"}>
          <TextInput
            type={"text"}
            name={"contact-form-email"}
            placeholder={"Enter your email"}
            required={""}
            aria-invalid={"true"}
            aria-required={"true"}
          />
        </div>
        <div className={"col-sm-12"}>
          <textarea />
        </div>
        <div className={"col-sm-12"} />
      </div>
    </form>
    {children}
  </div>
);
