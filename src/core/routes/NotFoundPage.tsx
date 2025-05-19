import { Button } from "@/components/ui/button";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex flex-col items-center leading-none justify-center">
      <h1 className="text-[128px] font-bold text-green">404</h1>
      <p className="font-medium text-2xl">No se encontró la página</p>
      <Button
        onClick={() => navigate("/")}
        className="cursor-pointer mt-4 w-1/2 md:w-1/5"
      >
        Regresar al inicio
      </Button>
    </div>
  );
};

export default NotFoundPage;
