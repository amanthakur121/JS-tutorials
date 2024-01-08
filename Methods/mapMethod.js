const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
square = numbers.map(function(n){
    return n*n
});



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
  const tit = movies.map(function(movie){
    return movie.title.toUpperCase();
 })