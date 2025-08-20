import getAllPosts from "../lib/getAllPosts";


export default async function Postpage() {

    const posts = await getAllPosts();
    console.log(posts);
  return (
    <div>
    <div>All My Post Here</div>
    <ul>
        {
            posts.map((post)=><li key ={post.id}>{post.title}</li>)
        }
        </ul>
        </div>
  )
}
