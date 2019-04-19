import  styled , { css } from "react-emotion";
import  { mwS } from "./breakpoints";

export const Card = styled.div`
    background: #fff;
    margin-bottom: 20px;
    transform: scale(1);
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;
    opacity: 1;
  &:hover {
    background: #e6e6e6;
    transform: scale(0.96);
  }
`;

export const CardColumns = styled.div`
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  
  ${mwS.small(css`
    opacity: 1;
  `)};
  ${mwS.medium(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
  ${mwS.large(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
  ${mwS.xLarge(css`
    grid-template-columns: repeat(3, 1fr);
  `)};
`;

export const SinglePost = styled.div`
  & .gatsby-image-wrapper {
    -o-transition: 0.2s all ease;
    transition: 0.2s all ease;
  }
  ${Card}:hover & .gatsby-image-wrapper {
    opacity: 0.5;
  }
  & .gatsby-image-wrapper {
    height: 250px;
  }
  ${mwS.small(css`
    opacity: 1;
  `)};
`;

export const PostImage = styled.img(props => ({
  width: "100%"
}));

export const PostInfo = styled.div(props => ({}));

export const PreTitle = styled.h6(props => ({
  fontWeight: "500",
  display: "block",
  padding: "17px",
  textTransform: "uppercase"
}));

export const Freshnew = styled.span(props => ({
  position: "absolute",
  zIndex: 1,
  padding: "15px",
  background: "#a5d6a7",
  right: 0
}));
export const Update = styled.span(props => ({
	position: "absolute",
	zIndex: 1,
	padding: "15px",
	background: "#fdd835",
	right: 0
}));

export const Title = styled.h4(props => ({
  fontWeight: "500",
  display: "block",
  padding: "17px",
	paddingBottom: 0
}));

export const Subtitle = styled.h5(props => ({
	fontWeight: "200",
	display: "block",
	color: "black",
	paddingLeft: "17px",
	paddingBottom: "17px",
}));

export const Excrept = styled.p(props => ({
  padding: "17px",
  paddingTop: 0,
  a: {
    fontWeight: 700
  }
}));
