import { Component } from "react"

import Header from "../../components/Header.js"
import PostCards from "../../components/Postcards.js"

export default class extends Component {
    render() {
        return (
            <>
                <Header />
                <PostCards />
            </>
        )
    }
}