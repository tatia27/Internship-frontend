// import { useNavigate } from "react-router-dom";

import AllUsers from "../users/allUsers/allUsers";

export type TestProps = {
  id: string;
  title: string;
};

function Test({ id, title }: TestProps) {
  console.log(id, title);
  return (
    <>
      <AllUsers id={id} title={title} />
    </>
  );
}

export default Test;
