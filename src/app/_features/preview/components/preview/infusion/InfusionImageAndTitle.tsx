import Row from '@/app/_components/layout/Row';
import Image from 'next/image';

const InfusionImageAndTitle = ({ infusionName }: { infusionName: string }) => {
  const src = '/images/enchant/infusion.png';
  return (
    <Row className="h-8 items-center gap-2">
      <Image
        width={32}
        height={32}
        style={{ width: '32px', height: '32px' }}
        className="rounded-md object-cover"
        src={src}
        alt="정령석"
      />

      <div className="h-full flex-1">
        <Row className="flex h-full gap-2">
          <p className="flex items-center justify-center text-xs">
            {infusionName.split(' ').slice(0, -1).join(' ')}
          </p>
        </Row>
      </div>
    </Row>
  );
};

export default InfusionImageAndTitle;
