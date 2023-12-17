import ProductItem from "@/components/Product-Item"
import { Badge } from "@/components/ui/badge"
import { CategoryIcon } from "@/constants/category-icon"
import { computeProductTotalPrice } from "@/helpers/product"
import { prismaClient } from "@/lib/prisma"

const  CategoryProducts = async ({params}: any) => {

  const category = await prismaClient.category.findFirst({
    where: {
        slug: params.slug,
      },
      include: {
        products: true,
      } 
  })

  if (!category) {
    return null;
  }
  
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant='outline'
      className="w-fit gap-1 border-2 border-primary px-3 text-base uppercase py-[0.375rem]"
      >
        {CategoryIcon[params.slug as keyof typeof CategoryIcon]}
        {category?.name}
      </Badge>

      <div  className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={{
                ...product,
                totalPrice: computeProductTotalPrice(product),
              }}
            />
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts