import * as axios from "axios";



const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,

    headers: {
        'API-KEY': '5a10f7b4-7c5f-4f8e-a334-8f8ae244e3a1'
    }

})

export const getUsersRequest = (currentPage, pageSize) => {
   return  instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then((response) => response.data);
}

export  const  followPost = (id) => {
    return instance.post(`follow/${id}`)
        .then((response) => response.data )
}

export  const  followDelete = (id) => {
    return instance.delete(`follow/${id}`)
        .then((response) => response.data )
}

export const authMe = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)
}

export const getUserProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => response.data)
}

export const getStatus = (id) => {
    return instance.get(`profile/status/${id}`)
        .then(response => response.data)
}
export  const updateStatus = (status) => {
    return instance.put(`/profile/status`, {status: status})
}

export const login = (loginData) => {
    return instance.post(`auth/login`, {email: loginData.email, password: loginData.password, rememberMe: loginData.rememberMe})
        .then(response => response.data)
}

export const logout = () => {
    return instance.delete(`/auth/login`).then(response => response.data)
}