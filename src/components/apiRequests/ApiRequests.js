const API_KEY="06c19928f95108e96e21b4f345cc6b07" 
const requests = {
    popular:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    currentlyPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    upComming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page`,
    topRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page`,
    trending:`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
}
export default requests