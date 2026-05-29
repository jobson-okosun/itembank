import { TemplatesPageContent } from './templates-page-content.model';

export class TemplatesPage {
  totalElements: number;
  totalPages: number;
  size: number;
  content: TemplatesPageContent[] = [];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
  };
  empty: boolean;
}
