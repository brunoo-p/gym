import React from 'react';
import { Container, Content } from './styles';

interface SectionContent  {
    background: string;
    height: string;
    title: string;
    text: string;
}

const Section: React.FC<SectionContent> = (props) => {

    const { background, height, title, text, children } = props;
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