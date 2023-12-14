import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
  
}


const ProductItem = ({ product }: ProductItemProps ) => {
  return (
    <div className="flex flex-col max-w-[156px]  GAP-4">
      <div className="relative flex  h-[170px] w-[150px] items-center justify-center bg-accent rounded-lg ">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          height={0}
          width={0}
          className="h-auto max-h-[70%] w-auto max-w[80%]"
          sizes="100vw"
          style={{
            objectFit:"contain"
          }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">   
            <ArrowDown size={14}/> {product.discountPercentage}% 
          </Badge>
        )}
      </div>



      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          { product.discountPercentage > 0 ? (
            <>
            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
            <p className="opacity-75 line-through text-xs">R$ {product.basePrice.toFixed(2)}</p>
            </>
          ): (
            <p className="font-semibold text-sm">R$ {product.basePrice.toFixed(2)}</p>
          )}
          
        </div>

      </div>
    </div>
  )
}

export default ProductItem