interface IArrowIconProps {
  direction: string;
  color?: string;
  onClick?: () => void;
}

const ArrowIcon = ({ direction, color, ...rest }: IArrowIconProps) => {
  return (
    <>
      {direction === 'up' && (
        <svg {...rest} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z" fill={color || '#F8F9FA'} />
        </svg>
      )}
      {direction === 'down' && (
        <svg {...rest} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill={color || '#212529'} />
        </svg>
      )}
      {direction === 'left' && (
        <svg {...rest} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 5L8 12L15 19" stroke="#4E515C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  );
};

export default ArrowIcon;
