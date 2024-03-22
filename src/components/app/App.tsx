import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../header/Header";
import HeaderIntern from "../headerIntern/HeaderIntern";
import HeaderCompany from "../headerCompany/HeaderCompany";
import Main from "../main/Main";
import Instructions from "../instrucntions/Instructions";
import Footer from "../footer/Footer";
import FooterCompany from "../footerCompany/FooterCompany";
import FooterIntern from "../footerIntern/FooterIntern";
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
import { Routes, Route, useLocation } from "react-router-dom";
import AddInternship from "../addInternship/AddInternship";

function App() {
  const [isStudent, setStudent] = useState(false);
  const [isCompany, setComapny] = useState(false);
  const location = useLocation();
  React.useEffect(() => {
    setComapny(location.pathname.includes("/profileCompany"));
  }, [location]);
  React.useEffect(() => {
    setStudent(location.pathname.includes("/profileIntern"));
  }, [location]);

  const renderHeader = () => {
    if (isStudent) {
      return <HeaderIntern />;
    } else if (isCompany) {
      return <HeaderCompany />;
    } else {
      return <Header />;
    }
  };

  const renderFooter = () => {
    if (isStudent) {
      return <FooterIntern />;
    } else if (isCompany) {
      return <FooterCompany />;
    } else {
      return <Footer />;
    }
  };

  return (
    <div className="App">
      {renderHeader()}

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
        <Route path="addInternship" element={<AddInternship />} />
        <Route path="registration" element={<Registration />} />
        <Route
          path="/registration/registationIntern"
          element={<RegistrationIntern />}
        />
        <Route
          path="/registration/registationCompany"
          element={<RegistrationCompany />}
        />
        <Route path="login" element={<Authorization />} />
        <Route
          path="/registration/registartionCompamy"
          element={<Authorization />}
        />
        <Route
          path="/registration/registartionIntern"
          element={<Authorization />}
        />
        <Route path="internship" element={<Internship />} />
        <Route path="/profileIntern" element={<ProfileStudent />} />
        <Route path="/profileCompany" element={<ProfileCompany />} />
        <Route path="/profileIntern/resume" element={<Resume />} />
      </Routes>
      {renderFooter()}
      {/* <Footer></Footer> */}
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
