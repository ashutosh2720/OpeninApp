import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Upload from "./pages/upload/Upload";
import RequireAuth from "./components/requiredAuth/RequiredAuth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/upload"
          element={
            <RequireAuth>
              <Upload />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
