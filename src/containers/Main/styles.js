import  styled  from "styled-components";

export const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 60!;

`;


export const TextContent = styled.p`
    font-size: 16px;
    margin: 0px;
`;

export const FirstTitle = styled.h1`
    font-size: 26px;
    color: #C12D18;
    font-weight: 700;
    margin: 0px;
`;

export const Title = styled.h1`
    font-size: 35px;
    color: #C12D18;
    font-weight: 700;
    margin: 0px;
`;

export const Logo = styled.img`
        display: absolute;
        margin-top: 5%;
        height: 80vh;
        @media(max-width: 650px){
            margin-bottom: 0;
            width: 90vw;
            height: 100vh;
            position: absolute;
            top: 100px;
          }
`;

export const TextWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: end;
        margin-right: 5%;
        height: 60vh;

        margin-top: 35px;
        @media(max-width: 650px){
            display: none;
        }
`;

export const TextBox = styled.div`
        margin: 0;
        padding: 0;








        @media(max-width: 650px){
            display: none;
        }
`;

