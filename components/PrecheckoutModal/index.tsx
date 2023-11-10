import React from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Product } from '@/types/product'
type PreCheckoutModalProps = {
    product: Product
}
export default function PreCheckoutModal({ product }: Readonly<PreCheckoutModalProps>) {
    return (
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription>
                    {product.description}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button asChild>
                    <Link href={`/thank-you`}>
                        Checkout
                    </Link>
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}
