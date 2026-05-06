"use state"

interface FormSectionProps {
  children: React.ReactNode;
}

export default function FormSection({
  children,
}: FormSectionProps) {
  return (
    <div className="space-y-8 pt-14">
      {children}
    </div>
  );
}