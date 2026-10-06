import { Link } from "react-router-dom";
import { PageMeta } from "../components/PageMeta";

export function NotFoundPage() {
  return (
    <>
      <PageMeta subtitle="Not Found" noIndex />
      <section>
        <h1>Not Found</h1>
        <p>The page you requested does not exist.</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </section>
    </>
  );
}
