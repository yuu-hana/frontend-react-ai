import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            100 days challenges - Frontend x React x Cursor
          </Typography>
          <Button color="inherit">登入</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          歡迎使用 Material UI
        </Typography>
        <Typography variant="body1" paragraph>
          這是一個使用 Material UI 組件的基本 React 應用程式。
        </Typography>
        <Button
          component={Link}
          to="/001"
          variant="contained"
          color="primary"
        >
          前往 Day 001
        </Button>
      </Container>
    </>
  );
}

export default Home; 