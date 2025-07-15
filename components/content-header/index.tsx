export function ContentHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h4 className="text-[36px] font-semibold uppercase text-white">
        {title}
      </h4>
      <p className="sm:max-w-[50%] text-center text-white">{description}</p>
    </div>
  );
}
