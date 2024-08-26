'use client'

import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="bg-background">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-10 p-4">
        <Logo />
        <div className="flex items-center gap-5 w-full">
          <Input className="bg-backgroundDefault " placeholder="Search in Lazada" />
          <Button className="bg-five text-background hover:bg-five/90">
            <Search />
          </Button>
        <ShoppingCart className="text-primary w-20" />
        <Image src="/Images/img-voucher-new-member.png" height="100" width="160" alt="Voucher" />
        </div>
      </div>
    </div>
  )
}
