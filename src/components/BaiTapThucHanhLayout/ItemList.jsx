import React, { Component } from 'react'
import ItemComponent from './ItemComponent'

export default class ItemList extends Component {
    render() {
        return (
            <div className='container px-lg-5'>
                <div className='row'>
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                </div>

            </div>
        )
    }
}
