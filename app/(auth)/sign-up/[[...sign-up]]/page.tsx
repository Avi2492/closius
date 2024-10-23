import Logo from "@/components/common/Logo";
import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="grid grid-cols-1 min-h-screen lg:grid-cols-2">
      <div className="h-full hidden lg:flex items-center justify-center">
        <Image
          src={"/signup.jpg"}
          height={500}
          width={500}
          alt="Signup Image"
        />
      </div>

      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-muted-foreground">
            Welcome Back
          </h1>
          <p className="text-base text-muted-foreground">
            Log in or create account to get back to your account
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
