const emailInput = document.getElementById("email")

emailInput.addEventListener("input", (event) => {

    if (emailInput.validity.valid){
        emailInput.className = ""
        emailInput.className = "input-success"
    }else {
        if(emailInput.value.length > 3){
            emailInput.className = ""
            emailInput.className = "input-error"
        }
    }
})



const submitForm = (event) => {
    // Get values
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

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
    // POST data
    //fetch(url, data)

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