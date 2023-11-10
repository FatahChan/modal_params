'use client'

import { Product } from "@/types/product"
import ProductGrid from "../ProductGrid"
import dynamic from "next/dynamic"

const SelectedBundle = dynamic(() => import("../SelectedBundle"), { ssr: false })

type ClientWrapperProps = {
    data: Product[]
}
export default function ClinetWrapper({data}: Readonly<ClientWrapperProps>) {

    
    // create a random grid with cards from the data
    return (
        <div className="m-20">
            <ProductGrid data={data} />
            <SelectedBundle data={data} />
        </div>
    )
}
