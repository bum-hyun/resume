interface ITextAlignIconProps {
  align?: string;
  size?: string;
  color?: string;
  onClick?: () => void;
}
const TextAlignIcon = ({ size, align, color, ...rest }: ITextAlignIconProps) => {
  return (
    <>
      {align === 'left' && (
        <svg {...rest} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 4.5H19.5V6H9V4.5ZM9 9H16.5V10.5H9V9ZM9 13.5H19.5V15H9V13.5ZM9 18H16.5V19.5H9V18ZM4.5 3H6V21H4.5V3Z" fill={color || '#212529'} />
        </svg>
      )}
      {align === 'center' && (
        <svg {...rest} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 4.5H19.5V6H4.5V4.5ZM7.5 9H16.5V10.5H7.5V9ZM4.5 13.5H19.5V15H4.5V13.5ZM7.5 18H16.5V19.5H7.5V18Z" fill={color || '#212529'} />
        </svg>
      )}
      {align === 'right' && (
        <svg {...rest} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 4.5H15V6H4.5V4.5ZM7.5 9H15V10.5H7.5V9ZM4.5 13.5H15V15H4.5V13.5ZM7.5 18H15V19.5H7.5V18ZM18 3H19.5V21H18V3Z" fill={color || '#212529'} />
        </svg>
      )}
      {!align && (
        <svg {...rest} width={size || '24'} height={size || '24'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 4.5H19.5V6H4.5V4.5ZM4.5 9H19.5V10.5H4.5V9ZM4.5 13.5H19.5V15H4.5V13.5ZM4.5 18H19.5V19.5H4.5V18Z" fill={color || '#212529'} />
        </svg>
      )}
    </>
  );
};

export default TextAlignIcon;
