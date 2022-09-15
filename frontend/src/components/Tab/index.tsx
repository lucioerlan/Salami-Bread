import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

export type TabProps = {
  children?: React.ReactNode;
  dataTestId?: string;
  title?: string;
};

const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ title = '', children, ...rest }, ref) => (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
);

export default Tab;
