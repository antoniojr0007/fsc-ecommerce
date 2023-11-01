import { MenuIcon, ShoppingCartIcon } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"


export const Header = () => {
  return (
    <Card className="flex justify-between p=[1.875rem] items-center m-5">
        <Button size='icon' variant='outline'>
          <MenuIcon />
        </Button>
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSC</span> - Ecommerce</h1>
        <Button size='icon' variant='outline'>
          <ShoppingCartIcon />
        </Button>
    </Card>
  )
}
