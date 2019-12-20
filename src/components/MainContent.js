import React from 'react';
import { ContainerWrapper } from '../styles/globalstyles';
import { CenterContentWrapper } from '../styles';
import { Sidebar } from './layout/Sidebar';
import { TopSection } from './TopSection';
import { PaymentSection } from './PaymentSection';
import { OverviewSection } from './OverviewSection';

export const Container = () => {

  return (
    <ContainerWrapper>
      <Sidebar />
      <CenterContentWrapper className="content_wrapper">
        <TopSection />
        <OverviewSection />
        <PaymentSection />
      </CenterContentWrapper>
    </ContainerWrapper>
  );
};
