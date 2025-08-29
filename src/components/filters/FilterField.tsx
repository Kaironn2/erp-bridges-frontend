import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FilterFieldProps extends React.ComponentProps<'input'> {
  label: string;
  id: string;
}

export function FilterField({ label, id, ...props }: FilterFieldProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </div>
  );
}
