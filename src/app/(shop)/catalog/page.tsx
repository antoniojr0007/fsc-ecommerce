
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

export default async function  CatalogPage() {
  const categories = await prismaClient.category.findMany({})
  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant='outline'
        className="w-fit gap-1 border-2 border-primary px-3 text-base uppercase py-[0.375rem]"
      >
          <ShapesIcon size={16}/>
          catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        { categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))
        }
      </div>
    </div>
  )
}
