import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/about" element={<AboutPage />} />

                {/* Te deja el path en la url */}
                {/* <Route path="/*" element={<HomePage />} /> */}

                {/* Te redirige */}
                <Route path="/*" element={<Navigate to={'/about'} />} />
            </Routes>
        </UserProvider>
    )
}
