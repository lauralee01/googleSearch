import styled from 'styled-components';
import * as Colors from './color.json';
import * as Font from './font.json';

export const HomePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
  .input {
    margin-left: 3.5rem;
  }
  
`;
export const Search = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -55%);
  text-align: center;

  img {
    width: 272px;
    margin-bottom: 1rem;
    text-align: center;
  }
  
`;

export const InputDiv = styled.div`
  input {
      width: 582px;
      height: 44px; 
      padding: 5px 8px 0 0;
      padding-left: 14px;
      border-radius: 30px;
      border: none;
      box-shadow: 1px 1px 1px 2px rgba(0,0,0,0.2);
      outline: none;
      font-family: arial,sans-serif;
      font-size: 14px;
      color: #5F6368;
      position: relative;
  }
  .searchinput {
    height: 32px;
    // margin-left: -5.5rem;
  }
  .search {
    height: 20px;
    width: 20px;
    position: absolute;
    z-index: 900;
    left: 0.5rem;
    transform: translate(2px, 10px);
    margin-right: 2rem;
  }
`;
export const FlexSearch = styled.div`
display: flex;
align-items: center;
box-shadow: 1px 1px 1px 2px rgba(0,0,0,0.2);
margin: -1rem;
padding: 1rem;
margin-bottom: 2rem;
img {
  width: 86px;
  height: 28px;
}
`;
export const SearchButton = styled.div`
 text-align: center;
 margin-top: 1rem;

 button {
     outline: none;
     background: ${Colors.lighten};
     color: #5F6368;
     outline: none;
     border-radius: 4px;
     padding: 1rem;
     margin-left: 1rem;
    font-family: arial,sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    border: none;
 }
`;
export const List= styled.ul`
border: none;
  outline: none;
  list-style: none;
  border-top: 1px solid ${Colors.lighten};
  text-align: left;
  padding: 0 1rem;
`;
export const Key = styled.li`
 padding: 0.5rem 0;
 font-family: arial,sans-serif;
 font-size: 14px;
 color: #5F6368;
 cursor: pointer;
 
  &:hover {
    background-color: #ebf8ff;
  }
  &:active {
    background-color: #ebf8ff;
  }
 }
`;
export const SearchResults = styled.div`
 margin-left: 9rem;
 width: 47.5%;
`;
export const Company = styled.span`
  color: ${Colors.deepblue};
  font-size: 20px;
  font-family: arial,sans-serif;
  padding: 4px 0px 0px
`;
export const Details = styled.p`
  color: ${Colors.offgrey};
  font-size: 14px;
  font-family: arial,sans-serif;
  padding: 4px 0px 0px
`;
export const Data = styled.span`
  color: ${Colors.lightgrey};
  font-size: 12px;
  font-family: arial,sans-serif;
  padding: 4px 0px 0px
  padding-right: 0.5rem;
`;
export const Footer = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${Colors.lighten};
  color: #5F6368;;
  font-size: 14px;
  font-family: arial,sans-serif;
  padding: 1rem;
`;
export const MiniFooter = styled.div`
position: absolute;
bottom: 3rem;
left: 0;
width: 100%
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${Colors.lighten};
  color: #5F6368;;
  font-size: 14px;
  font-family: arial,sans-serif;
  padding: 1rem;
  border: 1px solid #e4e4e4;
`;
export const FirstDiv = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
`;
export const SecondDiv = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-around;
`;
export const Flex = styled.div`
margin: 1rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  color: ${Colors.offblack};
  font-size: 14px;
  font-family: arial,sans-serif;
  padding: 1rem;

  p {
    color: ${Colors.deepblue};
  }
  .google {
    color: ${Colors.offblack};
  }
`;