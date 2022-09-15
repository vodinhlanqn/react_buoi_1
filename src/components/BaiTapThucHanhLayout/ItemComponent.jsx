import React, { Component } from 'react'

export default class ItemComponent extends Component {
    render() {
        return (
            <div class="col-lg-3 col-sm-6 col-12 mb-5">
                <div className="card">
                    <img className="card-img-top" src='' alt='Card Img' height={200} style={{ backgroundColor: "#aaaaaa" }} />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <a className="btn btn-primary btn-sm" href="#!">Find Out More!</a>
                    </div>
                </div>
            </div>


        )
    }
}
