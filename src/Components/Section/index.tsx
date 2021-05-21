import React from 'react';
import { Container, Content } from './styles';

interface SectionContent  {
    height: string;
    background?: string;
    title?: string;
    text?: string;
    children?: any;
}

const Section = ( { background = '#262626', height, title, text, children } : SectionContent) => {

    return (
        <Container background={background} height={height}>
            <Content>
                
                <h1 style={{color: 'white'}}>{title}</h1>
                <label htmlFor="text">{text}</label>
                
                <div className= "childrenContent">
                    {children}
                </div>
            
            </Content>
        </Container>
    )
}

export default Section;