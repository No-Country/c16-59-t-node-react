export const ElementResume = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-start mx-auto">
      <h1 className="bg-primary-yellow px-3 py-2 font-semibold w-full">
        {title}
      </h1>
      {children}
    </div>
  );
};
