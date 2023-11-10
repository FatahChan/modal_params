import { Product } from "@/types/product"
import ProductGrid from "../ProductGrid"
import dynamic from "next/dynamic"

const SelectedBundle = dynamic(() => import("../SelectedBundle"), { ssr: false })

type ClientWrapperProps = {
    data: Product[]
}
export default function ClinetWrapper({ data }: Readonly<ClientWrapperProps>) {

    return (
        <div className="m-5 lg:m-20">
            <ProductGrid data={data} />
            <SelectedBundle data={data} />
        </div>
    )
}
