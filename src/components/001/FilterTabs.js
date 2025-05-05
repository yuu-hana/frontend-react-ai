import { Tabs, Tab, Box } from '@mui/material';

function FilterTabs({ value, onChange, tabSx = {}, tabButtonSx = {} }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Tabs
        value={value}
        onChange={onChange}
        aria-label="filter tabs"
        sx={{
          background: 'transparent',
          borderRadius: 2,
          minHeight: 0,
          ...tabSx,
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        <Tab label="All" value="all" sx={{
          px: 3,
          py: 0,
          borderRadius: 2,
          fontWeight: value === 'all' ? 700 : 400,
          color: '#222',
          background: value === 'all' ? '#d32d2f' : '#fff',
          mr: 1,
          boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '40px',
          minHeight: 40,
          height: 40,
          '&.Mui-selected': {
            color: '#fff',
          },
          ...tabButtonSx,
        }} />
        <Tab label="Active" value="active" sx={{
          px: 3,
          py: 0,
          borderRadius: 2,
          fontWeight: value === 'active' ? 700 : 400,
          color: '#222',
          background: value === 'active' ? '#d32d2f' : '#fff',
          mr: 1,
          boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '40px',
          minHeight: 40,
          height: 40,
          '&.Mui-selected': {
            color: '#fff',
          },
          ...tabButtonSx,
        }} />
        <Tab label="Inactive" value="inactive" sx={{
          px: 3,
          py: 0,
          borderRadius: 2,
          fontWeight: value === 'inactive' ? 700 : 400,
          color: '#222',
          background: value === 'inactive' ? '#d32d2f' : '#fff',
          boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '40px',
          minHeight: 40,
          height: 40,
          '&.Mui-selected': {
            color: '#fff',
          },
          ...tabButtonSx,
        }} />
      </Tabs>
    </Box>
  );
}

export default FilterTabs; 