import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/Auth/LoginScreen";
import { RegisterScreen } from "../components/Auth/RegisterScreen";
import { JournalScreen } from "../components/journal/JournalScreen";
export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JournalScreen />} />
          <Route path="/auth/login" element={<LoginScreen />} />
          <Route path="/auth/register" element={<RegisterScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
