import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import HeaderBar from '../components/001/HeaderBar';
import FilterTabs from '../components/001/FilterTabs';
import ExtensionList from '../components/001/ExtensionList';
import '../assets/001/main.css';
import '../assets/001/buttonStyle.css';
import data from '../data/001/data.json';

// 將 data.json 轉換為 ExtensionList 需要的格式
const EXTENSIONS = data.map((item, idx) => ({
  id: idx + 1,
  icon: <img src={item.logo.replace('./assets', '/assets')} alt={item.name} style={{ width: 28, height: 28 }} />, // 以 Avatar src 呈現
  title: item.name,
  description: item.description,
  color: '#f5f5f5', // 可根據需求調整顏色
  active: item.isActive,
}));

function Day001() {
  const [tab, setTab] = useState('active');
  const [extensions, setExtensions] = useState(EXTENSIONS);

  const handleTabChange = (e, value) => setTab(value);

  const handleToggle = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, active: !ext.active } : ext
      )
    );
  };

  const handleRemove = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  const filtered =
    tab === 'all'
      ? extensions
      : tab === 'active'
      ? extensions.filter((ext) => ext.active)
      : extensions.filter((ext) => !ext.active);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-background)', padding: '0 64px' }}>
      <Container maxWidth="xl" sx={{ py: 2, px: 0 }}>
        <HeaderBar />
        <div style={{ maxWidth: 1296, margin: '0 auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 1, justifyContent: 'space-between' }}>
            <Typography variant="h4" fontWeight={700} sx={{ m: 0, lineHeight: '40px', display: 'flex', alignItems: 'center' }}>
              Extensions List
            </Typography>
            <FilterTabs value={tab} onChange={handleTabChange} tabSx={{ minHeight: 0, height: 40, alignSelf: 'center', display: 'flex', alignItems: 'center' }} tabButtonSx={{ height: 40, minHeight: 0, fontSize: 16, px: 2 }} />
          </Box>
          <ExtensionList
            extensions={filtered}
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
        </div>
      </Container>
    </div>
  );
}

export default Day001; 