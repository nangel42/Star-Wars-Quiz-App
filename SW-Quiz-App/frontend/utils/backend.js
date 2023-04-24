import axios from "axios";

export async function getQuestions() {
    const { data } = await axios.get('/api/question')
    // console.log(data)
    return data
}

// export async function deleteQuestions(id) {
//     axios.delete(`/api/question/${id}`)
// }