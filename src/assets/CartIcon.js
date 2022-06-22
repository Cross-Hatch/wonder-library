const CartIcon = ({color}) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7581 14.5643H37.7879C38.3356 14.5643 38.8772 14.6791 39.3778 14.9012C39.8784 15.1234 40.3269 15.448 40.6944 15.854C41.0619 16.2601 41.3403 16.7387 41.5115 17.259C41.6827 17.7792 41.743 18.3296 41.6885 18.8745L40.5124 30.6352C40.4157 31.6025 39.963 32.4994 39.2422 33.1517C38.5214 33.804 37.584 34.1653 36.6118 34.1653H17.8928C16.9862 34.1657 16.1075 33.8518 15.4063 33.2771C14.7051 32.7024 14.2248 31.9025 14.0471 31.0135L10.7581 14.5643Z"
        stroke={color}
        strokeWidth="3.92021"
        strokeLinejoin="round"
      />
      <path
        d="M10.7579 14.5643L9.17019 8.20768C9.06401 7.78381 8.81924 7.40758 8.47476 7.13874C8.13028 6.86991 7.70585 6.72389 7.26889 6.72388H4.87756"
        stroke={color}
        strokeWidth="3.92021"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6381 42.0057H20.5583"
        stroke={color}
        strokeWidth="3.92021"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.319 42.0057H36.2392"
        stroke={color}
        strokeWidth="3.92021"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartIcon;
