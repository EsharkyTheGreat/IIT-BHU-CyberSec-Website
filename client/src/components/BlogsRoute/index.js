import { Switch, Route } from "react-router-dom";
import React from 'react'
import Blogs from '../Blogs'
import Post from "../Post"
const BlogsRoute = () => {
    return (
        < Switch >
            <Route exact path="/blogs" component={Blogs} />
            <Route path="/blogs/:id" component={Post} />
        </Switch >
    )
}

export default BlogsRoute
