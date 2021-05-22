import React, { useState } from 'react';
import { Container, Wrapper, Content } from './styles';
import { Card, Section } from '..';
import danca from '../../Assets/danca.jpg';
import nbk from '../../Assets/nubank.png';
import pix from '../../Assets/pix.png';
import caixa from '../../Assets/caixa.jpg';
import { useEffect } from 'react';

type Dances = Array<{id: number, text: string}>;
type Payments = Array<{name: string, src: {image:string}, color: string}>;

const Home = () => {

    const listDances:Dances = [{id: 0, text: "Zumba"}, {id: 1, text: "Forró"}, {id: 2, text: "Axé"}, {id: 3, text: "Brega Funk"}, {id: 4, text: "Pagode"}];
    const secondListDances:Dances = [{id: 5, text: "Dança do Ventre"}, {id: 6, text: "Funk"}, {id: 7, text: "Samba"}, {id: 8, text: "Vanerão"}, {id: 9, text: "Arrocha"}];
    
    const [ payments ] = useState<Payments | null>([
        { name: "Nubank", src: {image: nbk}, color: "#8e44ad" }, { name: "Pix", src: {image: pix}, color: "#1aaa" },
        { name: "Caixa", src: {image: caixa}, color: "#6a89cc" }, { name: "Itau", src: {image: danca}, color: 'orange' }
    ]);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            console.log(window.pageYOffset);
        });

    },[]);

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
                        <iframe src="https://www.youtube.com/embed/p-rSdt0aFuw?controls=0&autoplay=1&mute=1&start=4" title="YouTube video" allow="autoplay; mute;" ></iframe>


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
                                    <Card  key={dance.id} srcImage={danca} description={dance.text} />
                                ))}

                            </div>

                            
                            <div className="card--right" >
                                <div className="moveCards">

                                    {secondListDances.map(dance => (
                                        <Card key={dance.id} srcImage={danca} description={dance.text}/>
                                    
                                    ))}

                                </div>
                            </div>

                        </div>
                    </Section>
                    
                    <Section title="Formas de Pagamento." text="Escolha seu melhor jeito" height="28vh">
                        
                        <div className="wrappCard">
                            <div className="moveCards">
                                
                                { payments?.map(payment => (
                                    <Card key={payment.name} srcImage={payment.src.image} description={payment.name} width="250px" height="130px" color={payment.color}/>    
                                
                                ))}
            
                            </div>
                        </div>

                    </Section>
                    <Section height="60vh" />
                    <Section title="Nos contate" text="Qualquer duvida é só falar" height="30vh">
                            <ul>
                                <li>Nos mande um e-mail</li>
                                <li>Tefelone: (45 9 0000-0000)</li>
                            </ul>
                            <span>Copyright Bruno Paulino</span>
                    </Section>
                    
                </Content>
            </Wrapper>
        </Container>
    )
}
export default Home;
