import React from 'react';
import { Container, Wrapper, Content } from './styles';
import { Card, Section } from '..';
import danca from '../../Assets/danca.jpg';

const Home: React.FC = () => {
    
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Section
                        title="Um carousel autoplay com video."
                        text="À procura da frequência perfeita"
                        background="#262626"
                        height="80vh"
                    >
                        <iframe src="https://www.youtube.com/embed/0mYq5LrQN1s" title="YouTube video" allow="autoplay; picture-in-picture" ></iframe>

                    </Section>

                    <Section
                        title="Comece Já!!"
                        text="Faça uma aula Experimental"
                        background="#262626"
                        height="50vh"
                    >
                        <div className="wrappCard">
                            <div className="card--left">
                                <Card srcImage={danca} description="Zumba" />
                                <Card srcImage={danca} description="Forró"/>
                                <Card srcImage={danca} description="Axé"/>
                                <Card srcImage={danca} description="Brega Funk"/>
                            </div>

                            <div className="card--right" >
                                <div className="moveCards">
                                    <Card srcImage={danca} description="Dança do Ventre"/>
                                    <Card srcImage={danca} description="Funk"/>
                                    <Card srcImage={danca} description="Samba"/>
                                    <Card srcImage={danca} description="Vanerão"/>
                                </div>
                            </div>
                        </div>
                    </Section>
                    
                    <Section title="Formas de Pagamento." text="Escolha seu melhor jeito" background="#262626" height="28vh">
                        
                        <div className="wrappCard">
                            <div className="moveCards">
                                <Card srcImage={danca} description="Nubank" width="250px" height="130px"/>
                                <Card srcImage={danca} description="Itaú" width="250px" height="130px" />
                                <Card srcImage={danca} description="Pix" width="250px" height="130px" />
                                <Card srcImage={danca} description="Boleto" width="250px" height="130px" />
                            </div>
                        </div>

                    </Section>
                    <Section title="Dê Aulas" text="Consiga um dinheiro extra" background="#262626" height="90vh"/>
                    <Section title="Nos contate" text="Qualquer duvida é só falar" background="#262626" height="30vh"/>
                    
                </Content>
            </Wrapper>
        </Container>
    )
}
export default Home;
