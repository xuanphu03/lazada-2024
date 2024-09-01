import { cn } from '@/lib/utils'

function VouchersGif() {
  return (
    <i
      style={{
        backgroundImage: `/Images/gif-vouchers.gif`,
        backgroundPosition: '50px 300px',
        backgroundSize: 'auto'
      }}
      className={cn('inline-block size-96 bg-no-repeat')}
    ></i>
  )
}

export default VouchersGif
