import React, { createContext, useState, useCallback } from "react";
import api from "../services/api";

interface MoviesData {
  sites: Array<Sites>;
  loading: boolean;
  getSites(movie: string): Promise<void>;
}

interface Sites {
  image_sites: string;
  name_sites: string;
  link_sites: Array<any>;
  has_links: boolean;
}

export const MoviesContext = createContext<MoviesData>({} as MoviesData);

const MoviesProvider: React.FC = ({ children }) => {
  const [sites, setSites] = useState<Array<Sites>>([]);
  const [loading, setLoading] = useState(false);

  const _sitesImages = (name: string) => {
    switch (name.toLowerCase()) {
      case "filmeseries":
        return "https://filmeseries.top/images/site.png";
      case "pobreflix":
        return "https://pobreflix.online/wp-content/uploads/2021/04/pobreflixonline.png";
      case "superflix":
        return "https://superflix.vc/wp-content/uploads/2021/09/superflix.svg";
      case "topflix":
        return "https://scontent-gru1-1.xx.fbcdn.net/v/t1.6435-9/100784471_102004048204090_2595132008904523776_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeE29u7N2Fwj4TrIVu6VxCjNZDXB2SMe0PNkNcHZIx7Q83x-D3K-98EPgXTu6Yp9bsOTHKgq3zOACix_mQhRsHS-&_nc_ohc=8tifY0JwCIQAX-TOMj_&_nc_ht=scontent-gru1-1.xx&oh=00_AT-bYUAcRsACncaqef1z-qFKpXLsTB7zagfX90Zzl8eAaA&oe=622354C5";
      case "vizer":
        return "https://vizer.tv/img/logo.png";
      default:
        return "";
    }
  };

  const getSites = useCallback(async (movie: string) => {
    try {
      setLoading(true);
      const movies = await api.get("search", {
        params: { q: movie.replace(/\s/g, "-").toLowerCase() },
      });
      const images = await api.get("imdb", {
        params: { q: movie.replace(/\s/g, "-").toLowerCase() },
      });

      const _sites: Array<Sites> = Object.entries(movies.data)
        .map((data) =>
          Array.isArray(data[1])
            ? {
                image_sites: _sitesImages(data[0].split(".")[0]),
                name_sites: data[0].split(".")[0],
                link_sites: data[1].map((dt) => {
                  const dt_split = dt.split("/");
                  const temp_name = dt_split.pop();
                  let name = !Boolean(temp_name) ? dt_split.pop() : temp_name;
                  name = name.replace(/-/g, " ");
                  name = name.charAt(0).toUpperCase() + name.slice(1);
                  const link = {
                    url: dt,
                    name,
                  };
                  return link;
                }),
                has_links: Boolean(data[1].length),
              }
            : {
                image_sites: "",
                name_sites: "",
                link_sites: [{}],
                has_links: false,
              }
        )
        .filter((data) => data.has_links);
      setSites(_sites);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <MoviesContext.Provider value={{ sites, loading, getSites }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
