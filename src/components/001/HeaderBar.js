import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function HeaderBar() {
  return (
    <AppBar position="static" color="default" elevation={4} sx={{ borderRadius: 3, mt: 2, mb: 0, background: '#fff', boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)', width: 1296, margin: '0 auto', marginBottom: '64px' }}>
      <Toolbar disableGutters sx={{ minHeight: 64 }}>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
                boxShadow: 1,
              }}
            >
              {/* 這裡可放 LOGO SVG 或圖片 */}
              <img src="/logo192.png" alt="logo" width={32} height={32} />
            </Box>
            <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
              Extensions
            </Typography>
          </Box>
          {/* 右側月亮 icon 按鈕，方形且圓角 */}
          <IconButton color="inherit" sx={{ borderRadius: 2, border: '1px solid #e0e5ec', background: '#f6f8fc', width: 40, height: 40 }}>
            <DarkModeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderBar; 