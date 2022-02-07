import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Grow,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import useStyles from "./styles";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Grow in>
      <Box>
        <AppBar position="sticky" sx={{ backgroundColor: "#121214" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <IconButton
                onClick={() => navigate(-1)}
                size="small"
                edge="start"
                color="primary"
                aria-label="go-back"
                sx={{ mr: 2 }}
              >
                <ArrowBackIosNewRounded sx={{ fontSize: "1.2rem" }} />
              </IconButton>
              <Typography
                sx={{ fontWeight: "bold", flexGrow: 1 }}
                component="div"
                classes={{ root: classes.logo }}
              >
                Move Movies
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Box mt="2vh" mx="2vw">
          {children}
        </Box>
      </Box>
    </Grow>
  );
};

export default Layout;
