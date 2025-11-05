import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    const disableInspectShortcuts = (e: KeyboardEvent) => {
      if (e.key === "F12") e.preventDefault();
      if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(e.key.toLowerCase()))
        e.preventDefault();
      if (e.ctrlKey && e.key.toLowerCase() === "u") e.preventDefault();
    };
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    window.addEventListener("keydown", disableInspectShortcuts, true);
    window.addEventListener("contextmenu", disableRightClick, true);
    document.addEventListener("contextmenu", disableRightClick, true);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", disableInspectShortcuts, true);
      window.removeEventListener("contextmenu", disableRightClick, true);
      document.removeEventListener("contextmenu", disableRightClick, true);
    };
  }, []);

  return <AppRoutes />;
}

export default App;
