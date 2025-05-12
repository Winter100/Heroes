'use client';

import ItemGridDisplay from './ItemGridDisplay';
import Loading from '@/app/_components/common/Loading';
import ErrorApi from '@/app/_components/common/error/ErrorApi';
import { bagFilter } from '../../utils/bagFilter';
import { useEquipment } from '../../hooks/useEquipment';

const CharacterEquipment = ({ ocid }: { ocid: string }) => {
  const { data, isLoading, error } = useEquipment(ocid);

  if (isLoading) return <Loading />;
  if (error) return <ErrorApi />;

  const { bag, cach } = bagFilter(data);

  return <ItemGridDisplay bag={bag} cach={cach} />;
};

export default CharacterEquipment;
