import  styled  from "styled-components";
import Photo from "../../assets/bg2.png";

export const ContainerRight = styled.div`
    background: url(${Photo});
    background-size: cover;
    width: 50%;
    display: flex;
    justify-content: center;
    @media(max-width: 800px){
        width: 0%;}
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    height: 100vh;
    width: 50%;
    color: white;
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

    @media(max-width: 800px){
        width: 100%;
    }
`;

export const PageWrapper = styled.div`
        display: flex;
         flex-direction: row;

    
`;

export const InputWrapper = styled.div`
        position: relative;
    
`;


export const LoginForm = styled.div`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 50%;
        height: 50%;
        @media(max-width: 800px){
            width: 75%;
        }

    
`;

export const Intro = styled.div`
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        width: 50%;
        height: 50%;
        @media(max-width: 800px){
            width: 75%;
        }

    
`;

export const Button = styled.button`
            background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    font-weight: bold;
    color: #E0E0E0;
    font-size: 1.2em;
    cursor: pointer;
    height: 50px;
    border: 0; 
    width: 100%;

    
`;

export const Img = styled.img`
        height: 50px;
        margin-top: 20px;
        @media(max-width: 800px){
            position: absolute;
            right: 0;
            margin-right: 30px;
            height: 60px;
        }


    
`;







