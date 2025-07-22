
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const isObjectId = (str) => /^[a-f\d]{24}$/i.test(str);

  return (
    <nav className="text-2xl md:text-2xl bg-opacity-50 px-6 py-4 z-10 rounded flex justify-center items-center primary-color">
      <ol className="flex space-x-2">
        <li className="cursor-pointer">
          <Link
            to="/"
            className="hover:underline primary-text cursor-pointer z-10"
          >
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const label = isObjectId(value)
            ? title || value // use title if available
            : value.replace(/-/g, " ");

          return (
            <li key={to} className="flex items-center space-x-2 gap-1">
              <span className="mx-1">/ </span>
              {isLast ? (
                <span className="capitalize primary-text">{label}</span>
              ) : (
                <Link
                  to={to}
                  className="hover:underline capitalize primary-text"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
