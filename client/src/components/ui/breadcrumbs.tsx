import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  path: string;
  current?: boolean;
  className?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-white">
        {items.map((item, index) => (
          <li 
            key={item.path}
            className="flex items-center"
          >
            {index > 0 && (
              <span 
                className="mx-2 text-neutral-400"
                aria-hidden="true"
              >
                /
              </span>
            )}
            {item.current ? (
              <span 
                aria-current="page"
                className="font-medium text-[#F6AE2D]"
              >
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.path}
                className={item.className || "hover:text-[#790003] transition-colors"}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}