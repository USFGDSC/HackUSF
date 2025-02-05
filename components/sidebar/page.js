import { Box, Button } from '@mui/material';
import { UserButton } from '@clerk/nextjs';
import { useRouter, usePathname } from 'next/navigation';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

export default function Sidebar({isOpened, handleMenu}) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  return (
    <Box
      sx={{
        height: '100%',
        width: '280px',
        borderRight: '5px solid black',
        position: 'fixed',
        backgroundColor: '#f5f5f5',
        transform: isOpened ? 'translateX(0)' : { xs: 'translateX(-100%)', lg: 'translateX(0)' },
        transition: 'transform 0.3s ease-in-out',
        zIndex: 1100
      }}
    >

      <Box
        className={styles.links}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          p: 2,
          mt: 2
        }}
      >
        <Box pb={2}>
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: 70,
                  height: 70,
                },
              },
            }}
          />
        </Box>
        <Button
          className={styles.link}
          onClick={() => {
            router.push('/profile/apply')
            handleMenu()
          }}
          sx={{
            backgroundColor: pathname === '/profile/apply' ? '#88AAEE' : 'inherit', // Highlight active button
            padding: '1rem',
            fontSize: '1rem',
            color: 'black',
            fontWeight: 700,
            border: '3px solid black',
            borderRadius: '10px',
            boxShadow: pathname === '/profile/apply' ? '0px 0px 0px black' : '4px 4px 0px black', // Remove shadow if active
            transform: pathname === '/profile/apply' ? 'translate(3px, 3px)' : 'none', // Keep button pressed if active
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translate(3px, 3px)', // Move button down & right when clicked
              boxShadow: '0px 0px 0px black', // Shrink shadow slightly
              border: '3px solid black',
            },
          }}
        >
          Application
        </Button>
        <Button
          className={styles.link}
          onClick={() => {
            router.push('/profile')
            handleMenu()
          }}
          sx={{
            backgroundColor: pathname === '/profile' ? '#88AAEE' : 'inherit', // Highlight active button
            padding: '1rem',
            fontSize: '1rem',
            color: 'black',
            fontWeight: 700,
            border: '3px solid black',
            borderRadius: '10px',
            boxShadow: pathname === '/profile' ? '0px 0px 0px black' : '4px 4px 0px black', // Remove shadow if active
            transform: pathname === '/profile' ? 'translate(3px, 3px)' : 'none', // Keep button pressed if active
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translate(3px, 3px)', // Move button down & right when clicked
              boxShadow: '0px 0px 0px black', // Shrink shadow slightly
              border: '3px solid black',
            },
          }}
        >
          Profile
        </Button>
        <Button
          className={styles.link}
          onClick={() => router.push('/')}
          sx={{
            backgroundColor: pathname === '/' ? '#88AAEE' : 'inherit', // Highlight active button
            padding: '1rem',
            fontSize: '1rem',
            color: 'black',
            fontWeight: 700,
            border: '3px solid black',
            borderRadius: '10px',
            boxShadow: pathname === '/' ? '0px 0px 0px black' : '4px 4px 0px black', // Remove shadow if active
            transform: pathname === '/' ? 'translate(3px, 3px)' : 'none', // Keep button pressed if active
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translate(3px, 3px)', // Move button down & right when clicked
              boxShadow: '0px 0px 0px black', // Shrink shadow slightly
              border: '3px solid black',
            },
          }}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
