console.log('***** Music Collection *****')

// Define collection array
let collection = [];

// Function to add objects with title, artist and year published to the existing collection array
function addToCollection(title, artist, yearPublished){
    let album = {
        title: title,
        artist: artist,
        year: yearPublished
    }
    collection.push(album);
    return true;
}