import React, { Component } from 'react'
import ItemComponent from './ItemComponent'

export default class ItemList extends Component {
    render() {
        return (
            <div className='container px-lg-5'>
                <div className='row gx-lg-5'>
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                    <ItemComponent />
                </div>

            </div>
        )
    }
}
