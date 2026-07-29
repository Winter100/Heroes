'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { MdOutlineArrowBack } from 'react-icons/md';

const ItemRecipeTableBack = () => {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()}>
      <MdOutlineArrowBack />
    </Button>
  );
};

export default ItemRecipeTableBack;
