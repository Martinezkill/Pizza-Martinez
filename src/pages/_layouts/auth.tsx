import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      {/* Coluna esquerda */}
      <div className="flex flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza martinez</span>
        </div>

        {/* Rodapé */}
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.martinez - {new Date().getFullYear()}
        </footer>
      </div>

      {/* Coluna direita */}
      <div className="relative flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
