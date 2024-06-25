import { useLoaderData } from "react-router-dom"
import { Post as PostType } from "../utils/types"

// this is a function called post, which gets certain pieces of a blog post 


// useLoaderData is a hook from the react-router-dom library that allows you to access the data loaded by a route's loader function. 
//This hook simplifies the process of fetching and utilizing data in your components that is necessary for rendering the route.
// Post is a React Component
export function Post() {
   
    const {post} = useLoaderData() as {post: PostType} //
    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{ post.content}</p>
        </div>
    )
}