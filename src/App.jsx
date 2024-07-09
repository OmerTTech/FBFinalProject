import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css";
import "./css/responsive.css";
import Article_td from "./components/Article_td/Article_td";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PublicRoutes from "./routes/PublicRoutes";

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
