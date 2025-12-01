import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-6">
      <div className="bg-muted relative hidden lg:block col-span-4 ">
        <img
          src="/login.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute w-full h-full bottom-0 top-0 bg-linear-to-b from-black/80 to-black/80"></div>
        <div className="p-10 absolute bottom-0 text-white">
          <h1 className="text-4xl">eLaunch.</h1>
          <p className="text-sm">Welcome back, login to continue</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10 cols-span-5 lg:col-span-2">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            elaunch.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
