import { Card, CardContent, Typography, Button, Switch, Box, Avatar } from '@mui/material';

function ExtensionCard({ icon, title, description, color, active, onToggle, onRemove }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 0, border: '1px solid #e0e5ec', width: '100%', minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1, height: '100%', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar sx={{ bgcolor: color, mr: 2 }}>
            {icon}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="text.primary">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="outlined" color="inherit" size="small" onClick={onRemove} sx={{ borderRadius: 2 }}>
            Remove
          </Button>
          <Switch checked={active} onChange={onToggle} color="error" />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExtensionCard; 