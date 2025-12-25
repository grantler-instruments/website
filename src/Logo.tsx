const Logo = ({ height = 150, className = '' }) => {
  return (
    <img 
      src="/logo_v1.svg"
      alt="Grantler Instruments Logo"
      height={height}
      className={className}
    />
  );
};

export default Logo;