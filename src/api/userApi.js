import 'whatwg-fetch'

export function getUsers(){
    return get('users');
}
export function get(url){
    return fetch(url).then(onSuccess,onError);
}
export function onSuccess(response){
    //console.log("response",response);
    return response.json();
}
export function onError(error){
    return console.log(error); //eslint-disable-line no-console
}