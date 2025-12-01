'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallback, useEffect, useState } from "react"
import { useDebounce } from "@/app/utils/debounce"
import { toast, Toaster } from "sonner"

type Inputs = {
  brandname: string
  email: string
  password: string
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const [isChecking, setIsChecking] = useState(false)

  const brandname = watch('brandname')

  const debouncedBrandname = useDebounce(brandname || '', 500)

  const checkBrandname = useCallback(async (name: string) => {
    if (!name.trim()) return

    setIsChecking(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3000))

      const existingBrands = ['elaunch', 'iamjdnartey']
      if (existingBrands.includes(name.toLowerCase().trim())) {
        setError('brandname', {
          type: 'manual',
          message: 'Brand name already exists'
        })
      } else {
        clearErrors('brandname')
      }
    } catch (error) {
      setError('brandname', {
        type: 'manual',
        message: 'Error checking brand name availability'
      })
    } finally {
      setIsChecking(false)
    }
  }, [setError, clearErrors])

  // Trigger validation when debounced value changes
  useEffect(() => {
    if (debouncedBrandname && debouncedBrandname.length > 3) {
      checkBrandname(debouncedBrandname)
    }
  }, [debouncedBrandname, checkBrandname])

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Setup your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to setup your account
          </p>
        </div>
        <Field>
          <div className="flex gap-1 items-center">
            <FieldLabel htmlFor="brand">Brand Name</FieldLabel>
            <p className="text-xs text-gray-400 m-0 p-0">(elaunch.com/{'{brandname}'})</p>
          </div>
          <Input id="brand" type="text" placeholder="brandname" required className="m-0 " {...register("brandname", { required: true })} />

          {isChecking && (
            <p className="text-xs text-muted-foreground mt-1">Checking availability...</p>
          )}
          {brandname && !isChecking && errors.brandname && (
            <p className="text-xs text-destructive mt-1">{errors.brandname.message}</p>
          )}
          {brandname && !errors.brandname && !isChecking && (
            <p className="text-xs text-green-600 mt-1">{brandname} is available!</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="mail@elaunch.com" required {...register("email", { required: true })} />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" placeholder="password" required {...register("password", { required: true })} />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with Google
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="/login" className="underline underline-offset-4">
              Login
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Toaster />
    </form>
  )
}
