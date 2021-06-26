import axios from "axios";
import { Component } from "react";
import defaultProfileImg from "../img/default-icon.svg";
// import { NavLink } from "react-router-dom";

const URL_Movie = "https://api.themoviedb.org/3/movie/";
const API_KEY = "7f5c22cc3d00862e5e2a46a3605db11a";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `${URL_Movie}/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    this.setState({ cast: response.data.cast });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.cast.map(({ profile_path, name, character, cast_id }) => {
            return (
              <>
                <li key={cast_id}>
                  <img
                    width="170px"
                    height="250px"
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original/${profile_path}`
                        : defaultProfileImg
                    }
                    alt=""
                  />
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
