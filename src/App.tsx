import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginPage from "./components/AuthLayer/LoginPage.tsx";
import CallbackPage from "./components/AuthLayer/CallbackPage.tsx";
import PostDashboard from "./components/Dashboard/PostDashboard.tsx";
import ProfilePage from "./components/PageViews/ProfilePage.tsx";
import AuthenticationGuard from "./components/AuthLayer/AuthenticationGuard.tsx";
import PostListContext from "./components/Context/PostListContext.tsx";

function App() {
    const { isLoading } = useAuth0();
    const { postList, setPostList } = useContext(PostListContext); //for demo MVP

    // NEW FEATURE for MVP v2: LocalStorage for Posts to last across browser sessions
    // const [ postListLocal, setPostListLocal ] = useState(() => {
    //     const savedPosts = localStorage.getItem('postList');
    //     if (savedPosts && savedPosts !== "undefined" && savedPosts !== "null") {
    //         return JSON.parse(savedPosts)
    //     }
    //     return [];
    // });

    useEffect(() => {
        localStorage.setItem('postList', JSON.stringify(postList));
    }, [postList]);

    if (isLoading) return (<div>Loading...</div>)

    return (
        <PostListContext.Provider value={{ postList, setPostList }}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<AuthenticationGuard component={PostDashboard} />} />
                <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
                <Route path="/callback" element={<CallbackPage />} />
            </Routes>
        </PostListContext.Provider>
    )
}

export default App;
