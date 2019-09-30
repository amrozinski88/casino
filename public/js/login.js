$("#loginSubmitBtn").on("click", (event) => {
    event.preventDefault();
    const loginUser = $("#loginUsernameInput").val().trim();
    const loginPassord = $("#loginPasswordInput").val().trim();
    if (loginUser === "" || loginPassord === "") {
        alert("Please enter a valid username and password")
    }
    else {
        fetch("http://localhost:3000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginUser,
                password: loginPassord
            })
        }).then((result) => {
            console.log("login succesful")
        }).catch(error => {
            console.log(error)
        });
    };
})


// create account submit
$("#signupSubmitBtn").on("click", (event) => {
    event.preventDefault();
    const firstName = $("#signupFirstNameInput").val().trim();
    const lastName = $("#signupLastNameInput").val().trim();
    const name = `${firstName} ${lastName}`
    const username = $("#signupUsernameInput").val().trim();
    const password = $("#signupPasswordInput").val().trim();
    const confirmedPassword = $("#signupPasswordConfirmInput").val().trim();
    console.log(firstName, lastName, name, username, password, confirmedPassword)
    if (password !== confirmedPassword) {
        alert(`Passwords do not match`)
    }
    else {
        fetch("http://localhost:3000/api/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                password
            })

        }).then(response => {
            console.log(response)
        }).catch(error=>{
            console.log(error.body.error)
        })
    }
});