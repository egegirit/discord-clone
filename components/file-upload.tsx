"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
// import "@uploadthing/react/styles.css";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage";
}

const allowedImageFormats = ["png", "jpg", "jpeg"];

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
    const fileType = value; //?.split(".").pop()?.toLowerCase();
    // If the file is an image, render the image with a delete button
    if (value && fileType !== "pdf") {
        console.log("File type:", fileType);
        return (
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="Uploaded image"
                    className="rounded-full"
                />
                <button
                    onClick={() => onChange("")}
                    className="bg-rose-500 test-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                    type="button"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        );
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.error(error);
            }}
        />
    );
};
