fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) //Convert response to JSON
    .then(data => console.log(data)) //Log the data
    .catch(error => console.error('Error:', error))
