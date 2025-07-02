import s from "./footerContacts.module.scss";

export const FooterContacts = () => {
  return (
    <div>
      <p className={s.title}>Контакты</p>
      <a href="mailto:itinternshipsportal@gmail.com" className={s.link}>
        itinternshipsportal@gmail.com
      </a>
    </div>
  );
};
