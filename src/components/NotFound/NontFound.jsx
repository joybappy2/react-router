import { useNavigate } from "react-router";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ami Nai</h1>
      <button className="btn btn-error" onClick={() => navigate("/home")}>
        HOme
      </button>
    </div>
  );
}

export default NotFound;
