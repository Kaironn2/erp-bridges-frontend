'use client';

import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterContainerProps {
  mainFilters: ReactNode;
  advancedFilters: ReactNode;
}

export function FilterContainer({
  mainFilters,
  advancedFilters,
}: FilterContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-end">
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full flex-shrink-0 md:w-auto"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </CollapsibleTrigger>
          {mainFilters}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <CollapsibleContent forceMount asChild>
            <motion.div
              key="advanced-filters-content"
              initial={{ opacity: 0, height: 0, marginTop: '0' }}
              animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
              exit={{ opacity: 0, height: 0, marginTop: '0' }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="rounded-lg border p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {advancedFilters}
                </div>
              </div>
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
}
