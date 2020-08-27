const emailInput = document.getElementById("email")

// Validate email when leaving field
emailInput.addEventListener("blur", () => {
    validateEmail(emailInput)
})

// If email is given error class, check if correct onchange
emailInput.addEventListener("input", () => {
    if (emailInput.className == "input-error") {
        validateEmail(emailInput)
    }
})

// Validate message when leaving field
const messageInput = document.getElementById("message")
messageInput.addEventListener("blur", () => {
    validateMessage(messageInput)
})

// If existing error, check for correction on input change
messageInput.addEventListener("input", () => {
    if (messageInput.className == "input-error") {
        validateMessage(messageInput)
    }
})

const validateEmail = (emailInput) => {
    // Checks that email field is valid and adds classes accordingly 
    const emailError = document.getElementById("email-error")

    // Clear previous 
    emailInput.className = ""
    emailError.innerHTML = ""

    if (email.validity.valid) {
        // Input is valid
        emailInput.className = "input-success"
    }
    else {
        emailInput.className = "input-error"
        emailError.innerHTML = "Please enter a message."
    }
}

const validateMessage = (messageInput) => {
    const messageError = document.getElementById("message-error")

    //Clear previous 
    messageInput.className = ""
    messageError.innerHTML = ""

    //Validate
    if (messageInput.value.trim() == "") {
        messageInput.className = "input-error"
        messageError.innerHTML = "Please enter a message."
    }
    else {
        messageInput.className = "input-success"
    }
}

const submitForm = (emailInput, messageInput) => {

    validateEmail(emailInput)
    validateMessage(messageInput)

    // Then check for input errors from interacting with fields
    if (emailInput.className == "input-error" || messageInput.className == "input-error") {
        console.log("Invalid form submission.")
        return false
    }
    // Might be better ways to check and enforce this 
    console.log("Valid form submission.")

    // Get values
    let email = emailInput.value
    let message = messageInput.value

    // CLean data
    { [email, message] = stripData(email, message) }

    // Fetch config
    const url = "https://prod-23.eastus.logic.azure.com:443/workflows/f6edcfe87b164b248a12dcb7fdd58e02/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=w8BaMhGYnl14Yw8uF4n8vRhHZXNsiXLe2qxcQKVbnPk"
    const data = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ "email": email, "message": message })
    }
    // POST form data data
    fetch(url, data)

    // TODO: Check for successful response

    hideForm()
}

// Hide form and show success message
const hideForm = () => {
    const form = document.getElementById("form")
    const success = document.getElementById("success-form")

    form.style.display = "none"
    success.style.display = "block"
}

const stripData = (email, message) => {
    // Trim white space
    email = email.trim()
    message = message.trim()
    return [email, message]
}