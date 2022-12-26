import { QueryClientProvider, QueryClient } from "react-query";
import Posts from "./Components/Posts";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
