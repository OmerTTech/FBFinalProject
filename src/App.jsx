import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css";
import "./css/responsive.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PublicRoutes from "./routes/PublicRoutes";
import LoginPage from "./components/Auth/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes/>
      <Toaster position="top-center"
        reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
