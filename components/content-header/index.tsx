export function ContentHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h4 className="text-[36px] font-semibold uppercase">{title}</h4>
      <p className="sm:max-w-[50%] text-center">{description}</p>
    </div>
  );
}
