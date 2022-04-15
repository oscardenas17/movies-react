const API= "https://api.themoviedb.org/3"

export function get(path){
   return  fetch(API + path, {
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgyZmUxZDdhMTkxYzVmZTQwOWRkNmYzOTA0MTEzYSIsInN1YiI6IjYyNThiZjhlZjU0ODM2MDA5ZTUxMjNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FTXUUdd1P7r5VIiZIbjccrctbFfj5l4W4wRtmtjQ2MA",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then( (result) => result.json() )
}