'use client';
import { useQuery } from '@tanstack/react-query';
import { Guild } from '../../_type/characterType';
import { getGuild } from '../../_services/getGuild';

export const useGuild = (ocid: string) => {
  const { data, isLoading, error } = useQuery<Guild>({
    enabled: !!ocid,
    queryKey: [ocid, '길드'],
    queryFn: () => getGuild(ocid ?? ''),
  });

  const guild = data as Guild;

  return { guild, isLoading, error };
};
