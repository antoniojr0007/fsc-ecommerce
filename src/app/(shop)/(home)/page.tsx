
import { prismaClient } from "@/lib/prisma"
import Categories from "./components/categories"
import ProductList from "./components/product-list"
import PromoBanner from "./components/promo-banner"
import SectionTitle from "./components/section-title"



export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category:{
        slug: "keyboards",
        
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category:{
        slug: "mouses",
        
      }
    }
  })

  return (
    <div>
      <PromoBanner  
        src="/banner-home-01.png"
        alt="até 55% Desconto só esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8 mb-8">
      <SectionTitle>ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="até 55% Desconto em mouses"
      />

      <div className="mt-8 mb-8">
        <SectionTitle>teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="até 20% Desconto em fones"
      />

      <div className="mt-8">
        <SectionTitle>mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
  
     
    </div>
  )
}
