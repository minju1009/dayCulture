import Link from 'next/link';
import { footer, navContainer, navMenu } from './layout.css';
import { AiOutlineHome, AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { GoBookmark } from 'react-icons/go';

export default function Footer() {
  return (
    <footer className={footer}>
      <nav className={navContainer}>
        <Link href="/">
          <div className={navMenu}>
            <AiOutlineHome width={'140'} />
          </div>
        </Link>
        <Link href="/search">
          <div className={navMenu}>
            <AiOutlineSearch />
          </div>
        </Link>
        <div className={navMenu}>
          <AiOutlinePlusCircle />
        </div>
        <Link href="/my-list">
          <div className={navMenu}>
            <GoBookmark />
          </div>
        </Link>
      </nav>
    </footer>
  );
}
