'use client';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import * as Styled from './page.styled';
import { IRootParams } from './types';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { usePathname } from 'next/navigation';

import SelectLanguage from '@components/select-language';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HeaderPage = ({ locale, langHeader: pages }: IRootParams) => {
  const [mobileRightMenu, setMobileRightMenu] = React.useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const pathname = usePathname();
  const theme = useTheme();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlerToggleMenu = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setMobileRightMenu(state);
  };

  function companyLogo() {
    return (
      <Image src="/images/Next.js-logo.png" alt="Company Logo" fill quality={100} sizes="56vw" />
    );
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}>
      <Box sx={{ backgroundColor: '#B31312' }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: '50px',
              [theme.breakpoints.down('sm')]: {
                padding: '0.5rem 0',
              },
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1rem',
                [theme.breakpoints.up('sm')]: {
                  gap: '2rem',
                  flexDirection: 'row',
                },
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                <LocalPhoneIcon />
                <Typography variant="subtitle2">+90 555 555 55 55</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                <EmailIcon />
                <Typography
                  component="a"
                  href="/"
                  color="white"
                  sx={{ ':hover': { textDecoration: 'underline' } }}
                  variant="subtitle2">
                  info@firmadi.com.tr
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              {<SelectLanguage locale={locale} pathname={pathname} color={'white'} />}
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ color: '#191919' }}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {
              paddingTop: '1rem',
            },
          }}>
          <Box
            sx={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' },
            }}>
            <Box sx={{ width: '68px', height: '48px', position: 'relative' }}>{companyLogo()}</Box>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href={`/${locale ?? locale}`}
              sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}>
              FİRMA ADI
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
              borderBottom: '1px solid rgba(0,0,0,0.16)',
              padding: '0.7rem 0 0.4rem 0',
              [theme.breakpoints.up('sm')]: {
                borderTop: '1px solid rgba(0,0,0,0.16)',
                marginTop: '1rem',
                padding: '1rem 0',
              },
            }}>
            <Container maxWidth="xl">
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  [theme.breakpoints.up('sm')]: {
                    position: 'relative',
                  },
                }}>
                {/* Only Mobile Visible */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Box sx={{ width: '56px', height: '42px', position: 'relative' }}>
                    {companyLogo()}
                  </Box>
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href={`/${locale ?? locale}`}
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      color: 'inherit',
                      textDecoration: 'none',
                    }}>
                    FİRMA ADI
                  </Typography>
                </Box>

                {/* Only Mobile Visible */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, position: 'relative' }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handlerToggleMenu(true)}
                    color="inherit">
                    <MenuIcon />
                  </IconButton>

                  <Drawer anchor="right" open={mobileRightMenu} onClose={handlerToggleMenu(false)}>
                    <Box
                      sx={{ width: 250 }}
                      role="presentation"
                      onClick={handlerToggleMenu(false)}
                      onKeyDown={handlerToggleMenu(false)}>
                      <List>
                        {pages.map((page, index) => (
                          <ListItem key={index} disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                              </ListItemIcon>
                              <ListItemText primary={page.label} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                      <Divider />
                      <List>
                        {pages.map((page, index) => (
                          <ListItem key={index} disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                              </ListItemIcon>
                              <ListItemText primary={page.label} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Drawer>
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    gap: 3,
                    [theme.breakpoints.up('sm')]: {
                      justifyContent: 'center',
                    },
                  }}>
                  {pages.map((page, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      noWrap
                      component="span"
                      sx={{ ':hover': { fontWeight: '700' } }}>
                      <Link
                        key={index}
                        href={'/' + (locale && locale) + page.path}
                        onClick={() => mobileRightMenu && handlerToggleMenu(false)}
                        style={{ color: 'inherit' }}
                        title={page.label}>
                        {page.label}
                      </Link>
                    </Typography>
                  ))}
                </Box>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {<SelectLanguage locale={locale} pathname={pathname} color={'black'} />}
                </Box>
              </Box>
            </Container>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default HeaderPage;
