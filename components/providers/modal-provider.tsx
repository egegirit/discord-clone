"use client";

import { useState, useEffect } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";

export const ModalProvider = () => {
    // Hydrate the modal provider after the initial render
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CreateServerModal />
        </>
    );
};
