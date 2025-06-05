import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {FlexiaIcon} from "@/assets/FlexiaIcon.tsx";
import { useMutation } from "@tanstack/react-query"
import { singIn } from "@/api/auth/authApi.ts";
import { toast } from "sonner"
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '@/store/authSlice';

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
    singIn(username, password),
    onSuccess: (data) => {
      dispatch(login(data.access_token));
      navigate('/exercises');
    },
    onError: (error: unknown) => {
      const err = error as AxiosError;

      if (err.response?.status === 401) {
        toast.warning("Credenciales incorrectas. Por favor, intenta nuevamente.");
      } else {
        toast.error("Ocurrió un error al iniciar sesión. Inténtalo más tarde.");
      }
    },
  });


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({
      username: values.username,
      password: values.password,
    });
  }

  return (
    <div
      className="p-8 border-1 border-[#E2E8F0] rounded-md w-full md:w-1/3 mx-4"
    >
      <div className="flex flex-col gap-1 items-center">
        <FlexiaIcon className="size-12" />
        <h1 className="text-[#64748B] font-bold">Iniciar sesión</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="flexiaexpert" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? "Iniciando sesión" : "Iniciar sesión"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
