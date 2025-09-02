import Link from "next/link";

import { BLOGNAV_ITEMS } from "@/constants";

export const BlogNav = () => {
  return (
    <div>
      <h4 className="font-semibold mb-5">Blog</h4>
      <ul className="flex flex-col gap-y-3 text-sm">
        {BLOGNAV_ITEMS.map(({ id, path, title }) => (
          <li key={id}>
            <Link href={path} target="_blank" rel="noreferrer noopener">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
