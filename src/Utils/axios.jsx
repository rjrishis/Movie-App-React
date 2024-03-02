import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWIyOTZjMTE3Yzg0MjQ5ZGJkMzU0ZGQ0YTUwYmU4MyIsInN1YiI6IjY1ZDFiNGQ4NzdjMDFmMDE4NzBmNGYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zlw6owiRX00trrYFmao0uBLRRaW58Pm3WUlozk4bGlc'
    },
});

export default instance;