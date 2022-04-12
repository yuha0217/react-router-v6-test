import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1DetailA画面です</h1>
      <p>
        名前は{state?.name}です。IDは{state?.id}です。
      </p>
    </div>
  );
};
