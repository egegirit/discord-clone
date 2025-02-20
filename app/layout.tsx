import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/providers/query-provider";

const font = Open_Sans({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chat application",
    description: "A Discord Clone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider afterSignOutUrl="/">
            <html lang="en" suppressHydrationWarning>
                <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        // forcedTheme="dark"
                        enableSystem={true}
                        storageKey="discord-theme"
                    >
                        <SocketProvider>
                            <ModalProvider />
                            <QueryProvider>{children}</QueryProvider>
                        </SocketProvider>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
