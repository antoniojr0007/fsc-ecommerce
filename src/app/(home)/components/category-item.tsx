import { Badge } from "@/components/ui/badge"
import { Category } from "@prisma/client"
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react"


interface CategoryItemProps {
  category: Category
}


const CategoryItem = ({category}: CategoryItemProps) => {
  const categoryIcon = {
    mouses: <MouseIcon size={16}/>,
    keyboards: <KeyboardIcon size={16}/>,
    mousepads: <SquareIcon size={16}/>,
    monitors: <MonitorIcon size={16}/>,
    headphones: <HeadphonesIcon size={16}/>,
    speakers: <SpeakerIcon size={16}/>
  }

  return (
    <div className="">
      <Badge variant="outline" className="flex items-center justify-center  rounded-lg py-3 gap-2 ">
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </div>
  )
}

export default CategoryItem