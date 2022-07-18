import  styled  from "styled-components";
import Photo from "../../assets/bg2.png";

export const ContainerRight = styled.div`
    background: url(${Photo});
    background-size: cover;
    width: 50%;
    display: flex;
    justify-content: center;
    @media(max-width: 880px){
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

    @media(max-width: 880px){
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

        flex-direction: column;
        width: 50%;
        height: 50%;
        @media(max-width: 880px){
            width: 75%;
        }

    
`;

export const Intro = styled.div`
        margin-top: 10%;  
        width: 50%;

        
        @media(max-width: 880px){
        width: 75%;
        margin-top: 20%;
    
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
        height: 60px;
        margin-top: 20px;
        @media(max-width: 880px){
            position: absolute;

            right: 0;
            margin-right: 30px;
            height: 60px;
        }


    
`;

export const Title = styled.h1`
    font-size: 45px;
    font-weight: 400;
    margin-bottom: 10px;


    
`;

export const IntroText = styled.p`
        font-size: 12px;
    
`;

export const LoginTitle = styled.h1`
        font-weight: 400;
        font-size: 25px;
        margin: 0;
    
`;

export const Icon = styled.img`
             position: absolute;
             width: 20px;
             right: 5%;
             top: 35%;
    
`;

export const ErrorMsg = styled.p`
        text-align: center;
        color: #E9B425;
        visibility: ${props => props.error ? "visible" : "hidden"};
    
`;







