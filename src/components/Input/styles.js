import styled from "styled-components";

export const Inputs = styled.input`
    background-color: transparent;
    border: solid 1px ${props => props.errorColor ? '#E9B425' : '#FFFFFF'}; 
    box-sizing: border-box;
    border-radius: 50px;
    color: #e0e0e0ec;
    padding-left: 20px;
    font-size: 1.2em;
    height: 50px;
    margin: 10px 0px;
    width: 100%;
    

`;
