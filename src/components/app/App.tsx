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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Instructions></Instructions>
      <Filter></Filter>
      <Resume></Resume>
      <Footer></Footer>

      {/* <Instructions></Instructions>
      <Popular></Popular>
      // <Filter></Filter>
      <ProfileCompany></ProfileCompany> */}
      {/* <Internship></Internship>

      {/* <ProfileStudent></ProfileStudent>

      <RegistrationCompany></RegistrationCompany>
      <RegistrationIntern></RegistrationIntern>
      <Registration></Registration> */}
      {/* <Popular></Popular>
      <Card></Card> */}
      {/* <Button></Button> */}
      {/* <Card></Card> */}
      {/* <Instructions></Instructions>
      // <Card></Card>
      // <Registration></Registration>
      <RegistrationIntern></RegistrationIntern>
      <RegistrationCompany></RegistrationCompany>
      <AllUsers></AllUsers>
      <ProfileCompany></ProfileCompany> */}
      {/* <FullCard></FullCard> */}
      {/* <NewCard></NewCard> */}
      {/* <Filter></Filter> */}
      {/* <Popular></Popular> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
