import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./Pages/Global/Sidebar";
import Topbar from "./Pages/Global/Topbar";
import Dashboard from "./Pages/Dashboard";
import Contacts from "./Pages/Contacts";
import Invoices from "./Pages/Invoices";
import ProtectedRoute from "./auth/protectedRoute";
import Unauthorized from "./Pages/unauthorisedPage";
import LoginPage from "./Pages/loginPage";
import { AuthProvider } from "./auth/authContext";
import NotFoundPage from "./Pages/Pagenotfound";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <AuthProvider>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route
                path="/contacts"
                element={<ProtectedRoute   element={<Contacts />} requiredPermission="contacts" />}
              />
              <Route
                path="/invoices"
                element={<ProtectedRoute element={<Invoices />} requiredPermission="invoices" />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </AuthProvider>
  );
}

export default App;