import React from 'react';

const About = () => (
    <div className="about-section">
        <h5>Sobre Nós</h5>
        <p>Este é um projeto desenvolvido para a disciplina de Inteligência Artificial da UNISINOS.</p>
        <p>O propósito é estudar como funcionam os chatbots.</p>
        <h5 style={{display: 'flex', justifyContent: 'center'}}>Integrantes</h5>
        <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="column">
                <div className="card">
                    <img src="https://avatars1.githubusercontent.com/u/38144404?s=300&u=e287da326fba1933021427603dff754eb0601ed1&v=4" alt="Karolina" style={{width:'100%'}}/>
                    <div className="container">
                        <p className="about-text"><b>Karolina Pacheco</b></p>
                        <p className="about-text" style={{justifyContent: 'center', fontSize: '80%'}}>karolinacp@edu.unisinos.br</p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://avatars0.githubusercontent.com/u/38010089?s=300&v=4" alt="Nadine" style={{width:'100%'}}/>
                    <div className="container">
                        <p className="about-text"><b>Nadine Schneider</b></p>
                        <p className="about-text" style={{justifyContent: 'center', fontSize: '80%'}}>nadineschneider@edu.unisinos.br</p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src="https://avatars2.githubusercontent.com/u/18539662?s=300&u=c50302c179b91363c90bca74dee6ae900e1e9326&v=4" alt="Tiago" style={{width:'100%'}}/>
                    <div className="container">
                        <p className="about-text"><b>Tiago Costa</b></p>
                        <p className="about-text" style={{justifyContent: 'center', fontSize: '80%'}}>tiagocsilva@edu.unisinos.br</p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
)

export default About;
