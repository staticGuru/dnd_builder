import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginFile from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import { Navigate } from "react-router-dom";
import PublicAuth from "./PublicAuth";
import RequireAuth from "./RequireAuth";
import CreateNewTemplate from "../Components/CreateNewTemplate";
import Layout from "../Components/Layout";
import QuestionnaireEditor from "../Components/craft/QuestionnaireEditor";
import { CraftPreviewer } from "../Components/craft/craftPreviewer";
import Define from "../Components/Define";
        {/*<Route exact path="/forgotpassword" element={<ForgotPassword />} />*/}

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicAuth />}>
        <Route exact path="/login" element={<LoginFile />} />
        <Route exact path="/signup" element={<SignUp />} />
     <Route path="/" element={<Navigate replace to="/login" />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[]} />}>
  <Route element={<CreateNewTemplate />}>
          <Route exact path="/Editor" element={<QuestionnaireEditor />} />
          <Route exact path="/Preview" element={<CraftPreviewer />} />
          <Route exact path="/Define" element={<Define />} />
        </Route>
      </Route>
  </Routes>
  );
}
export default PublicRoutes;
 {/* <Route exact path="/Summary" element={<Summary />} />
              <Route exact path="/Publish" element={<Publish />} />
              <Route
                exact
                path="/MasterTemplates"
                element={<MasterTemplates />}
              />
              <Route exact path="/DisplayPages" element={<DisplayPages />} />
              <Route exact path="/Page1" element={<Page1 />} />
  <Route exact path="/Page2" element={<Page2 />} />*/}
