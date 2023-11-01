import { LogIn, Menu, PercentCircle, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";



export const Header = () => {
  return (
    <Card className="mb-5">
      <CardContent className="flex h-[89px] items-center justify-between px-8 py-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu size={20} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="justify-start text-left">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2 py-4">
              <Button variant="ghost" className="justify-start gap-2">
                <LogIn size={16} />
                Fazer Login
              </Button>

              <Button variant="ghost" className="justify-start gap-2">
                <ShoppingBag size={16} />
                Catálogo
              </Button>

              <Button variant="ghost" className="justify-start gap-2">
                <PercentCircle size={16} />
                Ofertas
              </Button>

              <Button variant="ghost" className="justify-start gap-2">
                <ShoppingCart size={16} />
                Carrinho
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h2 className="text-lg font-semibold">FSC Shop</h2>

        <Button size="icon" variant="ghost">
          <ShoppingCart size={20} />
        </Button>
      </CardContent>
    </Card>
  );
};