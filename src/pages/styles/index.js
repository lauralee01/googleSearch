import styled from 'styled-components';
import * as Colors from './color.json';
import * as Font from './font.json';

export const HomePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white};
`;
export const Search = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -60%);
  text-align: center;

  img {
    width: 272px;
    margin-bottom: -5rem;
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
  }
`;
export const SearchButton = styled.div`
 text-align: center;
 margin-top: 1rem;

 button {
     outline: none;
     background: ${Colors.light};
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
  border-top: 1px solid ${Colors.light};
  text-align: left;
  padding: 0 1rem;
`;
export const Key = styled.li`
 padding: 0.5rem 0;
 font-family: arial,sans-serif;
 font-size: 14px;
 color: #5F6368;
`;