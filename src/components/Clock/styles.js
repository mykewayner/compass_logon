import  styled  from "styled-components";


export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    @media(max-width: 860px){
    display: none;
}


`;

export const TimeContainer = styled.h1`
    font-size: 120px;
    font-weight: 700;
    line-height: 120px;
    margin-top: 2%;
    margin-bottom: 0;


`;

export const DateContainer = styled.p`
        font-size: 14px;
        margin: 0;
`;







