import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NotesView } from "../notes-view/notes-view";
import { useState } from "react";

export const MainView = () => {
    const storedUser = localStorage.getItem("user");
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {user ? <NotesView /> : <Navigate to="/login" />}
                        </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <>
                            <LoginView />
                        </>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <>
                            <SignupView />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}