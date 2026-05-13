

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-[38px] font-bold tracking-tight text-[#111111]">
        {title}
      </h2>

      <p className="mt-3 text-[15px] text-neutral-500">
        {subtitle}
      </p>
    </div>
  );
}