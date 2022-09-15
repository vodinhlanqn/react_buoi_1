import React, { Component } from 'react'
import BannerComponent from './BannerComponent'
import ItemList from './ItemList'

export default class BodyComponent extends Component {
    render() {
        return (
            <div>
                <BannerComponent />
                <ItemList />
            </div>
        )
    }
}
