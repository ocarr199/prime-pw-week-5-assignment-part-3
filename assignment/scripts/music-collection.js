console.log('***** Music Collection *****')
// Create variable collection
let collection = []
// create function addToCollection
function addToCollection(title, artist, yearPublished, tracks){
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  tracks: tracks,
  }
  collection.push(newAlbum)
  return newAlbum
}
console.log("*ADD 6 ALBUMS TO COLLECTION*");
console.log(addToCollection("Swimming", "Mac Miller", "2018",[{trackName:"Come Back To Earth", trackDuration:"2:42"}, {trackName:"What's The Use?", trackDuration:"4:49"}, {trackName:"Self Care", trackDuration:"5:45"}] ));
console.log(addToCollection("SATURATION", "BROCKHAMPTON", "2017", [{trackName:"Heat", trackDuration:"4:33"}, {trackName:"Gold", trackDuration:"4:26"}, {trackName:"Star", trackDuration:"2:41"}]));
console.log(addToCollection("Some Rap Songs", "Earl Sweatshirt", "2018", [{trackName:"Shattered Dreams", trackDuration:"2:21"}, {trackName:"Nowhere2Go", trackDuration:"1:54"}, {trackName:"Riot", trackDuration:"1:06"}]));
console.log(addToCollection("In Rainbows", "Radiohead", "2007", [{trackName:"15 step", trackDuration:"3:58"}, {trackName:"Nude", trackDuration:"4:15"}, {trackName:"All I Need", trackDuration:"3:49"}] ));
console.log(addToCollection("Animals", "Pink Floyd", "1977", [{trackName:"Pigs On The Wing", trackDuration:"1:26"}, {trackName:"Dogs", trackDuration:"17:06"}, {trackName:"Sheep", trackDuration:"10:06"}]));
console.log(addToCollection("Watching Movies With The Sound Off", "Mac Miller", "2013", [{trackName:"The Star Room", trackDuration:"4:38"}, {trackName:"I'm Not Real", trackDuration:"3:31"}, {trackName:"S.D.S.", trackDuration:"3:20"}]));
// console.log(collection);
console.log("Collection Array with 6 albums added");
console.log(collection)


// Create showCollection function
function showCollection(array){
  console.log(array.length + " albums in the collection");
  for(let i = 0; i < array.length;i++){

console.log(`${collection[i].title} by ${collection[i].artist}, published in the ${collection[i].yearPublished}:
  1. ${collection[i].tracks[0].trackName}: ${collection[i].tracks[0].trackDuration}
   2. ${collection[i].tracks[1].trackName}: ${collection[i].tracks[1].trackDuration}
   3. ${collection[i].tracks[2].trackName}: ${collection[i].tracks[2].trackDuration} `);
  }
}
console.log("*RUN SHOW COLLECTION FUNCTION*");
showCollection(collection)

function findByArtist(artist){
  let artistArray = []
  for(i=0; i<collection.length;i++){
    if(collection[i].artist === artist){
      artistArray.push(collection[i])
    }
  }
  if(artistArray.length === 0){
    return `${artist} is not is your collection`
} else {

}  return artistArray

}
console.log("*findByArtist WITH ARTISIT IN COLLECTION*");
console.log(findByArtist("Mac Miller"));
console.log("*findByArtist WITH ARTISIT NOT IN COLLECTION*");
console.log(findByArtist("Led Zeppelin"));

// Create universal input that can equal artist, year, or title


function search(object){
  let searchArray = [];
  if (object == "" || object == null || object == undefined || object.length == 0){
    return collection
  } else if (typeof object == "string"){
    for(let i in collection){
      if (object == collection[i].artist || object == collection[i].title || object == collection[i].yearPublished || object == collection[i].tracks[i] ){
        searchArray.push(collection[i])
      }
    }
  } else if (typeof object == "object"){
  for( let parameter of collection ){
    if(parameter.artist == object.artist){
      searchArray.push(parameter);
    }else if (parameter.artist == object.artist && parameter.yearPublished == object.yearPublished ) {
searchArray.push(parameter)
    }
  }
}
return searchArray;
}
console.log("SEARCH WITH ARTIST FIRST");
console.log(search("Mac Miller", "2018"));
console.log("SEARCH WITH YEAR FIRST");
console.log(search("2007", "Radiohead"));
// Not working
console.log(search("HEAT"));
console.log("EMPTY SEARCH");
console.log(search());
console.log("SEARCH WITH NO MATCHING");
console.log(search("Michael Jackson", "1982"));
