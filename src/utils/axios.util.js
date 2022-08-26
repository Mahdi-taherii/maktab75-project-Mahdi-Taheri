import originAxios from 'axios'

const axios = originAxios.create({
    baseURL: "http://localhost:3003",
})

export { axios }