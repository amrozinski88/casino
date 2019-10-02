$("#loginSubmitBtn").on("click", (event) => {
    event.preventDefault();
    const loginUser = $("#loginUsernameInput").val().trim();
    const loginPassword = $("#loginPasswordInput").val().trim();
    if (loginUser === "" || loginPassword === "") {
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
                password: loginPassword
            })
        }).then(response => response.json())
            .then(data => {
                // setting my values to storage
                sessionStorage.clear();
                sessionStorage.setItem("name", data.name);
                sessionStorage.setItem("coins", data.coins);
                sessionStorage.setItem("username", data.username);
                // making redirect open in same tab
                document.location.replace("/index");
            }

            )

            .catch(error => {
                console.log(error.body.error)
            })
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

        }).then(response => response.json())
            .then(data => {
                // setting my values to storage
                sessionStorage.clear();
                sessionStorage.setItem("name", data.name);
                sessionStorage.setItem("coins", data.coins);
                sessionStorage.setItem("username", data.username);
                // making redirect open in same tab
                window.open("/index", "_self");

            }

            )

            .catch(error => {
                console.log(error.body.error)
            })
    }
});