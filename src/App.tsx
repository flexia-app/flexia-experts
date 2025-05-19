import { CoreRoutes } from "./core/routes";
import { Toaster } from "@/components/ui/sonner"
import "./index.css";

function App() {
  return (
    <>
      <Toaster
        richColors
        position="top-right"
      />
      <CoreRoutes />
    </>
  )
}

export default App
