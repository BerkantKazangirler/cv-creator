import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DataProvider, StyleProvider } from "@/contexts";

createRoot(document.getElementById("root")!).render(
  <StyleProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </StyleProvider>
);
