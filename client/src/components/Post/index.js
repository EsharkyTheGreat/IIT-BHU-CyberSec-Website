import React, { useEffect, useState } from 'react'
import post1 from './post1.md'
import Markdown from 'markdown-to-jsx';
const Post = (props) => {
    const [content, setContent] = useState({ md: "" });
    useEffect(() => {
        fetch(post1)
            .then((res) => res.text())
            .then((md) => {
                setContent({ md })
            })
    }, [])
    return (
        <>
            <h2>Post {parseInt(props.match.params.id, 10)} </h2>
            <div class="container ht-tm-container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <Markdown children={content.md} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
