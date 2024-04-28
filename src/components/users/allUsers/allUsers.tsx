import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import currentCompany from "./../../../assets/images/student.png";
import { CompanyContext } from "../../../context/companyContext";
import User from "../user/user";
import "./allUsers.css";
import axios from "axios";

function AllUsers() {
  let navigate = useNavigate();
  const [interns, setInterns] = useState<String[]>([]);
  const { company, setCompany } = useContext(CompanyContext);
  const idIntenship = "66257f1394009d339b26121b";
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/v1/internships/${idIntenship}/participants`,
      )
      .then((response) => {
        setInterns(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate(`/companies/${id}/participants`);
  }, [interns]);

  // console.log(interns);
  return (
    <div className="user-profiles">
      <div className="container">
        <div className="user-profiles__info">
          <div>
            <img src={currentCompany} alt="Логотип компании"></img>
          </div>
          <div>
            <div className="user-profiles__company">
              <h2 className="user-profiles__company__title">{company?.name}</h2>
              <h3 className="user-profiles__company__internship">
                Frontend-разработчик
              </h3>
            </div>
            <div className="user-profiles__all">
              {interns.map((item) => {
                return <User user={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
