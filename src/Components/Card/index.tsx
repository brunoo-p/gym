import React from 'react';
import { Container, CardImage, CardDescription } from './styles';

interface CardContent{
    srcImage: {};
    description: string;
    width?: string;
    height?: string;
    color?: string;
}

const Card = ({ srcImage, description, width ="150px", height="120px", color }: CardContent) => {
    
    return (
        <Container width={width} height={height} >

            <CardImage src={srcImage} />
            <CardDescription color={color}> {description} </CardDescription>
        
        </Container>
    )
}

export default Card;