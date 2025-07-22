// prostore\components\shared\header\category-drawer.tsx

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getAllCategories } from '@/lib/actions/product.actions';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

// ✅ Server component – async is fine here
const CategoryDrawer = async () => {
  // ✅ fetch all categories server-side
  const categories = await getAllCategories();

  return (
    <Drawer direction="left">
      {/* Button that opens the drawer */}
      <DrawerTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </DrawerTrigger>

      {/* Drawer content */}
      <DrawerContent className="h-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Select a category</DrawerTitle>
          <div className="space-y-1 mt-4">
            {categories.map((x: any) => (
              <Button
                variant="ghost"
                className="w-full justify-start"
                key={x.category}
                asChild
              >
                {/* Clicking a category closes the drawer */}
                <DrawerClose asChild>
                  <Link href={`/search?category=${x.category}`}>
                    {x.category} ({x._count})
                  </Link>
                </DrawerClose>
              </Button>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
