import axios from "axios";
import { Component } from "react";

const URL_Reviews = "https://api.themoviedb.org/3/movie/";

const API_KEY = "7f5c22cc3d00862e5e2a46a3605db11a";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `${URL_Reviews}/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    this.setState({ reviews: response.data.results });
  }

  render() {
    return (
      <>
        {this.state.reviews.length > 0 ? (
          <ul>
            {this.state.reviews.map(({ id, author, content }) => {
              return (
                <>
                  <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                  </li>
                </>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </>
    );
  }
}

export default Reviews;
