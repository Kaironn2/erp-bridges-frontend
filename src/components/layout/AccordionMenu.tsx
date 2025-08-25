'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { BarChart, FileText, Settings, ChevronsRight } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

const menuItems = [
  {
    title: 'Relatórios',
    icon: FileText,
    links: [
      { href: '/reports/upload', label: 'Upload' },
      { href: '/reports/history', label: 'Histórico' },
    ],
  },
  {
    title: 'Dashboards',
    icon: BarChart,
    links: [
      { href: '/dashboard/sales', label: 'Vendas' },
      { href: '/dashboard/mkt', label: 'Marketing' },
    ],
  },
  {
    title: 'Configurações',
    icon: Settings,
    links: [{ href: '/settings', label: 'Geral' }],
  },
];

type AccordionMenuProps = {
  isCollapsed: boolean;
};

export function AccordionMenu({ isCollapsed }: AccordionMenuProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {menuItems.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span className={clsx({ hidden: isCollapsed })}>
                {item.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={clsx('flex flex-col gap-2 pl-5', {
                'items-center': isCollapsed,
              })}
            >
              {item.links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="w-full justify-start hover:bg-transparent hover:text-accent"
                  asChild
                >
                  <Link href={link.href}>
                    {isCollapsed ? (
                      <ChevronsRight className="h-4 w-4" />
                    ) : (
                      link.label
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
