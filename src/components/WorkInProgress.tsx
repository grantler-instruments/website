import { Box, Typography } from '@mui/material';

export default function WIPBanner() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,            // changed from left
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: '50px',
          right: '-50px',     // mirror horizontal offset
          width: '250px',
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
          padding: '8px 0',
          transform: 'rotate(-45deg)', // reverse rotation
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          pointerEvents: 'auto',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '14px',
          }}
        >
          WORK IN PROGRESS
        </Typography>
      </Box>
    </Box>
  );
}
