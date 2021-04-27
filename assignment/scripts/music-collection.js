console.log('***** Music Collection *****')
let collection = []
function addToCollection(title, artist, yearPublished,tracks){
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: []
  }
  collection.push(newAlbum)
  return newAlbum
}
console.log(addToCollection("Swimming", "Mac Miller", "2018"));
console.log(addToCollection("SATURATION", "BROCKHAMPTON", "2017"));
console.log(addToCollection("Some Rap Songs", "Earl Sweatshirt", "2018"));
console.log(addToCollection("In Rainbows", "Radiohead", "2007"));
console.log(addToCollection("Animals", "Pink Floyd", "1977"));
console.log(addToCollection("Wtching Movies With The Sound Off", "Mac Miller", "2013"));
// console.log(collection);
console.log(collection)


function showCollection(array){
  console.log(array.length);
  for(let i = 0; i < array.length;i++){
    console.log(array[i].title + " by " + array[i].artist + ", published in " + array[i].yearPublished );
  }
}
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
console.log(findByArtist("Mac Miller"));
console.log(findByArtist("Led Zeppelin"));

// Create universal input that can equal artist, year, or title
function search(object1, object2){
  if ((object1 == "")&&(object2 == "")){
    return collection
  }
  let searchArray = [];
  for(let i in collection){
    if((collection[i].artist == object1 || collection[i].yearPublished == object1) && (collection[i].artist == object2 || collection[i].yearPublished == object2)){
      searchArray.push(collection[i])
    }
  }
  return searchArray;
}
console.log(search("Mac Miller", "2018"));
