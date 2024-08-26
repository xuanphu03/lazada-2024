import Banner from '@/features/Banner'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Banner />

      <div className='grid grid-cols-3 justify-between bg-default p-4 mt-5 rounded-lg'>
        <div>
          <Image src="/Images/icon-lazmall.png" alt="Icon LazMall" width={120} height={50} />
          <p className='text-sm'>LazMall</p>
        </div>

        <div className='border-l'>
          <Image src="/Images/icon-vouchers.png" alt="Icon Voucher" width={120} height={50} />
          <p className='text-sm'>Vouchers</p>
        </div>

        <div>
          <Image src="/Images/icon-topup.jpg" alt="Icon Topup" width={120} height={50} />
          <p className='text-sm'>Top-Up</p>
        </div>
      </div>
    </div>
  )
}
