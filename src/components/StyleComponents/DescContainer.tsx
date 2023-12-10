const DescContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="text-xs leading-5 [word-spacing:1px] text-main">
      {children}
    </div>
  );
};

export default DescContainer;
