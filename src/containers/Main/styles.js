import  styled  from "styled-components";

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 70vh;
 /*   @media (max-width: 860px) {
        height: 80vh;
    } */


`;

export const LogoWrapper = styled.div`
    display: flex;
    align-self: flex-end;


`;

export const TextContent = styled.p`
    font-size: 16px;
    margin: 0px;
`;

export const FirstTitle = styled.h1`
    font-size: 26px;
    line-height: 35px;
    color: #C12D18;
    font-weight: 700;
    margin: 0px;
`;

export const Title = styled.h1`
    font-size: 35px;
    line-height: 35px;
    color: #C12D18;
    font-weight: 700;
    margin: 0px;

`;

export const Logo = styled.img`
        display: flex;
        height: 60vh;

        @media(max-width: 700px){
            margin-bottom: 0;
            width: 90vw;
            height: 70vh;
            position: absolute;
            top: 150px;
          }
`;

export const TextWrapper = styled.div`
        display: flex;
        flex-direction: column;
        text-align: end;
        margin-right: 5%;
        height: 60%;

        margin-top: 35px;
        @media(max-width: 700px){
            display: none;
        }
`;

export const TextBox = styled.div`
        margin: 0;
        padding: 0;

        @media(max-width: 700px){
            display: none;
        }
`;

