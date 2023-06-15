import HomePage from "./page/homePage";
import { Route, Routes } from "react-router-dom";
import Main from "./page/main";
import Login from "./page/user/login";
import ChangePassword from "./page/user/change-password";
import HomeOwner from "./page/owner/homeOwner";

import Register from "./page/user/register";
import EditProfile from "./page/editProfile";
import { useSelector } from "react-redux";
import ProfileModal from "./page/user/info";
function App() {

  let user = useSelector(({ user }) => {
    console.log(user);
    return user.currentUser
  })

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {user ? (
        <>
          <Route path="owner" element={<HomeOwner />} />
          <Route path="" element={<HomePage />}>
              <Route path="home" element={<Main />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>

        </>
      ) : (
        <Route path="*" element={<Login />} />
      )}
    </Routes>
  );

}

export default App;
