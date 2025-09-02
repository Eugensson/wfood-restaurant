import Link from "next/link";

import { SOCIAL_ITEMS } from "@/constants";

const Socials = () => {
  return (
    <div>
      <h4 className="font-semibold mb-5">Socials</h4>
      <ul className="flex flex-col gap-y-3 text-sm">
        {SOCIAL_ITEMS.map(({ name, path }) => (
          <li key={name}>
            <Link href={path} target="_blank" rel="noreferrer noopener">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
