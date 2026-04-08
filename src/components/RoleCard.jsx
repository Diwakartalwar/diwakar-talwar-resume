import { useNavigate } from "react-router-dom";

function RoleCard({ title, subtitle, path }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="
        bg-card border border-gray-800 rounded-xl p-6
        cursor-pointer transition-all duration-200
        hover:border-accent hover:-translate-y-1
      ">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default RoleCard;
