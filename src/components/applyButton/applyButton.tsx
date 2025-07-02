import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { internshipService } from "../../services/internship";
import { UserContext } from "../../context/userContext";
import { IInternship } from "../filter/filter/filter";
import { toast } from "react-toastify";
import cn from "classnames";
import s from "./applyButton.module.scss";

export const ApplyButton = ({ id }: { id: string }) => {
  const { user } = useContext(UserContext);
  const [isApplied, setIsApplied] = useState(false);
  const [internship, setInternship] = useState<IInternship>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadInternship(id: string) {
      const response = await internshipService.getInternship(id);
      setInternship(response.data);
    }
    loadInternship(id);
  }, [id]);

  const applyForInternship = async (internshipId: string) => {
    try {
      if (user?.role !== "intern") {
        toast.info("Авторизуйтесь в приложении как интерн");
        return;
      }
      if (user?.id) {
        await internshipService.applyForInternship(internshipId, user?.id);
      }
      setIsApplied(true);
    } catch (error) {
      toast.error("Упс, что-то пошло не так...");
    }
  };

  const isParticipant =
    Boolean(user && (internship?.participants || []).includes(user.id)) ||
    isApplied;

  return (
    <button
      className={cn(isParticipant && s.buttonApplied, s.buttonRespond)}
      onClick={(event) => {
        event.stopPropagation();
        if (isParticipant) {
          toast.info("Заявка уже подана");
          return;
        }
        if (!user) {
          navigate("/login");
        }
        applyForInternship(id);
      }}
    >
      {isParticipant ? "Заявка подана" : "Откликнуться"}
    </button>
  );
};
