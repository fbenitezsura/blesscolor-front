import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import Slider from "@modules/common/components/slider/index"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-8 p-8">
      <Slider 
      typeSlider={'banner'}
      data={images}
      />
      </div>
    </div>
  )
}

export default ImageGallery
