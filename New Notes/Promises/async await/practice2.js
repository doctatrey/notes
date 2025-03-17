// Implement a solution that:
// 1. Fetches data for all users in parallel 
// 2. For each user, calculate their "activity score" based on:
//    - Number of posts (GET /users/{userId}/posts)
//    - Number of todos (GET /users/{userId}/todos)
// 3. Return an array of objects with username and activity score, sorted by score descending

async function processMultipleUsers(userIds) {

    try {
        const promises = userIds.map(async id => {
            const results = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            return await results.json();
        })
        const users = await Promise.all(promises);

        let activityScores = [];

        for (const user of users) {
            const [posts, todos] = await Promise.all([
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then(res => res.json()),
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`).then(res => res.json())
            ])

            const activityScore = posts.length + todos.length;

            activityScores.push({
                username: user.username,
                'activityScore': activityScore
            })
        }

        return activityScores;
    } catch(err) {
        console.log(err)
    }
}

console.log(processMultipleUsers([1, 2, 3, 4, 5]))