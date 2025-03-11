fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "New Post",
        body: "This is the content of the new post.",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
