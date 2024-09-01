import Link from 'next/link'
import Login from '@/features/Login'

const NAVHEADER = [
  {
    id: 1,
    title: 'Feedback',
    color: 'text-four'
  },
  {
    id: 2,
    title: 'Save more on app',
    color: 'text-primary'
  },
  {
    id: 3,
    title: 'Sell on Lazada',
    color: 'text-primary'
  },
  {
    id: 4,
    title: 'Customer care',
    color: 'text-primary'
  },
  {
    id: 5,
    title: 'Track my order',
    color: 'text-foreground'
  },
  {
    id: 6,
    title: 'Login',
    color: 'text-foreground',
    chilrend: <Login />
  },
  {
    id: 7,
    title: 'Signup',
    color: 'text-foreground'
  },
  {
    id: 8,
    title: 'Thay đổi ngôn ngữ',
    color: 'text-foreground'
  }
]

export default function NavHeader() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 py-2 ">
      <ul className="flex justify-end gap-6 text-xs uppercase">
        {NAVHEADER.map(item => (
          <li key={item.id}>
            <Link href="/" className={`hover:text-hover ${item.color}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
