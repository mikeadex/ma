import { HelmetProvider } from "react-helmet-async";
import AppNavigation from "./navigation/app-navigation";

function App() {
  return (
    <HelmetProvider>
      <AppNavigation />
    </HelmetProvider>
  );
}

export default App;
