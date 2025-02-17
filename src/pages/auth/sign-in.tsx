import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const SignInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof SignInForm>;

export function SignIn() {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });

      toast.success("Enviamos um link de autenticação para seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error("Credenciais inválidas");
    }
  }
  //Aqui estou aguardadno uma promise que eu criei, e ela vai ser resolvida depois de 2 segundos(Quando ela for chamada faz com que o sistema aguarde 2 segundos).

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!{" "}
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Seu e-mail</label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <button
              disabled={isSubmitting}
              className="w-full rounded-lg bg-red-600 px-4 py-2 text-white shadow-md transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              type="submit"
            >
              Acessar painel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
