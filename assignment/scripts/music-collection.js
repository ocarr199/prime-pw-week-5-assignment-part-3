console.log('***** Music Collection *****')
let collection = []
function addToCollection(title, artist, yearPublished){
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
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
    console.log(array[i].title + " by " + array[i].artist + ", published in " + array[i].yearPublished);
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


console.log(search("Mac Miller", "2018"));
console.log(search("Led Zeppelin", "1975"));
