import { ReactNode } from 'react';
import { CheckUserExistsLayout } from 'src/components/page-layouts/CheckUserExistsLayout';
import { StandardLayout } from 'src/components/page-layouts/StandardLayout';
import { EmptyPageLayout } from 'src/components/page-layouts/EmptyPageLayout';

type LayoutType = (page: ReactNode) => ReactNode;

export class LayoutConstructor {
  layouts: LayoutType[] = [];

  constructor() {
    this.layouts = [];
  }

  build(elem: ReactNode) {
    return this.layouts.reduce((previousValue: ReactNode, currentValue) => {
      return currentValue(previousValue);
    }, elem);
  }

  standard() {
    this.layouts.push((page: ReactNode) => {
      return (
        <StandardLayout>
          { page }
        </StandardLayout>
      );
    });

    return this;
  }

  empty() {
    this.layouts.push((page: ReactNode) => {
      return (
        <EmptyPageLayout>
          { page }
        </EmptyPageLayout>
      );
    });

    return this;
  }

  checkUserExists() {
    this.layouts.push((page: ReactNode) => {
      return (
        <CheckUserExistsLayout>
          { page }
        </CheckUserExistsLayout>
      );
    });

    return this;
  }
}
