import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Link from 'next/link';

export default function Header({logo, title}: {logo: string, title: string}) {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'primary.dark'}}>
      <Toolbar sx={{display: 'flex'}}>
        <Link href={'/index'}>
          <img src={logo} alt='site logo' style={{ height: '50px', marginRight: '16px' }} />
        </Link>
        <Typography variant="h5" component="h2" color={'text.primary'} fontWeight={'bold'}  sx={{  ml: 2 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
);
  
}
