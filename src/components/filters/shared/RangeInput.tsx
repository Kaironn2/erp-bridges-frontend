import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface RangeInputProps {
  label: string;
}

export function RangeInput({ label }: RangeInputProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input placeholder="De" type="number" />
        <Input placeholder="Até" type="number" />
      </div>
    </div>
  );
}
