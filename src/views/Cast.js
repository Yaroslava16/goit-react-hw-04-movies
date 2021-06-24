// import axios from "axios";
// import { Component } from "react";
// import { NavLink } from "react-router-dom";

// const URL_Movie = "https://api.themoviedb.org/3/movie/";
// const API_KEY = "7f5c22cc3d00862e5e2a46a3605db11a";

// class Cast extends Component {
//   state = {
//     casts: [],
//   };

//   async componentDidMount() {
//     const { movieId } = this.props.match.params;

//     const response = await axios.get(
//       `${URL_Movie}/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//     );
//     console.log(response.data);

//     // this.setState({ casts: response.data });
//   }
//   render() {
//     return (
//       <ul>
//         {this.state.casts.map((cast) => (
//           <li key={cast.id}>
//             <NavLink to={`${this.props.match.url}/${cast.id}`}>
//               {cast.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default Cast;
