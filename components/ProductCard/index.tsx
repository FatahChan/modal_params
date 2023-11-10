import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Product } from "@/types/product"
import Link from "next/link"
type productCardProps = {
    product: Product
}
export default function ProductCard({ product }: Readonly<productCardProps>) {
    return (
        <Link href={{query:{bundle: product.name}}} prefetch scroll={false} replace={true}>
            <Card className="hover:scale-105 transition duration-700 ease-in-out hover:shadow-md">
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                    <div>${product.price}</div>
                </CardFooter>
            </Card>
        </Link>
    )
}
