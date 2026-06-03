import { useAudioStore } from "./stores/audio";

const Logo = ({ height = 150, className = "" }) => {
  const init = useAudioStore((state) => state.init);
  const gain = useAudioStore((state) => state.gain);
  return (
    <img
      src="/logo_v1.svg"
      alt="Grantler Instruments Logo"
      height={height}
      className={className}
      onClick={() => {
        if (gain > 0) init();
      }}
    />
  );
};

export default Logo;
