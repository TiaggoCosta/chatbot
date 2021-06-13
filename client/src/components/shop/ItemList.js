import React from 'react';

const ItemList = () => (
    <div>
        <div className="card-panel grey lighten-5 z-depth-1">

            <div  style={{ height: 270, paddingRight:30, float: 'left'}}>
                <div className="card">
                    <div className="card-image" style={{ width: 240}}>
                        <img alt="notebook" src={require("../../img/notebook.jpg")} />
                        <span className="card-title">Hacker mal</span>
                    </div>
                    <div className="card-content">
                        Aprenda a ser um hacker mal.
                        <p> <a href="/">$ 12.90</a></p>
                    </div>
                    <div className="card-action">
                        <a target="_blank" rel="noopener noreferrer" href="#">Comprar agora!</a>
                    </div>
                </div>

                <div  style={{ height: 270, paddingRight:30, float: 'left'}}>
                <div className="card">
                    <div className="card-image" style={{ width: 240}}>
                        <img alt="notebook" src={require("../../img/notebook.jpg")} />
                        <span className="card-title">Hacker mal</span>
                    </div>
                    <div className="card-content">
                        Aprenda a ser um hacker mal.
                        <p> <a href="/">$ 12.90</a></p>
                    </div>
                    <div className="card-action">
                        <a target="_blank" rel="noopener noreferrer" href="#">Comprar agora!</a>
                    </div>
                </div>
            </div>

            <div  style={{ height: 270, paddingRight:30, float: 'left'}}>
                <div className="card">
                    <div className="card-image" style={{ width: 240}}>
                        <img alt="notebook" src={require("../../img/notebook.jpg")} />
                        <span className="card-title">Hacker mal</span>
                    </div>
                    <div className="card-content">
                        Aprenda a ser um hacker mal.
                        <p> <a href="/">$ 12.90</a></p>
                    </div>
                    <div className="card-action">
                        <a target="_blank" rel="noopener noreferrer" href="#">Comprar agora!</a>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    </div>
)

export default ItemList;
