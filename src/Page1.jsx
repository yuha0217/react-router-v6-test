import { Link, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const user = { id: 999, name: "hogehoge" };
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/page1/detailA", { state: user });
  };

  return (
    <div>
      <h1>Page1画面です</h1>

      <Link to="/page1/detailA" state={user}>
        detailA
      </Link>
      <br />
      <Link to="/page1/detailB">detailB</Link>
      <br />
      <button onClick={onClickButton}>detailA</button>

      {/* <Outlet /> */}
    </div>
  );
};
