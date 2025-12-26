import { useAudioStore } from "./stores/audio";

const Logo = ({ height = 150, className = "" }) => {
  const init = useAudioStore((state) => state.init);
  return (
    <img
      src="/logo_v1.svg"
      alt="Grantler Instruments Logo"
      height={height}
      className={className}
      onClick={() => init()}
    />
  );
};

export default Logo;
