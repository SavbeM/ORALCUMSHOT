let defaultInitial = {
    posts: [{post: 'USER DEFAULT POST MESSAGE'}, {post: 'USER'},],
    postText: ""
}

const ADD_POST = 'ADD-POST'
const ADD_TEXT = 'ADD-TEXT'

export const addPostActionCreator = (post) => {
    return {type: ADD_POST, post: post}
}

export const addPostTextActionCreator = (text) => {
    return {type: ADD_TEXT, text: text}
}

export const profilePostReducer = (state = defaultInitial, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    post: action.post,
                }],
                postText: ""
            }
        case ADD_TEXT:
            return {...state, postText: action.text}
        default:
            return {...state}
    }

}

