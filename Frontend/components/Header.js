import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex flex-wrap space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/alumni" className="hover:text-gray-300">
              Alumni
            </Link>
          </li>
          <li>
            <Link href="/coding-rankings" className="hover:text-gray-300">
              Coding Rankings
            </Link>
          </li>
          <li>
            <Link href="/companies-placed" className="hover:text-gray-300">
              Companies Placed
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-gray-300">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/current-hiring" className="hover:text-gray-300">
              Current Hiring
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

