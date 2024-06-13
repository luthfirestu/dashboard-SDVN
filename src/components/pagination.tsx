"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  count: number;
}

const Pagination = ({ count }: PaginationProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = parseInt(searchParams.get("page") || "1");
  const ITEM_PER_PAGE = 10;
  const totalPages = Math.ceil(count / ITEM_PER_PAGE);

  const params = new URLSearchParams(searchParams);

  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const handleChangePage = (newPage: number) => {
    params.set("page", newPage.toString());
    replace(`${pathname}?${params}`);
  };

  const renderPageNumbers = () => {
    let pages: (number | string)[] = [];

    if (totalPages <= 5) {
      // Less than 5 total pages so show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // More than 5 total pages
      if (page <= 3) {
        pages = [1, 2, 3, 4, 5];
        if (totalPages > 5) pages.push("...");
        if (totalPages > 5) pages.push(totalPages);
      } else if (page > totalPages - 3) {
        pages = [1, "..."];
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages = [1, "...", page - 1, page, page + 1, "...", totalPages];
      }
    }

    return pages.map((p, index) =>
      typeof p === "number" ? (
        <button
          key={index}
          className={`join-item btn btn-xs btn-accent ${p === page ? "btn-active" : ""}`}
          onClick={() => handleChangePage(p)}
        >
          {p}
        </button>
      ) : (
        <span key={index} className="join-item btn btn-xs btn-disabled">
          {p}
        </span>
      )
    );
  };

  return (
    <div className="flex gap-2 mt-4 justify-end">
      <button
        className="join-item btn btn-xs btn-accent"
        disabled={!hasPrev}
        onClick={() => handleChangePage(page - 1)}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className="join-item btn btn-xs btn-accent"
        disabled={!hasNext}
        onClick={() => handleChangePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
