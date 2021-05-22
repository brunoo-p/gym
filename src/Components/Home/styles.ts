import styled from 'styled-components';
import tape from '../../Assets/tape.jpg';

export const Container = styled.div`
    z-index: -2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-family: 'Roboto', sans serif;
    transition: 0.5s ease-in;

    
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background: #262626;
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(136,136,136, .6);
        border-radius: 5px;       
        border: 1px solid #1aaa;
    }
`;

export const Wrapper = styled.div`
    //background-color:linear-gradient(60deg, rgba(255, 0, 0, .4) 10%, orange);
    background-color: #1aaa;
    background-image: url(${tape});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: darken;
    
    padding: 5px;
    z-index:-1;
    
    position: relative;

    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;

    
`;
export const Content = styled.div`
    margin: 10px 0px;
    
    @media(min-width: 1024px){

        margin: 10px 20px;
    }
`;