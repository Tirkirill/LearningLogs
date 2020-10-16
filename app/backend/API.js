const endpoint = 'http://localhost:3000/';

export function fetchCourses() {
    return fetch(endpoint + "courses", {'method':'GET'});
}