

export default async function getAllPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    {
        next: { revalidate: 10 } // This will cache the response for 10 seconds
    }
    if (!result.ok) {
        throw new Error('Failed to fetch posts');
    }
                     

    return  result.json();//we eturn here the promise



  
}
