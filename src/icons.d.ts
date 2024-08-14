/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const DutyFreeShopping: Icon;
export const InstaxTaxRefund: Icon;
export const Authentic: Icon;
export const GlobalGuarantee: Icon;
export const BeautyConciergeService: Icon;
export const SpaMassage: Icon;
export const MemberExclsuiveDelivery: Icon;
export const ClickCollect: Icon;
export const PersonalShopper: Icon;
