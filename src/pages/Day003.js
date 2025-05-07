import { useState } from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

// 背景裝飾線條 SVG
const BgLines = () => (
  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(120)">
        <stop offset="0%" stopColor="#1B1532"/>
        <stop offset="100%" stopColor="#2B1B4B"/>
      </linearGradient>
      <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FF8B6A"/>
        <stop offset="100%" stopColor="#FFB199"/>
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#bg-grad)"/>
    <g opacity="0.5">
      <circle cx="300" cy="900" r="300" stroke="url(#line-grad)" strokeWidth="12" fill="none" />
      <circle cx="1600" cy="200" r="200" stroke="url(#line-grad)" strokeWidth="8" fill="none" />
      <path d="M0 900 Q400 700 800 900 T1920 900" stroke="url(#line-grad)" strokeWidth="8" fill="none" />
      <path d="M0 200 Q600 400 1200 200 T1920 200" stroke="url(#line-grad)" strokeWidth="6" fill="none" />
    </g>
  </svg>
);

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(120deg, #1B1532 0%, #2B1B4B 100%)',
}));

const CenterContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 600,
  margin: '0 auto',
}));

const Logo = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  margin: '0 auto 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const GradientText = styled('span')({
  background: 'linear-gradient(90deg, #FF8B6A 0%, #FFD6C0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontFamily: 'Inconsolata, monospace',
});

const TicketCard = styled(Paper)(({ theme }) => ({
  marginTop: 48,
  background: 'rgba(36, 28, 61, 0.95)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
  padding: '40px 32px',
  position: 'relative',
  minWidth: 420,
  maxWidth: 480,
  border: '2px solid #FF8B6A',
  overflow: 'visible',
}));

const TicketLogo = styled(Box)({
  width: 36,
  height: 36,
  marginBottom: 8,
});

const TicketDivider = styled(Box)({
  position: 'absolute',
  right: -32,
  top: '50%',
  transform: 'translateY(-50%)',
  width: 64,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
});

const TicketNotch = styled(Box)({
  width: 64,
  height: 24,
  background: '#1B1532',
  borderRadius: '0 0 32px 32px',
  position: 'absolute',
  left: '50%',
  top: -24,
  transform: 'translateX(-50%)',
  zIndex: 2,
  border: '2px solid #FF8B6A',
  borderTop: 'none',
});

const TicketAvatar = styled(Avatar)({
  width: 56,
  height: 56,
  marginRight: 16,
  border: '3px solid #FF8B6A',
  background: '#fff',
});

const TicketInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: 24,
});

const TicketNumber = styled(Typography)({
  position: 'absolute',
  right: 24,
  top: '50%',
  transform: 'translateY(-50%) rotate(90deg)',
  color: '#FF8B6A',
  fontFamily: 'Inconsolata, monospace',
  fontWeight: 700,
  fontSize: 20,
  opacity: 0.7,
  letterSpacing: 2,
});

function Day003() {
  // 假資料，實際應用時請用表單資料
  const name = 'Jonatan Kristof';
  const email = 'jonatan@email.com';
  const username = '@jonatankristof0101';
  const avatarUrl = 'https://randomuser.me/api/portraits/men/32.jpg';
  const ticketNumber = '#010609';

  return (
    <PageContainer>
      <BgLines />
      <CenterContent>
        <Logo>
          {/* Coding Conf 標誌 SVG */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#FF8B6A"/><path d="M13.5 13.5L20 20M20 20L26.5 26.5M20 20L26.5 13.5M20 20L13.5 26.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
        </Logo>
        <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Inconsolata, monospace', fontWeight: 700, letterSpacing: 1, mb: 2, textAlign: 'center' }}>
          Coding Conf
        </Typography>
        <Typography variant="h3" sx={{ color: '#fff', fontFamily: 'Inconsolata, monospace', fontWeight: 800, mb: 2, textAlign: 'center', fontSize: 40 }}>
          Congrats, <GradientText>Jonatan Kristof</GradientText>!<br />Your ticket is ready.
        </Typography>
        <Typography variant="body1" sx={{ color: '#fff', fontFamily: 'Inconsolata, monospace', fontWeight: 400, mb: 1, textAlign: 'center', fontSize: 18 }}>
          We&apos;ve emailed your ticket to <span style={{ color: '#FF8B6A', fontWeight: 700 }}>{email}</span> and will send updates in<br />the run up to the event.
        </Typography>
        {/* 票券區塊 */}
        <TicketCard elevation={0}>
          <TicketLogo>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#FF8B6A"/><path d="M13.5 13.5L20 20M20 20L26.5 26.5M20 20L26.5 13.5M20 20L13.5 26.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </TicketLogo>
          <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Inconsolata, monospace', fontWeight: 700, fontSize: 22, mb: 1 }}>
            Coding Conf
          </Typography>
          <Typography variant="body2" sx={{ color: '#B6AEE2', fontFamily: 'Inconsolata, monospace', fontWeight: 500, fontSize: 16, mb: 2 }}>
            Jan 31, 2025&nbsp;&nbsp;/&nbsp;&nbsp;Austin, TX
          </Typography>
          <TicketInfo>
            <TicketAvatar src={avatarUrl} alt={name} />
            <Box>
              <Typography variant="body1" sx={{ color: '#fff', fontFamily: 'Inconsolata, monospace', fontWeight: 700, fontSize: 20 }}>
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#B6AEE2', fontFamily: 'Inconsolata, monospace', fontWeight: 500, fontSize: 16 }}>
                {username}
              </Typography>
            </Box>
          </TicketInfo>
          {/* 裁切線與票號 */}
          <TicketDivider>
            <svg width="32" height="80" viewBox="0 0 32 80" fill="none"><rect x="14" width="4" height="80" rx="2" fill="#FF8B6A" opacity="0.3"/><circle cx="16" cy="8" r="3" fill="#1B1532" stroke="#FF8B6A" strokeWidth="2"/><circle cx="16" cy="72" r="3" fill="#1B1532" stroke="#FF8B6A" strokeWidth="2"/></svg>
          </TicketDivider>
          <TicketNumber>{ticketNumber}</TicketNumber>
          <TicketNotch />
        </TicketCard>
      </CenterContent>
    </PageContainer>
  );
}

export default Day003; 