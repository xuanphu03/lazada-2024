import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'

const IMAGE_BANNER = [
  '/Images/banner1.jpg',
  '/Images/banner2.jpg',
  '/Images/banner3.jpg',
  '/Images/banner4.jpg',
  '/Images/banner5.jpg',
  '/Images/banner6.jpg',
  '/Images/banner7.jpg',
  '/Images/banner8.jpg',
  '/Images/banner9.jpg',
  '/Images/banner10.jpg',
  '/Images/banner11.jpg'
]

export default function Banner() {
  return (
    <div className="flex gap-2">
      <Carousel className="group w-10/12 bg-default">
        <CarouselContent>
          {IMAGE_BANNER.map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image} alt={`banner-${index}`} width={1500} height={100} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 hidden group-hover:flex" />
        <CarouselNext className="right-0 hidden group-hover:flex" />
      </Carousel>

      <div className="bg-download w-2/12 p-2">
        <div className="flex items-center gap-3">
          <Image src="/Images/icon-logo.png" alt="Icon logo Lazada" width={45} height={30} />
          <p className="text-six font-medium text-sm uppercase">Try Lazada app</p>
        </div>
        <div className="text-default relative mt-2">
          <Image src="/Images/bg-download.png" alt="Background download" width={250} height={250} />
          <div className="absolute left-2 top-2">
            <div className="flex items-center gap-2 text-xs font-medium">
              <Image src="/Images/star.png" alt="Icon star" width={15} height={15} />
              <p>4.7 Reted</p>
            </div>
            <p className="text-sm">Get the Lazada App to enjoy</p>
            <div className="ml-5 mt-5 flex flex-col items-center justify-center">
              <div className="flex items-center gap-2">
                <Image src="/Images/img-shipping.png" alt="Icon download" width={35} height={50} />
                <p className="w-24 text-sm font-bold uppercase">Free Shipping</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/Images/img-voucher.png" alt="Icon voucher" width={35} height={50} />
                <p className="w-24 text-sm font-bold uppercase">Exclusive Vouchers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 flex items-center gap-2">
          <Image src="/Images/qr-download-app.png" alt="Icon download" width={90} height={50} />
          <div className="space-y-3">
            <Image src="/Images/img-app-store.png" alt="Icon app store" width={100} height={50} />
            <Image src="/Images/img-google-play.png" alt="Icon google play" width={100} height={50} />
          </div>
        </div>
        <p className='text-xs'>Download the App now by scanning the QR code</p>
      </div>
    </div>
  )
}
