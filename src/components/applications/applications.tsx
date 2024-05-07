import { useState, useEffect, useContext } from "react";
import { type IInternship } from "../filter/filter/filter";
import { UserContext } from "../../context/userContext";
import FullCard from "../internships/fullCard/fullCard";
import "./applications.css";
import axios from "axios";

function Applications() {
  const [applications, setApplications] = useState<IInternship[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/v1/internships/${user?.id}/applications`
      )
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.id]);

  return (
    <div className="container">
      <div className="intern-applications">
        <h3 className="intern-applications__title">Отправленные заявки</h3>
        <div>
          {applications.map((item) => {
            return <FullCard key={item._id.toString()} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Applications;
