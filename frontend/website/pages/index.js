import { Component } from "react"
import Header from '../components/Header.js'
import Jumbotron from '../components/Jumbotron'
import PostCards from '../components/Postcards'
export default class extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <Header />
                <div className="ht-main">
                    <Jumbotron />
                    <PostCards />
                </div>
            </div>
        )
    }
}