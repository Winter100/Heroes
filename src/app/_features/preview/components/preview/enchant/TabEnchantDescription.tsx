const TabEnchantDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex items-center gap-1 text-[10px]">
      <div className="text-gray-400">{description}</div>
    </div>
  );
};

export default TabEnchantDescription;
