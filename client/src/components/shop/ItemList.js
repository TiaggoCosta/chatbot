import React from 'react';

const ItemList = () => (
    <div>
        <div className="card-panel grey lighten-5 z-depth-1 row">

            <div className="col m6">

                <div className="card">
                    <div className="card-image" >
                        <img alt="notebook" src={"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"} />
                    </div>
                    <div className="card-content">
                        Chatbots para Iniciantes
                        <p> <a href="/">R$ 27.90</a></p>
                    </div>
                    <div className="card-action">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/course/chatbots-python-dialogflow-iniciantes/">Comprar agora!</a>
                    </div>
                </div>

            </div>

            <div className="col m6">

                <div className="card">
                    <div className="card-image" >
                        <img alt="notebook" src={"https://images.unsplash.com/photo-1454165205744-3b78555e5572?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} />
                    </div>
                    <div className="card-content">
                        Machine Learning
                        <p> <a href="/">Gratuito</a></p>
                    </div>
                    <div className="card-action">
                        <a target="_blank" rel="noopener noreferrer" href="https://pt.coursera.org/learn/machine-learning">Comprar agora!</a>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
)

export default ItemList;
