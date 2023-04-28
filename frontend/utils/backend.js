import axios from "axios";

export async function getQuestions() {
    const { data } = await axios.get('/api/question')
    // console.log(data)
    return data
}

export async function postQuestions(question) {
    const { data } = await axios.post('/api/question', question)
        // console.log(data)
    return data
}

export async function updateQuestions(question, id) {
    const { data } = await axios.put(`/api/question/${id}`, question)
        // console.log(data)
    return data
}

export async function deleteQuestions(id) {
    const { data } = await axios.delete(`/api/question/${id}`)
        // console.log(data)
    return data
}