import styled from 'styled-components';
import danca from '../../Assets/danca.jpg';


export const Container = styled.aside<{height: string, background: string}>`
    width: 100%;
    
    height: ${({height}) : string => height};
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;

    :first-child{
        background: linear-gradient(46deg, rgba(2,2,2, .8) 37.65%, rgba(103,230,220, .8) 27.03%, rgba(125,95,255, .8));
        -webkit-box-shadow: 2px 6px 37px 40px rgba(125,95,255, .8);
        -moz-box-shadow: 2px 6px 37px 40px rgba(103,230,220, .8);
        box-shadow: 2px 6px 37px 40px rgba(230,230, 239, .3);
        
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
            top: 28%;
            word-spacing: 5px;
            text-align: center;
            
            font-size: 28px;
            font-family: 'Monoton';
            color: rgba(45,222,133, .8);

            animation-fill-mode: forwards;
            animation: fade 1s ease-in;
            
            @keyframes fade {
                from { top: 26%; opacity: 0.1;}
                to { top: 285; opacity: 1}
            }
        }

        .childrenContent{
            width: 95%;
            height: 100%;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            background: rgba(26,26,26,.8);
            
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

            background: linear-gradient(6deg, rgba(125,95,255, .8) 37.13%, rgba(103,230,220, .8));
            box-shadow: 2px 6px 37px 22px rgba(124,126,126, .4);

            label{
                top: 29.4%;
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

                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track{
                    background: #333;
                }
                ::-webkit-scrollbar-thumb {
                    background-color:  rgba(136,136,136, .5);
                    border-radius: 20px;
                    border: 1px solid #1aaa;
                }

                :focus{
                    transform: scale(1);
                }

                animation-fill-mode: forwards;
                animation: showCards .36s ease-in;
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
                animation-fill-mode: forwards;
                animation: showCards .36s ease-in;

                .moveCards{
                    animation: move 7s infinite alternate;
                    animation-fill-mode: forwards;
                    transition: 0.5s ease-in;

                    @keyframes move {
                        0%, 100% {transform: translateY(-52%); opacity: 1;}
                        50% {transform: translateY(0%);
                            opacity: 9;
                            transform: scale(.95);
                        }
                    }
                }
            }

            @keyframes showCards {
                from { transform: scale(.9); opacity: 0.1;}
                to { transform: scale(1); opacity: 1}
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
                    transform: scale(1);
                    justify-content: space-around;
                    
                }
                .card--right{
                    display: flex;
                    width: 90%;
                    overflow: hidden;
                    margin: -5px 0 5px 0;
                    padding: 0 0 10px 0;
                    justify-content: space-around;
                    
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
        filter: drop-shadow(0 0 0.25rem white);

        h1{
            display: none;
        }
        label{
            display: flex;
            position: absolute;
            z-index: 1;
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

    :nth-child(4){
        opacity: 0.6;
        border-radius: 20px;
        //background-color: rgba(225, 95, 65, .8);
        background-color: linear-gradient(46deg, rgba(2,2,2, .4) 37.65%, rgba(103,230,220, .8) 27.03%, rgba(125,95,255, .8));
        background-blend-mode: darken;
        background: url(${danca});
        background-size: cover;
        background-position: center;

        @media (min-width: 720px){
            display: flex;
            //background: transparent;
            width: 50%;
            margin-left: 25%;
        }
    }

    :nth-child(5){
        display: flex;
        width: 110%;
        align-items: center;
        justify-content: center;

        color: white;
        border-radius: 0;
        margin: 0 0px -10px -10px;
        box-shadow: 1px 0px 0px 3px rgba(192,192,192, .6);
        h1{
            font-size: 24px;
            display: flex;
            height: 15%;
            align-items: center;
            justify-content: center;
        }

        label{
            font-size: 20px;
            display: flex;
            height: 20%;
            align-items: center;
            justify-content: center;
            color: #1aaa;
            
            
            margin-bottom: 4%;
        }

        ul{
            width: 100%;
            height: 100%;
        
            li{
                width: 100%;
                font-size: 16px;
                padding: 5px;
                cursor: pointer;
                background: transparent;
                transition: all 0.5s ease-in;

                :hover{
                    background: -webkit-linear-gradient(#7d5fff, #67e6dc);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;   
                }
            }
        }
        span{
            display: flex;
            height: 100%;
            align-items: flex-end;
            justify-content: center;
            margin-bottom: -10px;

            font-size: 16px; 
            background: -webkit-linear-gradient(#7d5fff, #67e6dc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        }

        @media (min-width: 720px){
            margin: 0 0 -10px -20px;

            label{
                margin-bottom: 1%;

            }
            ul{
                width: 50%;
                transform: translateX(25%);
            }
            span{
                margin-bottom: -20px;
            }
        }
    }

    background-color: ${({ background }) : string => background };
    
`;

export const Content = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    padding: 20px;
    align-items: top;
    flex-direction: column;
`;