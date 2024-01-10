// const greet = (name) => {
//     console.log(`Hey ${name}!`);
// }


const movies = [
    {
        title: 'Iron Man',
        score : 80
    },
    {
        title: 'Avengers',
        score : 90
    },
    {
        title: 'Shiva ji the Boss!!',
        score : 100
    },
    {
        title: 'Harry poter',
        score : 97
    }
    
 ]
 const newMovies  = movies.map(movie=> (
    `${movie.title}- ${movie.score/10}`
 ))