import React from "react";

export const CopyContent = (props) => {
  return (
    <svg
      {...props}
      focusable="false"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke-linecap="round"
      stroke-linejoin="round"
      data-testid="ContentCopyIcon"
      stroke="currentColor"
    >
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
    </svg>
  );
};
