"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <ClerkProvider>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </ClerkProvider>
    )
}

