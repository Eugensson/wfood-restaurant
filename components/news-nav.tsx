import Link from "next/link";

import { NEWSNAV_DATA } from "@/constants";

export const NewsNav = () => {
  return (
    <div>
      <h4 className="font-semibold mb-5">Latest News</h4>
      <ul className="flex flex-col gap-y-3 text-sm">
        {NEWSNAV_DATA.map(({ id, path, title }) => (
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
