'use client'
import { Product } from '@/types/product'
import { useCallback, useMemo } from 'react'
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
        return data.find((product) => product.name === searchParams.get('bundle')) ?? null
    }, [searchParams, data])

    const handleClose = useCallback(() => {
        const searchParamsString = searchParams.toString()
        const bundleParamRegex = new RegExp(`bundle=${selectedProduct?.name ?? ''}(?:&|$)`, 'i')
        const newSearchParamsString = searchParamsString.replace(bundleParamRegex, '')
        router.replace(`${pathname}?${newSearchParamsString}`)
    }, [router, pathname, searchParams, selectedProduct])

    if (!selectedProduct) return null
    return (
        <ModalLayout open={!!selectedProduct} onOpenChange={handleClose}>
            <PreCheckoutModal product={selectedProduct} />
        </ModalLayout>
    )
}
