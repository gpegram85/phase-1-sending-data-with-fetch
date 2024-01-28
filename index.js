// Add your code here
function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    })
    .then(resp => resp.json())
    .then(data => {
        const newID = data.id
        const newElement = document.createElement('p')
        newElement.textContent = `${newID}`
        document.body.appendChild(newElement)
    })
    .catch(error => {
        const errElement = document.createElement('p')
        errElement.textContent = `${error.message}`
        document.body.appendChild(errElement)
    })
}