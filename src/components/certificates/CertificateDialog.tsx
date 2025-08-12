"use client";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function CertificateDialog({ cert, onClose }: any) {
  return (
    <Dialog open={!!cert} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 backdrop-blur-md bg-white/50" />
      <DialogContent className="flex items-center justify-center p-0 bg-transparent border-none shadow-none">
        <VisuallyHidden>
          <DialogTitle>Certificate Preview</DialogTitle>
        </VisuallyHidden>

        <div className="flex items-center justify-center w-full h-full">
          {cert?.src && (
            <Image
              src={cert.src}
              alt={cert.alt || "Certificate"}
              width={1400}
              height={1000}
              className="object-contain rounded-lg shadow-lg max-h-[90vh] max-w-[95vw] sm:max-h-[80vh] sm:max-w-[80vw]"
            />
          )}
        </div>

        <button
          onClick={onClose}
          className="fixed -top-10 -right-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-50"
        >
          <X size={20} />
        </button>
      </DialogContent>
    </Dialog>
  );
}
