import React from 'react';

const About = () => (
    <div className="about-section">
        <h1>Sobre Nós</h1>
        <p>Este é um projeto desenvolvido para a disciplina de Inteligência Artificial da UNISINOS.</p>
        <p>O propósito é estudar como funcionam os chatbots.</p>
        <h2 style={{display: 'flex', justifyContent: 'center'}}>Integrantes</h2>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src="https://avatars1.githubusercontent.com/u/38144404?s=300&u=e287da326fba1933021427603dff754eb0601ed1&v=4" alt="Karolina" style={{width:'100%'}}/>
                    <div className="container">
                        <h4 className="about-text">Karolina Pacheco</h4>
                        <p className="about-text" style={{display: 'flex', justifyContent: 'center', fontSize: '80%'}}>karolinacp@edu.unisinos.br</p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://avatars0.githubusercontent.com/u/38010089?s=300&v=4" alt="Nadine" style={{width:'100%'}}/>
                    <div className="container">
                        <h4 className="about-text">Nadine Schneider</h4>
                        <p className="about-text" style={{display: 'flex', justifyContent: 'center', fontSize: '80%'}}>nadineschneider@edu.unisinos.br</p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://avatars2.githubusercontent.com/u/18539662?s=300&u=c50302c179b91363c90bca74dee6ae900e1e9326&v=4" alt="Tiago" style={{width:'100%'}}/>
                    <div className="container">
                        <h4 className="about-text">Tiago Costa</h4>
                        <p className="about-text" style={{display: 'flex', justifyContent: 'center', fontSize: '80%'}}>tiagocsilva@edu.unisinos.br</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
)

export default About;
