import { Link } from "react-scroll";

import { NAV_ITEMS } from "@/constants";

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
}

export const Nav = ({ containerStyles, linkStyles }: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className="flex items-center gap-x-12 text-white">
        {NAV_ITEMS.map(({ path, name, offset }) => (
          <li key={name}>
            <Link
              spy
              smooth
              to={path}
              offset={offset}
              duration={500}
              className={linkStyles}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
