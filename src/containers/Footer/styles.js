import  styled  from "styled-components";

export const TextContent = styled.p`
    font-size: 10px;

`;

export const FooterContainer = styled.div`
        display: grid;
    grid-template-columns: 12.6% 31.6% 7.8% 5.5% 5% 23.5% 7% 7%;
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    color: #ffffff;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 10%;
    @media(max-width: 850px){
        display: flex;
        flex-direction: row-reverse;
    }
`;

export const FooterTextContainer = styled.div`
        display: flex;
        grid-column: 2;
        align-items: center;
        text-align: right;
        @media(max-width: 850px){
            display: none;
            grid-column: unset;
        }
`;





export const FooterBar = styled.div`
                position: absolute;
        border-right: white 1px solid;
        height: 50px;
        top: 10%;
        width: 10px;
        left: 45%;
        @media(max-width: 850px){
            display: none;
            grid-column: unset;
        }
    
`;


export const ButtonContinuar = styled.button`
            display: flex;
        text-align: center;
        justify-content: center;
        background-color: transparent;
        color: red;
        cursor: pointer;
        font-size: 12px;
        border: 0;
        width: 100%;
        padding: 0;
    
`;

export const ContinuarText = styled.div`
        grid-column: 7;
        display: flex;
        background-color: #ffffff;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        cursor: pointer;
        color: #C13216;
        height: 100%;
        overflow: hidden;
        width: 100%;
        @media(max-width: 850px){
            grid-column: 2;
            height: 100%;
            width: 100%;
            padding: 0;

        }

`;


export const ButtonContainer = styled.div`
            display: flex;
        flex-direction: row;
        background-color: #1C1D20;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        grid-column: 8;
        min-width: 80px;
        @media(max-width: 850px){
            grid-column: 1;
        }

`;


export const Button = styled.button`
        display: flex;
        text-align: center;
        justify-content: center;
        background-color: transparent;
        color: #FFFFFF;
        cursor: pointer;
        font-size: 12px;
        border: 0;
        width: 100%;
        padding: 0;
`;

