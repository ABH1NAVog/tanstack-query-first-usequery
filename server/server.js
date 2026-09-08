// ─────────────────────────────────────────────────────────────
// Threadbase API — already implemented. You do NOT need to edit this.
// GET /api/threads → returns 5 dummy threads (with a small delay so the
//                    loading state is visible while you build the UI).
// ─────────────────────────────────────────────────────────────
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const threads = [
  { id: 1, title: "Welcome to Threadbase", body: "This thread came from your Express API." },
  { id: 2, title: "Axios > fetch for app code", body: "Auto JSON, response.data, throws on errors." },
  { id: 3, title: "One base URL to rule them all", body: "Set it once in axios.create()." },
  { id: 4, title: "Server state is not UI state", body: "That's why TanStack Query exists." },
  { id: 5, title: "Fetch once, serve from cache", body: "useQuery dedupes and caches for you." },
];

app.get("/api/threads", (req, res) => {
  // 600ms delay so isPending is observable in the UI
  setTimeout(() => res.json(threads), 600);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Threadbase API running on http://localhost:${PORT}`);
});
