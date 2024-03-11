import React from "react";
import "./App.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Instructions from "../instrucntions/Instructions";
import Footer from "../footer/Footer";
import Card from "../card/card";
import Registration from "../registration/Registration";
import RegistrationIntern from "../registrationIntern/RegistrationIntern";
import RegistrationCompany from "../registrationCompany/RegistrationCompany";
import AllUsers from "../allUsers/AllUsers";
import ProfileCompany from "../profileCompany/ProfileCompany";
import FullCard from "../fullCard/FullCard";
import Filter from "../filter/Filter";
import NewCard from "../newCard/NewCard";
import Popular from "../popular/Popular";
import Button from "../button/Button";
import ProfileStudent from "../profileStudent/ProfileStudent";
import Internship from "../internship/Internship";
import Resume from "../resume/Resume";
import Authorization from "../authorization/Authorization";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Instructions />
              <Popular />
              <Button />
            </>
          }
        />
        <Route path="internships" element={<Filter />} />
        <Route path="addInternship" element={<Resume />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Authorization />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
{
  /* <Filter></Filter> */
}
{
  /* <Registration></Registration>
      <RegistrationCompany></RegistrationCompany>
      <RegistrationIntern></RegistrationIntern>
      <Authorization></Authorization>
      <Internship></Internship>
      <ProfileStudent></ProfileStudent>
      <ProfileCompany></ProfileCompany>
      <AllUsers></AllUsers> */
}
