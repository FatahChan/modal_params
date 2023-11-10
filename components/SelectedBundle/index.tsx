import { Product } from '@/types/product'
import React, { useCallback, useEffect, useMemo } from 'react'
import ModalLayout from '../ModalLayout'
import PreCheckoutModal from '../PrecheckoutModal'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
type SelectedBundleProps = {
    data: Product[]
}
export default function SelectedBundle({ data }: Readonly<SelectedBundleProps>) {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const selectedProduct = useMemo(() => {
        return data.find((product) => product.name === searchParams.get('bundle'))
    }, [searchParams, data])

    const preCheckoutOpen = useMemo(() => {
        return searchParams.has('preCheckoutOpen')
    }, [searchParams])



    const handleClose = useCallback(() => {
        const searchParamsString = searchParams.toString()
        const newSearchParamsString = searchParamsString.replace(/preCheckoutOpen(?:=[^&\s]*)?(?:&[^&\s]*)*$/, '')
        router.replace(`${pathname}?${newSearchParamsString}`)
    }, [router, pathname, searchParams])

    if (!selectedProduct) return null
    return (
        <ModalLayout open={preCheckoutOpen} onOpenChange={handleClose}>
            <PreCheckoutModal product={selectedProduct} />
        </ModalLayout> 
       )
}
