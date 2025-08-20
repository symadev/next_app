
export default async function getPosts(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);


    
    if (!result.ok) {
        throw new Error('Failed to fetch post');
    }
    //as we want to get here the specific post, we use the id in the url
                     

    return  result.json();//we return here the promise



  
}
