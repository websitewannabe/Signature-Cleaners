import { Route } from "wouter";

export function ProtectedRoute({
  path,
  component: Component,
}: {
  path: string;
  component: () => React.JSX.Element;
}) {
  // Redirect to external portal
  window.location.href = "https://portal.mysignaturecleaners.com";
  return null;
}