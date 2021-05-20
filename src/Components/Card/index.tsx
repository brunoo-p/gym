import React from 'react';
import { Container, CardImage, CardDescription } from './styles';

interface CardContent{
    srcImage: any;
    description: string;
    width?: string;
    height?: string;
}

const Card: React.FC<CardContent> = (props) => {
    
    const { srcImage, description, width, height } = props;
    return (
        <Container width={width} height={height}>
            <CardImage src={srcImage}/>
            <CardDescription>{description}</CardDescription>
        </Container>
    )
}

export default Card
