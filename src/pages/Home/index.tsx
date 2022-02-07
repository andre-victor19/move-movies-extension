import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/Movies";
import {
  Box,
  Fab,
  FormControl,
  FormHelperText,
  Grid,
  Grow,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import Loading from "../Loading";
import useStyles from "./styles";

const Home: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const context = useContext(MoviesContext);
  const { loading, getSites } = context;

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        console.log(url);
      });
  }, []);

  const _search = useCallback(
    async (search: string) => {
      await getSites(search);
      navigate("/sites");
    },
    [getSites, navigate]
  );

  return (
    <Grow in>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Box width="100%">
          {loading ? (
            <Loading />
          ) : (
            <Box px="10vw">
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Box className={classes.rootLogo}>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      classes={{ root: classes.logo }}
                    >
                      Move Movies
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <FormControl fullWidth variant="standard">
                    <OutlinedInput
                      id="search-movie"
                      placeholder="Pesquisar"
                      size="small"
                      fullWidth
                      classes={{ root: classes.textfield }}
                      onKeyPress={({ charCode }) =>
                        charCode === 13 && _search(search)
                      }
                      onChange={({ target: { value } }) => setSearch(value)}
                    />
                    <FormHelperText sx={{ color: "#8257e5" }}>
                      Escolha um filme, e deixe o resto com a gente!
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "center" }}>
                  <Fab
                    disabled={!search}
                    size="small"
                    color="primary"
                    onClick={() => _search(search)}
                  >
                    <SearchRounded />
                  </Fab>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>
    </Grow>
  );
};

export default Home;
