import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Grow,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { MoviesContext } from "../../context/Movies";
import Layout from "../../layout";

interface Sites {
  image_sites: string;
  name_sites: string;
  link_sites: Array<any>;
  has_links: boolean;
}

export default function Movies() {
  const params = useParams();
  const context = useContext(MoviesContext);
  const [provider, setProvider] = useState<Sites>();
  const { sites } = context;

  useEffect(() => {
    const _provider = sites.find((site) => site.name_sites === params.provider);
    setProvider(_provider);
  }, [params, sites]);

  return (
    <Layout>
      {provider ? (
        <>
          <Box mb="2vh" display="flex" flexDirection="column" maxHeight="35vh">
            <Avatar
              alt={provider.name_sites}
              src={provider.image_sites}
              sx={{
                width: "25vw",
                height: "auto",
                maxHeight: "20vh",
                marginBottom: "2vh",
              }}
              variant="square"
            />
            <Typography noWrap color="primary" variant="h6" fontWeight="bold">
              {provider.name_sites}
            </Typography>
          </Box>
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            {provider.link_sites.map((link, index) => (
              <Grow key={index} in timeout={index * 1000}>
                <ListItemButton divider>
                  <Typography
                    noWrap
                    color="primary"
                    variant="body2"
                    fontWeight="bold"
                    onClick={() => window.open(link.url)}
                  >
                    {link.name}
                  </Typography>
                </ListItemButton>
              </Grow>
            ))}
          </List>
        </>
      ) : (
        <div />
      )}
    </Layout>
  );
}
