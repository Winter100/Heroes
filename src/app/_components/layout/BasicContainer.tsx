interface BasicContaienr {
  children: React.ReactNode;
  className?: string;
}
const BasicContainer = ({ children, className, ...props }: BasicContaienr) => {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-lg p-2 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BasicContainer;
