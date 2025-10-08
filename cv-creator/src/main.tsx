import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import DataProvider from "./contexts/dataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <App />
  </DataProvider>
);
