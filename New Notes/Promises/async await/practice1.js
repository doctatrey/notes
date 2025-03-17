// Sample APIs: 
// - https://jsonplaceholder.typicode.com/users/1
// - https://jsonplaceholder.typicode.com/users/{userId}/posts
// - https://jsonplaceholder.typicode.com/posts/{postId}/comments

async function chainedRequests() {
    try {
        const user = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json();
        const userId = user.id;

        const userPosts = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)).json();
        const firstPostId = userPosts[0].id;

        const firstPostComments = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${firstPostId}/comments`)).json();

        console.log('User:', user);
        console.log('User Posts:', userPosts);
        console.log('Comments on Users First Post:', firstPostComments);
    } catch(err) {
        console.log("ERROR", err)
    }
}

chainedRequests()