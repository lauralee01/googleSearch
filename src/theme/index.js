import styled from 'styled-components';
import * as Colors from "./color.json";
import * as Dimensions from "./dimension.json";

export const TestStyle = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${Colors.white};
    h1,p {
        color: ${Colors.black}
    }
`
