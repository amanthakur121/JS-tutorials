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
  const tit = movies.filter(function(movie){
    return movie.score > 80; 
 })