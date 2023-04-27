import axios from 'axios'

export async function getInfo(url) {
    const { data } = await axios.get(url)
    return data
}
