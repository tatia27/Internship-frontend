import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
import { internService } from "../../services/intern";
import s from "./resume.module.scss";

export type Cv = {
  age: number;
  location: string;
  levelOfEducation: string;
  educationalInstitution: string;
  specialization: string;
  hardSkills: string;
  softSkills: string;
};

const schema = yup.object().shape({
  age: yup
    .number()
    .typeError("Возраст должен быть числом")
    .required("Возраст обязателен")
    .min(14, "Возраст должен быть не менее 14")
    .max(100, "Возраст должен быть не более 100"),
  location: yup.string().required("Местоположение обязательно"),
  levelOfEducation: yup.string().required("Уровень образования обязателен"),
  educationalInstitution: yup
    .string()
    .required("Учебное заведение обязательно"),
  specialization: yup.string().required("Специализация обязательна"),
  hardSkills: yup.string().required("Hard skills обязательны"),
  softSkills: yup.string().required("Soft skills обязательны"),
});

export const Resume = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Cv>({
    resolver: yupResolver(schema),
    defaultValues: {
      age: undefined,
      location: "",
      levelOfEducation: "Бакалавриат",
      educationalInstitution: "",
      specialization: "",
      hardSkills: "",
      softSkills: "",
    },
  });

  const onSubmit = async (data: Cv) => {
    try {
      if (user) {
        await internService.createResume(user.id, data);
        toast.success("Резюме успешно создано");
        navigate(`/intern/profile`);
      } else {
        toast.error("Пользователь не найден");
      }
    } catch {
      toast.error("Упс, резюме не добавлено...");
    }
  };

  return (
    <div>
      <div className={s.container}>
        <h1 className={s.title}>Резюме</h1>
        <form
          method="post"
          className={s.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="number"
            placeholder="Возраст"
            className={s.resumeInput}
            {...register("age")}
          />
          {errors.age && <p className={s.error}>{errors.age.message}</p>}

          <input
            type="text"
            placeholder="Местоположение"
            className={s.resumeInput}
            {...register("location")}
          />
          {errors.location && (
            <p className={s.error}>{errors.location.message}</p>
          )}

          <select
            className={s.resumeInput}
            {...register("levelOfEducation")}
            defaultValue="Бакалавриат"
          >
            <option value="Основное общее образование">
              Основное общее образование
            </option>
            <option value="Среднее общее образование">
              Среднее общее образование
            </option>
            <option value="Среднее профессиональное образование">
              Среднее профессиональное образование
            </option>
            <option value="Бакалавриат">Бакалавриат</option>
            <option value="Специалитет">Специалитет</option>
            <option value="Магистратура">Магистратура</option>
            <option value="Аспирантура">Аспирантура</option>
          </select>
          {errors.levelOfEducation && (
            <p className={s.error}>{errors.levelOfEducation.message}</p>
          )}

          <input
            type="text"
            placeholder="Учебное заведение"
            className={s.resumeInput}
            {...register("educationalInstitution")}
          />
          {errors.educationalInstitution && (
            <p className={s.error}>{errors.educationalInstitution.message}</p>
          )}

          <input
            type="text"
            placeholder="Специализация"
            className={s.resumeInput}
            {...register("specialization")}
          />
          {errors.specialization && (
            <p className={s.error}>{errors.specialization.message}</p>
          )}

          <input
            type="text"
            placeholder="Hard skills"
            className={s.resumeInput}
            {...register("hardSkills")}
          />
          {errors.hardSkills && (
            <p className={s.error}>{errors.hardSkills.message}</p>
          )}

          <input
            type="text"
            placeholder="Soft skills"
            className={s.resumeInput}
            {...register("softSkills")}
          />
          {errors.softSkills && (
            <p className={s.error}>{errors.softSkills.message}</p>
          )}

          <button className={s.resumeButton} disabled={isSubmitting}>
            Создать
          </button>
        </form>
      </div>
    </div>
  );
};
