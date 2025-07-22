// components/shared/header/index.tsx

import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import CategoryDrawer from './category-drawer'; // ✅ Server
import Search from './search'; // ✅ Server
import ClientMenu from './client-menu'; // ✅ Client isolated

const Header = () => {
  return (  
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDrawer />
          <Link href="/" className="flex-start ml-4">
            <Image
              src="/images/logo.png"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              Thunderbird Specialities
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <ClientMenu /> {/* ✅ Client Component */}
      </div>
    </header>
  );
};

export default Header;
