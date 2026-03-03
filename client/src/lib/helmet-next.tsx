import Head from "next/head";
import type { PropsWithChildren } from "react";

type HelmetProps = PropsWithChildren<{}>;

export function Helmet({ children }: HelmetProps) {
  return <Head>{children}</Head>;
}

export function HelmetProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}
