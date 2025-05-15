
import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  path: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-white/80">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-white/60" aria-hidden="true">
                &gt;
              </span>
            )}
            {item.current ? (
              <span aria-current="page" className="text-white">
                {item.label}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
