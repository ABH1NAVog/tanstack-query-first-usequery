// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { getThreads } from "../services/threads.service";

export default function ThreadList() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getThreads()
      .then(setThreads)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading threads…</p>;
  if (error) return <p className="err">Error: {error.message}</p>;

  return (
    <ul className="threads">
      {threads.map((t) => (
        <li className="card" key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.body}</p>
        </li>
      ))}
    </ul>
  );
}