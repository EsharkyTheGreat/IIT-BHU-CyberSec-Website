import React from 'react'

const Post = (props) => {
    return (
        <>
            <h2>Post {parseInt(props.match.params.id, 10)} </h2>
        </>
    )
}

export default Post
