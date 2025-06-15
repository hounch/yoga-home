"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const CMS = dynamic(
  () => import("netlify-cms-app").then((cms) => cms.default),
  { ssr: false }
);

export default function AdminPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      CMS.init();
      CMS.registerPreviewTemplate("classes", ({ entry }) => (
        <div>
          <h1>{entry.getIn(["data", "title"])}</h1>
          <p>{entry.getIn(["data", "description"])}</p>
        </div>
      ));
    }
  }, []);

  return <div id="nc-root" />;
}
