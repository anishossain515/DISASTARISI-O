export const Plus = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const Cross = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

export const Search = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};

export const Bar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const CheatOpen = (props) => {
  return (
    <svg
      width="19"
      height="41"
      viewBox="0 0 19 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.8192 40.552C6.912 40.552 4.6856 39.724 3.14 38.068C1.6312 36.412 0.8768 34.0752 0.8768 31.0576V10.3024C0.8768 7.2848 1.6312 4.948 3.14 3.292C4.6856 1.636 6.912 0.808 9.8192 0.808C12.7264 0.808 14.9344 1.636 16.4432 3.292C17.9888 4.948 18.7616 7.2848 18.7616 10.3024V14.3872H13.0208V9.916C13.0208 7.524 12.0088 6.328 9.9848 6.328C7.9608 6.328 6.9488 7.524 6.9488 9.916V31.4992C6.9488 33.8544 7.9608 35.032 9.9848 35.032C12.0088 35.032 13.0208 33.8544 13.0208 31.4992V25.5928H18.7616V31.0576C18.7616 34.0752 17.9888 36.412 16.4432 38.068C14.9344 39.724 12.7264 40.552 9.8192 40.552Z"
        fill="white"
      />
    </svg>
  );
};

export const CheatClose = (props) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_448)">
        <path
          d="M26.8369 11.1641L11.1627 26.8383"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.1631 11.1641L26.8373 26.8383"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_448">
          <rect width="38" height="38" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
