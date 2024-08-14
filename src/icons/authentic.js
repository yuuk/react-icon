import React from 'react';

const Authentic = props => {
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
      <path d="M24 43.469c-.292 0-.569-.125-.76-.342l-3.991-4.506-5.876 1.3a1.017 1.017 0 01-1.231-.894l-.58-5.99-5.518-2.402a1.016 1.016 0 01-.47-1.446l3.053-5.187-3.053-5.186a1.017 1.017 0 01.47-1.447l5.518-2.402.58-5.99a1.015 1.015 0 011.231-.895l5.876 1.3 3.99-4.505a1.017 1.017 0 011.52 0l3.991 4.505 5.876-1.3a1.017 1.017 0 011.231.894l.58 5.99 5.518 2.403a1.016 1.016 0 01.47 1.447l-3.052 5.186 3.052 5.187a1.017 1.017 0 01-.47 1.446l-5.518 2.402-.58 5.99a1.015 1.015 0 01-1.23.894l-5.877-1.3-3.99 4.506c-.193.217-.47.342-.76.342zm-4.387-6.985c.287 0 .566.122.76.342L24 40.92l3.625-4.094c.245-.276.62-.398.98-.319l5.34 1.181.527-5.443c.036-.367.268-.686.606-.834l5.014-2.182-2.774-4.714a1.016 1.016 0 010-1.03l2.773-4.714-5.014-2.182a1.015 1.015 0 01-.605-.834l-.526-5.444-5.34 1.182c-.361.08-.736-.043-.98-.319L23.998 7.08l-3.626 4.094c-.244.276-.62.398-.98.319l-5.34-1.181-.527 5.443a1.017 1.017 0 01-.605.834L7.907 18.77l2.774 4.714c.187.318.187.713 0 1.03L7.907 29.23l5.014 2.182c.339.148.57.467.605.834l.527 5.444 5.34-1.182c.073-.016.146-.023.22-.023z"></path>
      <path d="M21.028 30.872c-.307 0-.599-.139-.791-.378l-3.586-4.45a1.015 1.015 0 111.583-1.275l2.795 3.469 8.258-10.25a1.017 1.017 0 011.582 1.274l-9.05 11.232c-.193.24-.483.379-.79.379l-.001-.001z"></path>
    </svg>
  );
};

export default Authentic;
