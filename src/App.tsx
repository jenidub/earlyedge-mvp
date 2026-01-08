import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginPage from "./components/AuthLayer/LoginPage.tsx";
import CallbackPage from "./components/AuthLayer/CallbackPage.tsx";
import PostDashboard from "./components/Dashboard/PostDashboard.tsx";
import ProfilePage from "./components/PageViews/ProfilePage.tsx";
import AuthenticationGuard from "./components/AuthLayer/AuthenticationGuard.tsx";
import UpdateListContext from "./components/Context/UpdateContext.tsx";

function App() {
    const { isLoading } = useAuth0();

    const [ updateList, setUpdateList ] = useState(() => {
        const savedUpdates = localStorage.getItem('updateList');
        // console.log(savedUpdates);
        if (savedUpdates && savedUpdates !== "undefined" && savedUpdates !== "null") {
            return JSON.parse(savedUpdates)
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('updateList', JSON.stringify(updateList));
    }, [updateList]);

    if (isLoading) return (<div>Loading...</div>)

    return (
        <UpdateListContext.Provider value={{ updateList, setUpdateList }}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<AuthenticationGuard component={PostDashboard} />} />
                <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />} />
                <Route path="/callback" element={<CallbackPage />} />
            </Routes>
        </UpdateListContext.Provider>
    )
}

export default App;
