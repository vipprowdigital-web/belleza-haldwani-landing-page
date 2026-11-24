import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { baseUrl } from "../utils/baseUrl";

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${baseUrl}/policy/public/privacy-policy`, {
      signal: controller.signal,
    })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json) => {
        setPolicy(json.data);
        setStatus("ok");
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setStatus("error");
      });
    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen w-full bg-light text-secondary px-6 pt-7 pb-10 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm text-primary underline underline-offset-4">
          ← Back to home
        </a>

        {status === "loading" && <p className="mt-8">Loading…</p>}

        {status === "error" && (
          <p className="mt-8">
            The privacy policy is currently unavailable. Please try again
            later.
          </p>
        )}

        {status === "ok" && (
          <>
            <h1 className="mt-8 text-3xl md:text-4xl font-bold text-primary">
              {policy.title}
            </h1>
            <p className="mt-2 text-sm text-secondary/70">
              Last updated: {new Date(policy.updatedAt).toLocaleDateString()}
            </p>
            <div
              className="mt-8 leading-relaxed whitespace-pre-line [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-semibold [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_a]:underline"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(policy.description),
              }}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
