import { PrismaClient } from "@prisma/client";

declare global {
    // Disable the eslint rule for the global variable just for this case.
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

// Enable hot reloading in development.
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}
