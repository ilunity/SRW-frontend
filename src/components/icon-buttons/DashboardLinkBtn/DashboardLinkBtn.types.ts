import { IconButtonLayoutProps } from '@/components/icon-buttons/IconButtonLayout/IconButtonLayout.types';

export type DashboardLinkBtnProps = Omit<IconButtonLayoutProps, 'children' | 'onClick' | 'title'>;
