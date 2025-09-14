// A real-world implementation example using TypeScript to fetch and display data from a public API.

interface Post {
    userId : number;
    id : number;
    title : string;
    body : string;
}

async function getPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data as Post[];
}

getPosts().then(posts => {
    posts.forEach(post => {
        console.log(post.title);
    });
}).catch(error => {
    console.error('Error fetching posts:', error);
});