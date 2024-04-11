import React from "react";
import { useState } from "react";
import "./app.css";
import Header from "../headers/header/header";
import HeaderIntern from "../headers/headerIntern/headerIntern";
import HeaderCompany from "../headers/headerCompany/headerCompany";
import Main from "../main/main";
import Instructions from "../instructions/instructions";
import Footer from "../footers/footer/footer";
import FooterCompany from "../footers/footerCompany/footerCompany";
import FooterIntern from "../footers/footerIntern/footerIntern";
import Card from "../internships/card/card";
import Registration from "../registration/register/registration";
import RegistrationIntern from "../registration/registrationIntern/registrationIntern";
import RegistrationCompany from "../registration/registrationCompany/registrationCompany";
import AllUsers from "../users/allUsers/allUsers";
import ProfileCompany from "../profile/profileCompany/profileCompany";
import FullCard from "../internships/fullCard/fullCard";
import Filter from "../filter/filter/filter";
import Popular from "../popular/popular";
import ProfileStudent from "../profile/profileIntern/profileIntern";
import Internship from "../internships/internship/internship";
import Resume from "../resume/resume";
import Authorization from "../authorization/authorization";
import { Routes, Route, useLocation } from "react-router-dom";
import AddInternship from "../internships/addInternship/addInternship";
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
        <Route path="/internships/:id" element={<Internship />} />
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

        <Route path="/profileIntern/:id" element={<ProfileStudent />} />
        <Route path="/profileIntern" element={<ProfileStudent />} />
        <Route path="/profileCompany" element={<ProfileCompany />} />
        <Route path="/profileIntern/resume" element={<Resume />} />
      </Routes>
      {renderFooter()}
    </div>
  );
}

export default App;
