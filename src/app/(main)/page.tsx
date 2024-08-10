import { getCollectionsList } from "@lib/data";
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedCategory from "@modules/home/components/featured-category";
import AboutUs from '@modules/home/components/aboutUs';
import BannerHero from "@modules/home/components/banner-hero"
import Slider from "@modules/common/components/slider/index"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products";
import Disclosure from '@modules/common/components/disclosure/index';
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "EHFConcept",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}


export default async function Home() {

  const { collections, count } = await getCollectionsList(0, 3);

  return (
    <>
      <Slider 
      typeSlider={'banner'}
      data={[{
        desktopUrl: '/banner/banner1.png',
        mobileUrl: '/banner/banner1m.png',
      },
      {
        desktopUrl: '/banner/banner2.png',
        mobileUrl: '/banner/banner2m.png',
      },
      {
        desktopUrl: '/banner/banner3.png',
        mobileUrl: '/banner/banner3m.png',
      },
      {
        desktopUrl: '/banner/banner4.png',
        mobileUrl: '/banner/banner4m.png',
      }]}
      />
      <FeaturedCategory collections={collections}/>
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>    
      <AboutUs />
    </>
  )
}
