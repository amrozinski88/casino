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
        alert(`Passwords must match`)
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

        }).then(response=>{
            console.log(response)
        })
    }
});