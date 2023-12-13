"use client"
import { LogIn, Menu, PercentCircle, ShoppingBag, ShoppingCart } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";



export const Header = () => {
  const { status } = useSession()

  const HandleLoginClick = async () => {
    await signIn();
  }


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
              { status === 'unauthenticated' ? 
              <Button onClick={HandleLoginClick} variant="ghost" className="justify-start gap-2">
                <LogIn size={16} />
                Fazer Login
              </Button> :
              <Button onClick={HandleLoginClick} variant="ghost" className="justify-start gap-2">
              <LogIn size={16} />
                Sair
              </Button> 
              }

              <SheetClose asChild>
                <Link href="/catalog">
                  <Button variant="ghost" className="justify-start gap-2">
                    <ShoppingBag size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/offers">
                  <Button variant="ghost" className="justify-start gap-2">
                    <PercentCircle size={16} />
                    Ofertas
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/cart">
                  <Button variant="ghost" className="justify-start gap-2">
                    <ShoppingCart size={16} />
                    Carrinho
                  </Button>
                </Link>
              </SheetClose>

            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/">
          <h1 className="text-lg font-semibold">
            <span className="text-primary">FSC</span> Shop
          </h1>
        </Link>

        <Button size="icon" variant="ghost">
          <ShoppingCart size={20} />
        </Button>
      </CardContent>
    </Card>
  );
};