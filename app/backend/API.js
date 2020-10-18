const endpoint = 'http://localhost:3000/';

export function fetchCourses() {
    return fetch(endpoint + "courses", {'method':'GET'});
}

export function fetchUsers() {
    return fetch(endpoint + "users", {'method':'GET'});
}

export function fetchPosts(id) {
    return fetch(endpoint + "posts?course="+id, {'method':'GET'}) 
}

export function fetchDeleteValues(category, ids) {
    if (ids.length == 0) return;
    let req = fetch(endpoint + category+"/"+ids[0], {'method':'delete'})
    for (let i=1; i< ids.length; i++) {
        req.then(()=>fetch(endpoint + category+"/"+ids[i], {'method':'delete'}));
    }
    return req;
}