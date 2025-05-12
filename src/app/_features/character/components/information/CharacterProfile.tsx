import { CharacterProfileProps } from '@/app/_features/character/types';

const CharacterProfile = ({ profileData }: CharacterProfileProps) => {
  return (
    <div className="w-full text-sm">
      <ul className="flex h-full flex-col">
        {profileData?.map((data) => (
          <li key={data?.title} className="flex flex-1 items-center gap-2">
            <div className="w-16">{data.title}</div>
            <div title={data?.value?.toString()} className="flex-1 truncate">
              {data?.value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterProfile;
