const ItemContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-16 w-16 rounded-md bg-gray-200 p-6 shadow-inner">
      {children}
    </div>
  );
};

export default ItemContainer;
