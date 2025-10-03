import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, useNavigation,  } from "react-router";
import Root from "./components/Root/Root";
import "./index.css";
import Home from "./components/Home/Home";
import Mobiles from "./components/Mobiles/Mobiles";
import Laptops from "./components/Laptops/Laptops";
import Something from "./components/Something/Something";
import Users from "./components/Users/Users";
import Users2 from "./components/Users2/Users2";
import { Triangle } from "react-loader-spinner";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";
import NotFound from "./components/NotFound/NontFound";


const users2Promise = fetch(
  "https://fake-json-api.mock.beeceptor.com/users"
).then((res) => res.json());


const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      { path: "something", Component: Something },

      {
        path: "users2",
        element: (
          <Suspense fallback={<Triangle></Triangle>}>
            <Users2 users2Promise={users2Promise}></Users2>
          </Suspense>
        ),
      },

      {
        path: "users/:id",
        loader: ({ params }) =>
          fetch(
            `https://json-placeholder.mock.beeceptor.com/users/${params.id}`
          ),
        Component: UserDetails,
      },

      {
        path: "users",
        loader: () => fetch("https://fake-json-api.mock.beeceptor.com/users"),
        Component: Users,
      },

      {
        path: "users/userdetails/:Id",
        loader: ({ params }) =>
          fetch(`https://fake-json-api.mock.beeceptor.com/users/${params.Id}`),
        Component: UserDetails,
      },

      {
        path: "/posts", 
        element: <Suspense fallback={ <Triangle></Triangle> }>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>
      },


      {
        path: "/post/:id", 
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        Component: PostDetail
      },
      
          {
            path: "*", Component: NotFound
          }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
