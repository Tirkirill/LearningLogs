const endpoint = 'http://localhost:3000/';

export function fetchCourses() {
    return fetch(endpoint + "courses", {'method':'GET'});
}

export function fetchUsers() {
    return fetch(endpoint + "users", {'method':'GET'});
}

export function fetchPosts(id) {
    return fetch(endpoint + "posts?course="+id) 
}