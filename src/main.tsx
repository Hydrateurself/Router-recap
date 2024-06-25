import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  LoaderFunction,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layouts/root";
import { Home } from "./routes/home";
import { Blog } from "./layouts/blog";
import { Post as PostType } from "./utils/types";
import { Post } from "./routes/post";

// this function fetches our blog post data from the json site. it creates an array of this data. its the whole blog
export async function blogLoader( ) {
  const response = await fetch("https://jsonplaceholder.org/posts");
  const postsResult: PostType[] = await response.json();
// returns object with key posts, and on posts we have objects from API
  return {
    posts: postsResult
  };
}

// this is a constant which perfoms a function after async which waits for id's of blog posts
// params.id? how does it know what params is? -> from route definition

const postLoader: LoaderFunction = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.org/posts/${params.id}`
  );
  const post: PostType = await response.json();
  // it has to return something. in this case an object. If not ERROR !
  return {
    post,
  };
};
// defines how to map from url to react component
// it always returns an array of objects
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: blogLoader,
        children: [
          {
            index: true,
            element: <p className="flex-1">Please select a Post</p>,
          },
          {
            path: ":id", // path id? -> ":id" -> becomes params.id
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
