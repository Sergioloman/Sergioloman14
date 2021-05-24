function login(event){
    event.preventDefault();
    const username =  document.querySelector("#username-signin");
    const password = document.querySelector("#password-signin");

    if(username && password){
        fetch('/api/dashboard',{
            method: 'post',
            body: JSON.stringify({username, password}),
            headers:{'content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data=>console.log('Success:',data))
    }
}

document.querySelector('.sign-in').addEventListener('submit', login)