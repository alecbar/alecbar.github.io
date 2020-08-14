const submitForm = (event) => {
    console.log("Form received.")

    // Get values
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    console.log(message)

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
    fetch(url, data)

    hideForm()


}

const hideForm = () => {
    const form = document.getElementById("form")
    const success = document.getElementById("success-form")
    console.log("Hide form")

    form.style.display = "none"
    success.style.display = "block"

}