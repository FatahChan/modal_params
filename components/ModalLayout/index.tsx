'use client'
import React, { PropsWithChildren } from 'react'
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"

type ModalLayoutProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export default function ModalLayout({ children, open, onOpenChange }: PropsWithChildren<ModalLayoutProps>) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger />
            {children}
        </Dialog>
    )
}
