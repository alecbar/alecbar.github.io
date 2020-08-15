const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")

// Email validation
// When user exists field
emailInput.addEventListener("blur", () => {
    
    //Reset error class and error message
    emailInput.className = ""
    emailError.innerHTML = ""

    // If email is valid
    if (emailInput.validity.valid){
        emailInput.className = "input-success"
    }else {
        if(emailInput.value.length > 3){
            emailInput.className = "input-error"
            emailError.innerHTML = "Please enter a valid email."
        }
    }
})

// Form and message validation
const messageInput = document.getElementById("message")
const messageError = document.getElementById("message-error")
messageInput.addEventListener("blur", ()=> {
    messageInput.className = ""
    messageError.innerHTML = ""

    // If message is empty
    if(messageInput.value.trim() == ""){
        messageInput.className = "input-error"
        messageError.innerHTML = "Please enter a message."
    }
    else{
        messageInput.className = "input-success"
    }
})



const submitForm = () => {
    // Get values
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    {[email, message] = stripData(email, message)}

    // Validate form 


    // Fetch config
    const url = "https://prod-23.eastus.logic.azure.com:443/workflows/f6edcfe87b164b248a12dcb7fdd58e02/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=w8BaMhGYnl14Yw8uF4n8vRhHZXNsiXLe2qxcQKVbnPk"
    const data = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({"email": email, "message": message})
    }
    // POST data
    //fetch(url, data)

    // Check for successful response

    hideForm()
}

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

const validateData = (email, message) => {
    // Should return true or false for validate data


    // Check for empty message 


}