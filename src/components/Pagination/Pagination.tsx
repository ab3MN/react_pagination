import cn from 'classnames';
import { FC } from 'react';
import { getPagesCounter } from '../../utils/pagination/getPagesCounter';

interface IPagination {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPagination> = ({
  total: totalPages,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageCounter = getPagesCounter(totalPages);

  const prevPageHandler = () => {
    if (currentPage - 1 < 1) return;
    onPageChange(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage + 1 > totalPages) return;
    onPageChange(currentPage + 1);
  };

  return (
    <ul className="pagination">
      <li className={cn('page-item', { disabled: currentPage === 1 })}>
        <a
          data-cy="prevLink"
          className="page-link"
          href={`#${currentPage}`}
          aria-disabled={currentPage === 1}
          onClick={prevPageHandler}
        >
          «
        </a>
      </li>

      {pageCounter.map(page => (
        <li
          className={cn('page-item', { active: page === currentPage })}
          key={page}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      <li className={cn('page-item', { disabled: currentPage === totalPages })}>
        <a
          data-cy="nextLink"
          className="page-link"
          href={`#${currentPage}`}
          aria-disabled={currentPage === totalPages}
          onClick={nextPageHandler}
        >
          »
        </a>
      </li>
    </ul>
  );
};
