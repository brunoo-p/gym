import React from 'react';
import { Container, Wrapper, Content } from './styles';
import { Card, Section } from '..';
import danca from '../../Assets/danca.jpg';
import nbk from '../../Assets/nubank.png';
import pix from '../../Assets/pix.png';
import caixa from '../../Assets/caixa.jpg';
import { useState } from 'react';

type Dances = Array<{text: string}>;
type Payments = Array<{name: string, src: {image:string}, color: string}>;

const Home = () => {

    const listDances:Dances = [{text: "Zumba"}, {text: "Forró"}, {text: "Axé"}, {text: "Brega Funk"}, {text: "Pagode"}];
    const secondListDances:Dances = [{text: "Dança do Ventre"}, {text: "Funk"}, {text: "Samba"}, {text: "Vanerão"}, {text: "Arrocha"}];
    
    const [ payments, setPayments ] = useState<Payments>([
        { name: "Nubank", src: {image: nbk}, color: "#8e44ad" }, { name: "Pix", src: {image: pix}, color: "#1aaa" },
        { name: "Caixa", src: {image: caixa}, color: "#6a89cc" }, { name: "Itau", src: {image: danca}, color: 'orange' }
    ]);

    return (
        <Container>
            <Wrapper>
                <Content>
                    <Section
                        title=""
                        text="À procura da frequência perfeita"
                        background="#262626"
                        height="80vh"
                    >
                        <iframe src="https://www.youtube.com/embed/0mYq5LrQN1s?controls=0&autoplay=1&mute=1" title="YouTube video" allow="autoplay; mute;"></iframe>

                    </Section>

                    <Section
                        title="Encontre seu ritmo"
                        text="Faça uma aula Experimental"
                        background="#262626"
                        height="50vh"
                    >
                        <div className="wrappCard">
                            <div className="card--left">

                                {listDances?.map(dance => (
                                    <Card srcImage={danca} description={dance.text} />
                                ))}

                            </div>

                            <div className="card--right" >
                                <div className="moveCards">

                                    {secondListDances.map(dance => (
                                        <Card srcImage={danca} description={dance.text}/>
                                    
                                    ))}

                                </div>
                            </div>
                        </div>
                    </Section>
                    
                    <Section title="Formas de Pagamento." text="Escolha seu melhor jeito" height="28vh">
                        
                        <div className="wrappCard">
                            <div className="moveCards">
                                { payments.map(payment => (
                                    <Card srcImage={payment.src.image} description={payment.name} width="250px" height="130px" color={payment.color}/>    
                                
                                ))}
            
                            </div>
                        </div>

                    </Section>
                    <Section height="60vh"/>
                    <Section title="Nos contate" text="Qualquer duvida é só falar" height="30vh"/>
                    
                </Content>
            </Wrapper>
        </Container>
    )
}
export default Home;
