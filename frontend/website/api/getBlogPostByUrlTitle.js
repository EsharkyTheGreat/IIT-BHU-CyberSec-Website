import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl.js"

export default async function (urlTitle) {
    try {
        const response = await axios(`http://localhost:5000/posts/get-blog-post-by-url-title?urlTitle=${urlTitle}`)
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}