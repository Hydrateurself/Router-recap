import { Outlet, useLoaderData } from "react-router-dom"
import { blogLoader } from "../main"
import { Sidebar } from "../components/sidebar"

// define type for loader data which contains only the posts
// awaited removes the promise from async and return type defines the type of the blogLoader function in main
//ReturnType gives whatever function returns
// Awiat removes Promis from type -> gives inside of promise
type LoaderData = Awaited<ReturnType< typeof blogLoader > >

export function Blog() {
    const loaderResult: LoaderData = useLoaderData()
    const {posts} = loaderResult
    // const {posts}: LoaderData = useLoaderData() -> Oneliner

    // useLoader gives everything what loader returns
    return (
        <div className="flex">
            <Sidebar posts={posts} />
            <Outlet/>
        </div>
        
    
    )
}