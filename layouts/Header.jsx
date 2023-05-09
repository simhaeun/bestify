import * as React from "react";
import styled from "@emotion/styled";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

const drawerWidth = "100%";
const navItems = ["기능소개", "고객사례", "문의하기", "블로그"];
const mobileNavItems = ["기능소개", "고객사례", "문의하기", "블로그", "무료이용"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <DrawerWrap onClick={handleDrawerToggle}>
      <Link href='/'>
        <LogoWrap>
        <Image
          src='/logo.png'
          alt=""
          width={80}
          height={20}
        />
        </LogoWrap>
      </Link>
      <List sx={{ pt: 2 }}>
        {mobileNavItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} sx={{ color: "#4e5968" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerWrap>
  );

  return (
    <AppBar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { lg: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Nav>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt=""
            width={100}
            height={25}
          />
        </Link>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button key={item}>
              <Link href={`/#${item}`}>{item}</Link>
            </Button>
          ))}
          <FreeBtn>
            <Link href='/demo'>
              무료이용시작
            </Link>
          </FreeBtn>
        </Box>
      </Nav>
      <MobileNav>
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </MobileNav>
    </AppBar>
  );
}
export default Header;

const AppBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 1rem;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.03), 0 0 5px rgba(0, 0, 0, 0.03);
  @media (max-width: 767px) {
    padding: 0.5rem 1.5rem;
  }
`;
const Nav = styled.nav`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1279px) {
    width: 100%;
    display: none;
  }
`;
const MobileNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
`;
const FreeBtn = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border-radius: 10px;
  line-height: 1.2em;
  cursor: pointer;
  background-color: #227eff;
  font-weight: 600;
  border: none;
  color: #fff;
  &:hover {
    background: #5e56f0;
  }
`;
const Button = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  margin-right: 1.5rem;
`;
const DrawerWrap = styled.div`
  padding: 1rem;
  height: 100vh;
  > h3 {
    padding: 1rem 0;
  }
`
const LogoWrap = styled.div`
  width: 90px;
  height: 23px;
`