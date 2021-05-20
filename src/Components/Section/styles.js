import styled from 'styled-components';

export const Container = styled.aside`
    width: 100%;
    height: ${({height}) => height};
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;

    :first-child{
        
        h1{
            display: none;
            text-align: center;
            font-size: 28px;
            margin-bottom: 20px;
        }
        label{
            display: flex;
            position: absolute;
            width: 80%;
            justify-content: center;
            top: 24%;
            word-spacing: 5px;
            text-align: center;
            
            font-size: 28px;
            font-family: 'Monoton';
            font-weight: italic;
            color: rgba(45,222,133, .6);
        }

        .childrenContent{
            width: 95%;
            height: 100%;
            align-items: center;
            justify-content: center;
            background: #222;
            
            iframe{
                width: 100%;
                height: 105%;
            }

            @media (min-width: 1024px){
                
                height: 90vh;
                iframe{
                    width: 740px;
                    height: 350px;
                }
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: center;
                margin: 1% 0%;
            }
        }
        @media(min-width: 720px){
            label{
                top: 26%;
                word-spacing: 5px;
                font-size: 42px;
            }
        }
    }

    :nth-child(2){
        
        h1{
            display: flex;
            font-size: 24px;
            filter: drop-shadow(0 0 1px white);
            justify-content: center;
        }
        label{
            display: none;
        }

        .wrappCard{
        
            display: flex;
            width: 100%;
            height: 60%;
            align-items: top;
            margin-left: -15px;
            background: #222;
    
            border-radius: 10px;
            overflow: hidden;
    
    
            .card--left{
                transform: scale(.9);
                scroll-behavior: smooth;
                display: block;
                width: 180px;
                height: 98%;
                align-items: top;
                
                margin-right: 20px;
                border-radius: 10px;
                padding: 8px;
                margin-top: 5px;
    
                overflow-y: auto;
                overflow-x: hidden;
                direction: rtl;

                transition: 0.3s ease-in;

                :focus{
                    transform: scale(1);
                }
            }
            
            .card--right{
    
                display: block;
                width: 180px;
                height: 100%;
                align-items: top;
                justify-content: flex-start;
                
                margin-right: 20px;
                border-radius: 10px;
                padding-right: 5px;
                margin-top: 15px;
    
                overflow: hidden;

    
                .moveCards{
                    animation: move 7s infinite alternate;
                    animation-fill-mode: forwards;
                    transition: 0.5s ease-in;

                    @keyframes move {
                        0%, 100% {transform: translateY(-45%); opacity: 1;}
                        50% {transform: translateY(0%);
                            opacity: 9;
                            transform: scale(.95);
                        }
                    }
                }
            }
        }

        @media (min-width: 1024px){
            overflow: hidden;
            
            .wrappCard{
                height: 100%;
                display: flex;
                flex-direction: column;

                .card--left{
                    display: flex;
                    width: 90%;
                    overflow: hidden;
                    background:rgba(36,36,36);
                    margin-top: 0;
                    padding: 0 20px;
                    
                }
                .card--right{
                    display: flex;
                    width: 90%;
                    overflow: hidden;
                    margin: -5px 0 5px 0;
                    padding: 0 0 10px 0;
                    
                    .moveCards{
                        display: flex;
                        animation: none;
                    }
                }
            }
        }
    }

    
    :nth-child(3){
        overflow: hidden;

        margin-left: -15px;
        flex-wrap: wrap;

        h1{
            display: none;
        }
        label{
            display: flex;
            position: absolute;
            width: 100%;
            justify-content: center;

            margin-top: -4px;
            color: whiteSmoke;

            font-size: 20px;
        }

        .wrappCard{
            background: #222;
            width: 98%;
            height: 105%;
            display: flex;
            
            align-items: center;
            justify-content: flex-start;
            flex: none;
            
            padding: 5px 0px;

            overflow-x: auto;
            scroll-behavior: smooth;
            
            border-radius: 10px;
            
            .moveCards{
                display: flex;
                flex: none;
                flex-wrap: wrap;
                paddin: 5px;
                justify-content: space-around;
            }
        }
        
        @media (min-width: 1024px){
            margin-left: -40px;
            justify-content: flex-end;
            box-shadow: 1px 1px 5px 3px rgba(192,192,192, .6);
            
            label{
                font-family: 'Monoton';
                word-spacing: 5px;
                font-size: 25px;
                background: -webkit-linear-gradient(#7d5fff, #67e6dc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transform: translateY(-5%);
            }

            .wrappCard{
                width: 100%;
                height: 100%;
                justify-content: flex-end;
                padding: 0;

            }
        }
            
    }

    background-color: ${(props) => props.background};
    
`;

export const Content = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    padding: 20px;
    align-items: top;
    flex-direction: column;
`;