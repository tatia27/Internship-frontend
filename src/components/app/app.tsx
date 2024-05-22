import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Header from "../headers/header/header";
import HeaderIntern from "../headers/headerIntern/headerIntern";
import HeaderCompany from "../headers/headerCompany/headerCompany";
import Main from "../main/main";
import Instructions from "../instructions/instructions";
import Footer from "../footers/footer/footer";
import FooterCompany from "../footers/footerCompany/footerCompany";
import FooterIntern from "../footers/footerIntern/footerIntern";
import Registration from "../registration/register/registration";
import RegistrationIntern from "../registration/registrationIntern/registrationIntern";
import RegistrationCompany from "../registration/registrationCompany/registrationCompany";
import ProfileCompany from "../profile/profileCompany/profileCompany";
import Filter from "../filter/filter/filter";
import Popular from "../popular/popular";
import ProfileIntern from "../profile/profileIntern/profileIntern";
import Internship from "../internships/internship/internship";
import Resume from "../resume/resume";
import Authorization from "../authorization/authorization";
import AddInternship from "../internships/addInternship/addInternship";
import CompanyInfo from "../profile/companyInfo/companyInfo";
import Error from "../error/error";
import ProfileInternForCompany from "../profile/profileInternForCompany/profileInternForComapny";
import AllUsers from "../users/allUsers/allUsers";
import { CompanyContextProvider } from "../../context/companyContext";
import { FavoritesContextProvider } from "../../context/favoritesContext";
import { UserContext } from "../../context/userContext";
import { type User } from "../../context/userContext";
import "react-toastify/dist/ReactToastify.css";
import Applications from "../applications/applications";
import { authService } from "../../services/auth";
import "./app.css";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await authService.getAuth();

        if (setUser && response && response.data) {
          const { role, id } = response.data;

          const userData: User = {
            role,
            id,
          };

          setUser(userData);
        }
      }
    }
    load();
  }, [setUser]);

  const renderHeader = () => {
    if (user?.role === "intern") {
      return <HeaderIntern />;
    } else if (user?.role === "company") {
      return <HeaderCompany />;
    } else {
      return <Header />;
    }
  };

  const renderFooter = () => {
    if (user?.role === "intern") {
      return <FooterIntern />;
    } else if (user?.role === "company") {
      return <FooterCompany />;
    } else {
      return <Footer />;
    }
  };

  return (
    <div className="App">
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
              {user?.role !== "company" ? (
                <>
                  <Instructions /> <Popular />
                </>
              ) : (
                <></>
              )}
            </>
          }
        />
        <Route path="/internships" element={<Filter />} />
        <Route path="/internships/:id" element={<Internship />} />
        <Route path="/addInternship" element={<AddInternship />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/registration/registation-intern"
          element={<RegistrationIntern />}
        />
        <Route
          path="/registration/registation-company"
          element={<RegistrationCompany />}
        />
        <Route path="/login" element={<Authorization />} />
        <Route
          path="/registration/registartion-compamy"
          element={<Authorization />}
        />
        <Route
          path="/registration/registartion-intern"
          element={<Authorization />}
        />
        <Route
          path="/intern/profile"
          element={
            <FavoritesContextProvider>
              <ProfileIntern />
            </FavoritesContextProvider>
          }
        />
        <Route path="/intern/profile/resume" element={<Resume />} />
        <Route
          path="/intern/internships"
          element={
            // <FavoritesContextProvider>
            <Filter />
            // </FavoritesContextProvider>
          }
        />
        <Route path="/intern/my-applications" element={<Applications />} />
        <Route path="/intern/error" element={<Error />} />
        <Route
          path="/intern"
          element={
            <>
              <Main />
              <Instructions />
              <Popular />
            </>
          }
        />
        <Route
          path="/company"
          element={
            <>
              <Main />
              <Instructions />
              <Popular />
            </>
          }
        />
        <Route
          path="/company/profile"
          element={
            <CompanyContextProvider>
              <ProfileCompany />
            </CompanyContextProvider>
          }
        />
        {/* <Route
          path="/companies/internships"
          element={
            <CompanyContextProvider>
              <Filter />
            </CompanyContextProvider>
          }
        /> */}
        <Route path="/company/internships" element={<Filter />} />
        <Route
          path="/company/add-internship"
          element={
            <CompanyContextProvider>
              <AddInternship />
            </CompanyContextProvider>
          }
        />
        <Route
          path="/company/company-info"
          element={
            <CompanyContextProvider>
              <CompanyInfo />
            </CompanyContextProvider>
          }
        />
        <Route
          path="/company/profile/participants"
          element={
            <CompanyContextProvider>
              <AllUsers />
            </CompanyContextProvider>
          }
        />
        <Route
          path="/company/profile/participants/:id"
          element={
            <CompanyContextProvider>
              <ProfileInternForCompany />
            </CompanyContextProvider>
          }
        />
        {/* <Route
          path="/company/profile/participants"
          element={
            <CompanyContextProvider>
              <AllUsers />
            </CompanyContextProvider>
          }
        /> */}
        <Route
          path="/companies/error"
          element={
            <CompanyContextProvider>
              <Error />
            </CompanyContextProvider>
          }
        />
      </Routes>
      {renderFooter()}
    </div>
  );
}

export default App;
