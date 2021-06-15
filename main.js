function getE(id) {
    return document.getElementById(id);
}
async function NewUser() {
    url='https://randomuser.me/api/';
    const response = await fetch(url);
    const json = await response.json();
    loadUser(json.results[0]);
}

function loadUser(result){
    getE('name').innerHTML=result.name.first+" "+result.name.last;
    getE('user-img').src=result.picture.large;
    getE('email').innerHTML=result.email;
    getE('phone').innerHTML=result.phone;
    getE('loaction').innerHTML=result.location.state+","+result.location.country;
}

NewUser();