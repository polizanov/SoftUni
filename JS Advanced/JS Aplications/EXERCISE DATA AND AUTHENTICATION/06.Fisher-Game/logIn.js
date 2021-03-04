function logInPageFuncionality() {
    clearFields();
    
    document.querySelector("form[action='/register']")
        .addEventListener("submit", (e) => {
            e.preventDefault();
            let form = e.target
            let email = form.querySelector("input[name='email']").value;
            let pass = form.querySelector("input[name='password']").value;
            let rePass = form.querySelector("input[name='rePass']").value;

            if (email == "" || pass == "") {
                alert('E-mail and password cannot be empty string');
                return;
            }

            if (pass !== rePass) {
                alert('Passwords must be identical');
                return;
            }

            sentRegisterRequest(email, pass);
        })

        document.querySelector("form[action='/login']")
        .addEventListener("submit", (e) => {
            e.preventDefault();
            let form = e.target
            let email = form.querySelector("input[name='email']").value;
            let pass = form.querySelector("input[name='password']").value;

            if (email == "" || pass == "") {
                alert('E-mail and password cannot be empty string');
                return;
            }

            sentLogInRequest(email, pass);
        })




    async function sentRegisterRequest(email, password) {
        let request = await fetch('http://localhost:3030/users/register', {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, password }),
        })

        if (request.ok) {
            let data = await request.json();
            sessionStorage.setItem('token', `${data.accessToken}`);
            window.location.pathname = 'index.html';
        } else {
            alert('Registration failed');
            return;
        }
       
    }

    async function sentLogInRequest(email, password){
        let request = await fetch('http://localhost:3030/users/login',{
            method: 'post',
            headers: {"Content-type": "applicatioin/json"},
            body: JSON.stringify({email, password}),
        })

        if(request.ok){
            let data = await request.json();
            sessionStorage.setItem('token', `${data.accessToken}`);
            window.location.pathname = 'index.html';
        } else {
            alert('LogIn failed');
            return;
        }
    }

    function clearFields(){
        [...document.querySelectorAll("input[name='email']")].forEach(x => x.value = "");
        [...document.querySelectorAll("input[name='password']")].forEach(x => x.value = "");
        [...document.querySelectorAll("input[name='rePass']")].forEach(x => x.value = "");
    }
}

logInPageFuncionality();

