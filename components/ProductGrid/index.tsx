import { Product } from "@/types/product"
import ProductCard from "../ProductCard"

type ClientWrapperProps = {
    data: Product[]
}
export default function ProductGrid({ data }: Readonly<ClientWrapperProps>) {


    // create a random grid with cards from the data
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {data.map((product: Product) => {
                return (
                    <ProductCard key={product.name} product={product} />
                )
            })}
        </div>

    )
}
