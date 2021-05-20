import styled from 'styled-components';

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
        border-radius: 0px;       
        border: 2px solid #33aaaa;
    }
`;

export const Wrapper = styled.div`
    background:linear-gradient(60deg, rgba(255, 0, 0, .4) 10%, orange);
    padding: 5px;
    z-index:-1;
    
    position: relative;
    background-attachment: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    
`;
export const Content = styled.div`
    margin: 10px 5px;
    
    @media(min-width: 1024px){

        margin: 10px 20px;
    }
`;