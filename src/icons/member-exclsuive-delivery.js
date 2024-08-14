import React from 'react';

const MemberExclsuiveDelivery = props => {
  const { color = 'currentColor', size = 48, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill={color}
      {...otherProps}
    >
      <path d="M30.491 35.429a4.817 4.817 0 01-4.812-4.812 4.817 4.817 0 014.812-4.812 4.802 4.802 0 014.572 3.31l-1.609.528a3.112 3.112 0 00-2.963-2.144 3.122 3.122 0 00-3.118 3.118 3.122 3.122 0 003.118 3.118 3.129 3.129 0 002.931-2.05l1.591.58a4.827 4.827 0 01-4.522 3.164z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.248 40.076h31.504V8.572H8.248v31.504zm29.472-2.032H10.28v-27.44h9.196v9.209a1.32 1.32 0 002.048 1.103L24 19.283l2.478 1.633c.22.145.472.218.726.218h.003a1.322 1.322 0 001.32-1.321v-9.208h9.192v27.439zm-11.224-27.44v7.89l-2.494-1.644-2.494 1.644v-7.89h4.988z"
      ></path>
    </svg>
  );
};

export default MemberExclsuiveDelivery;
