import { Post } from "../utils/types"
import { Link } from "react-router-dom"

type Props = {
    posts: Post[]
}
// basically makes blog posts clickable and asigns id in url to it 
export function Sidebar({posts}: Props) {
    return (
        <div>
            <aside className="flex flex-col gap-2">
                {posts.map((post) => (
                    // Link navigates to each blog posts with assigned id
                    <Link to={`/blog/${post.id}`} key={post.id}>
                    {post.title}
                </Link>))}
            </aside>
        </div>
    )
}