import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../context/Movies";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grow,
  Tooltip,
  Typography,
} from "@mui/material";
import Layout from "../../layout";

const Movies: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const { sites } = context;

  return (
    <Layout>
      <Box mb="2vh">
        <Typography color="primary" variant="body2" fontWeight="bold">
          Encontramos alguns sites que tem o título semelhante, escolha um para
          listarmos os títulos encontrados.
        </Typography>
      </Box>
      <Box display="flex">
        {sites.map((site, index) => (
          <Grow in key={site.name_sites} timeout={index * 1000}>
            <Card
              sx={{
                width: "20vw",
                height: "50vh",
                backgroundColor: "#121214",
                marginLeft: index > 0 ? "2vw" : "0",
              }}
            >
              <CardActionArea
                sx={{ height: "100%" }}
                onClick={() => navigate(`/movies/${site.name_sites}`)}
              >
                <Tooltip title={site.name_sites} placement="top">
                  <CardMedia
                    component="img"
                    height="140"
                    image={site.image_sites}
                    sx={{ height: "auto" }}
                    alt={site.name_sites}
                  />
                </Tooltip>
              </CardActionArea>
            </Card>
          </Grow>
        ))}
      </Box>
    </Layout>
  );
};

export default Movies;
