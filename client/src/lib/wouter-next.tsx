import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";

type Params = Record<string, string>;

const ParamsContext = createContext<Params>({});

type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  onClick?: () => void;
}>;

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation(): [string, (to: string) => void] {
  const router = useRouter();
  const pathname = (router.asPath || "/").split("?")[0] || "/";

  const navigate = (to: string) => {
    void router.push(to);
  };

  return [pathname, navigate];
}

export function useParams<T extends Params = Params>(): T {
  const contextParams = useContext(ParamsContext);
  if (Object.keys(contextParams).length > 0) {
    return contextParams as T;
  }

  const router = useRouter();
  const params: Params = {};
  for (const [key, value] of Object.entries(router.query)) {
    if (typeof value === "string") {
      params[key] = value;
    }
  }

  return params as T;
}

function matchPath(routePath: string, pathname: string): Params | null {
  const routeParts = routePath.split("/").filter(Boolean);
  const pathParts = pathname.split("/").filter(Boolean);

  if (routeParts.length !== pathParts.length) {
    return null;
  }

  const params: Params = {};

  for (let i = 0; i < routeParts.length; i += 1) {
    const routePart = routeParts[i];
    const pathPart = pathParts[i];

    if (routePart.startsWith(":")) {
      params[routePart.slice(1)] = decodeURIComponent(pathPart);
      continue;
    }

    if (routePart !== pathPart) {
      return null;
    }
  }

  return params;
}

type RouteProps = {
  path?: string;
  component: () => ReactElement | null;
};

export function Route({ path, component: Component }: RouteProps) {
  if (!path) {
    return <Component />;
  }

  const [location] = useLocation();
  const params = useMemo(() => matchPath(path, location), [path, location]);

  if (!params) {
    return null;
  }

  return (
    <ParamsContext.Provider value={params}>
      <Component />
    </ParamsContext.Provider>
  );
}

type SwitchProps = {
  children: ReactNode;
};

export function Switch({ children }: SwitchProps) {
  const [location] = useLocation();
  const childArray = Children.toArray(children);
  let fallback: ReactElement | null = null;

  for (const child of childArray) {
    if (!isValidElement(child)) {
      continue;
    }

    const childPath = (child.props as { path?: string }).path;

    if (!childPath) {
      fallback = child;
      continue;
    }

    if (matchPath(childPath, location)) {
      return cloneElement(child);
    }
  }

  return fallback;
}
