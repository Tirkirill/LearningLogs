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

export function fetchDeleteCourses(ids) {
    if (ids.length == 0) return;
    console.log(endpoint + "courses?"+req);
    let req = fetch(endpoint + "courses/"+ids[0], {'method':'delete'})
    for (let i=1; i< ids.length; i++) {
        req.then(()=>fetch(endpoint + "courses/"+ids[i], {'method':'delete'}));
    }
    return req;
}