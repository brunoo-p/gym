import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width || '150px'};
    height: ${(props) => props.height || '120px'};
    
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 10px;
    background: transparent;
    border-radius: 12px;
    transform: scale(.92);
    transition: 0.3s ease-in;

    :hover{
        transform: scale(1);
    }
`;


export const CardImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 1px solid black;

    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    background-reapeat: no-repeat;

`;

export const CardDescription = styled.span`
    display: flex;
    width: 100%;
    height: 60%;
    align-items: center;
    justify-content: center;
    --color: ${(props) => props.color || 'rgba(89, 98, 217, .67)'};
    background: linear-gradient(45deg, var(--color) 60%, rgba(225, 95, 65, .8));

    border-radius: 0px 0px 10px 10px;
    color: #252525;
    font-size: 20px;
    font-weight: 700;

`;
