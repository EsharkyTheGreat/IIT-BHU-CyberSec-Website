import axios from "axios"

import apiBaseUrl from "../utils/apiBaseUrl.js"

export default async function () {
    try {
        const response = await axios("http://localhost:5000/posts/get-five-newest-posts")
        return response.data
    } catch (error) {
        return { getDataError: true }
    }
}