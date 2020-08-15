const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")

// Validate email when leaving field
emailInput.addEventListener("blur", () => {
    
    //Reset error class and error message
    emailInput.className = ""
    emailError.innerHTML = ""

    // If email is valid
    if (emailInput.validity.valid){
        emailInput.className = "input-success"
    }else {
        emailInput.className = "input-error"
        emailError.innerHTML = "Please enter a valid email."
    }
})

// If email is given error class, check if correct onchange
emailInput.addEventListener("input", ()=> {
    if (emailInput.className == "input-error" && emailInput.validity.valid){
        emailInput.className = "input-success"
        emailError.innerHTML = ""
    }
})

// Validate message when leaving field
const messageInput = document.getElementById("message")
const messageError = document.getElementById("message-error")
messageInput.addEventListener("blur", ()=> {
    messageInput.className = ""
    messageError.innerHTML = ""

    // If message is empty or too short
    if(messageInput.value.trim() == ""){
        messageInput.className = "input-error"
        messageError.innerHTML = "Please enter a message."
    }
    else{
        messageInput.className = "input-success"
    }
})

// If existing error, check for correction on input change
messageInput.addEventListener("input", ()=> {
    if (messageInput.className == "input-error" && messageInput.value.trim() != ""){
        messageInput.className = "input-success"
        messageError.innerHTML = ""
    }
})



const submitForm = () => {
    // First check for input errors
    if(emailInput.className == "input-error" || messageInput.className == "input-error"){
        console.log("Invalid form submission.")
        return false
    }
    // Might be better ways to check and enforce this 
    console.log("Valid form submission.")

    // Get values
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    // CLean data
    {[email, message] = stripData(email, message)}

    // Fetch config
    const url = "https://prod-23.eastus.logic.azure.com:443/workflows/f6edcfe87b164b248a12dcb7fdd58e02/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=w8BaMhGYnl14Yw8uF4n8vRhHZXNsiXLe2qxcQKVbnPk"
    const data = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({"email": email, "message": message})
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