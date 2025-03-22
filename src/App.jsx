import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherProvider, WeatherContext } from "./context/WeatherContext";
import Home from "./components/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
