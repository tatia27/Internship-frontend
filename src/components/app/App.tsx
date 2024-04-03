import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../headers/header/Header";
import HeaderIntern from "../headers/headerIntern/HeaderIntern";
import HeaderCompany from "../headers/headerCompany/HeaderCompany";
import Main from "../main/Main";
import Instructions from "../instructions/Instructions";
import Footer from "../footers/footer/Footer";
import FooterCompany from "../footers/footerCompany/FooterCompany";
import FooterIntern from "../footers/footerIntern/FooterIntern";
import Card from "../internships/card/card";
import Registration from "../registration/register/Registration";
import RegistrationIntern from "../registration/registrationIntern/RegistrationIntern";
import RegistrationCompany from "../registration/registrationCompany/RegistrationCompany";
import AllUsers from "../users/allUsers/AllUsers";
import ProfileCompany from "../profile/profileCompany/ProfileCompany";
import FullCard from "../internships/fullCard/FullCard";
import Filter from "../filter/Filter";
import Popular from "../popular/Popular";
import ProfileStudent from "../profile/profileStudent/ProfileStudent";
import Internship from "../internships/internship/Internship";
import Resume from "../resume/Resume";
import Authorization from "../authorization/Authorization";
import { Routes, Route, useLocation } from "react-router-dom";
import AddInternship from "../internships/addInternship/AddInternship";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { UserConternProvider } from "../../context/userContext";

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
      {/* <UserConternProvider> */}
      {renderHeader()}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Instructions />
              <Popular />
            </>
          }
        />
        <Route path="/internships" element={<Filter />} />
        <Route path="/addInternship" element={<AddInternship />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/registration/registationIntern"
          element={<RegistrationIntern />}
        />
        <Route
          path="/registration/registationCompany"
          element={<RegistrationCompany />}
        />
        <Route path="/login" element={<Authorization />} />
        <Route
          path="/registration/registartionCompamy"
          element={<Authorization />}
        />
        <Route
          path="/registration/registartionIntern"
          element={<Authorization />}
        />
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship/:id" element={<Internship />} />
        <Route path="/profileIntern" element={<ProfileStudent />} />
        <Route path="/profileCompany" element={<ProfileCompany />} />
        <Route path="/profileIntern/resume" element={<Resume />} />
      </Routes>
      {renderFooter()}
    </div>
  );
}

export default App;
