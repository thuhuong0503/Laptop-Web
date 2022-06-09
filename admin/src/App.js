import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { productInputs, userInputs } from "./formSource";
import { Home } from "./pages/home/Home";
import { List } from "./pages/list/List";
import Login from "./pages/login/Login"
import { New } from "./pages/new/New";
import { Single } from "./pages/single/Single";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import "./style/dark.scss";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/admin/login" />;
    }

    return children;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" >
            <Route path="login" element={<Login />} />
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="users">
              <Route index element={
                <ProtectedRoute>
                  <List columns={userColumns} />
                </ProtectedRoute>
              } />
              <Route path=":userId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path="new" element={
                <ProtectedRoute>
                  <New inputs={userInputs} title="Add New User" />
                </ProtectedRoute>
              } />
            </Route>
            <Route path="products">
              <Route index element={
                <ProtectedRoute>
                  <List />
                </ProtectedRoute>
              } />
              <Route path=":productId" element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path="new" element={
                <ProtectedRoute>
                  <New inputs={productInputs} title="Add New Product" />
                </ProtectedRoute>
              } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
