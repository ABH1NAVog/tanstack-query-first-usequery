import ThreadList from "./components/ThreadList.jsx";

// App is already wired. It renders <ThreadList />.
// Your work happens in main.jsx (provider) and ThreadList.jsx (useQuery).
export default function App() {
  return (
    <div className="wrap">
      <h1>Threadbase</h1>
      <p className="muted">Thread list — refactor this to TanStack Query.</p>
      <ThreadList />
    </div>
  );
}
