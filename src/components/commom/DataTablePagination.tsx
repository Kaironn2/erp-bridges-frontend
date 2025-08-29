'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface DataTablePaginationProps {
  pagination: {
    count: number;
    next: string | null;
    previous: string | null;
  } | null;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}

const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      2,
      '...',
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function DataTablePagination({
  pagination,
  onPageChange,
  itemsPerPage = 50,
}: DataTablePaginationProps) {
  if (!pagination || pagination.count <= itemsPerPage) {
    return null;
  }

  const totalPages = Math.ceil(pagination.count / itemsPerPage);

  const getCurrentPage = () => {
    if (pagination.next) {
      const nextPageUrl = new URL(pagination.next);
      return Number(nextPageUrl.searchParams.get('page')) - 1;
    }
    if (pagination.previous) {
      const prevPageUrl = new URL(pagination.previous);
      return Number(prevPageUrl.searchParams.get('page') || '1') + 1;
    }
    if (!pagination.next && !pagination.previous && totalPages === 1) return 1;
    if (!pagination.next) return totalPages;
    return 1;
  };

  const currentPage = getCurrentPage();
  const pages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <div className="flex-1 text-sm text-muted-foreground">
        Total de {pagination.count} item(s).
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (pagination.previous) onPageChange(currentPage - 1);
              }}
              isActive={!!pagination.previous}
            />
          </PaginationItem>

          {pages.map((page, index) => (
            <PaginationItem key={index}>
              {page === '...' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(page as number);
                  }}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (pagination.next) onPageChange(currentPage + 1);
              }}
              isActive={!!pagination.next}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
