import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NavProvider } from "./contexts/NavContext.js";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { CoursesProvider } from "./contexts/CoursesContexs.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <NavProvider>
        <CoursesProvider>
          <App />
        </CoursesProvider>
      </NavProvider>
    </ThemeProvider>
  </AuthProvider>
);
