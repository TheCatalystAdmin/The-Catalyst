//Store all endpoints here for easy access
const URL = "http://localhost:5000/api";
export const ENDPOINTS = {
    LOGIN: URL + "/login",
    REGISTER: URL + "/register",
    CHECK_USERNAME_EXISTS: URL + "/check-username",
    SET_USERNAME: URL + "/set-username",
    CHECK_STATUS: URL + "/check-status",
    NEW_POST: URL + "/post/new",
    GET_USER_POSTS: URL + "/post/fetch-user-posts",
    FETCH_POST: URL + "/post/fetch-post",
}