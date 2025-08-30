'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

interface FilterFieldProps<T>
  extends Omit<React.ComponentProps<'input'>, 'onChange' | 'value'> {
  label?: string;
  id: keyof T & string;
  value: string | undefined;
  onValueChange: (key: keyof T, value: string) => void;
  onPressEnter?: () => void;
}

export function FilterField<T extends Record<string, any>>({
  label,
  id,
  value,
  onValueChange,
  onPressEnter,
  ...props
}: FilterFieldProps<T>) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter();
    }
  };

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...props}
        value={value || ''}
        onChange={(e) => onValueChange(id, e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
