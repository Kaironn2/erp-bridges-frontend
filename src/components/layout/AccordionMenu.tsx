'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Settings, ChevronsRight, Store, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: 'E-commerce',
    icon: ShoppingBag,
    links: [
      { href: '/ecommerce/orders', label: 'Pedidos' },
      { href: '/ecommerce/customers', label: 'Clientes' },
    ],
  },
  {
    title: 'Lojas',
    icon: Store,
    links: [
      { href: '/stores/sales', label: 'Vendas' },
      { href: '/stores/mkt', label: 'Marketing' },
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
  const pathname = usePathname();

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
              {item.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className={clsx(
                      'w-full justify-start rounded-none px-3 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-secondary',
                      {
                        'border-l-4 border-secondary': isActive,
                      }
                    )}
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
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
