import { Badge } from "@/components/ui/badge"
import { CategoryIcon } from "@/constants/category-icon"
import { Category } from "@prisma/client"


interface CategoryItemProps {
  category: Category
}


const CategoryItem = ({category}: CategoryItemProps) => {
  return (
    <div className="">
      <Badge variant="outline" className="flex items-center justify-center  rounded-lg py-3 gap-2 ">
        {CategoryIcon[category.slug as keyof typeof CategoryIcon]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </div>
  )
}

export default CategoryItem