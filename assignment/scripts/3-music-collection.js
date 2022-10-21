console.log('***** Music Collection *****')

// Define collection array
let collection = [];

// Function to add objects with title, artist and year published to the existing collection array
function addToCollection(title, artist, yearPublished){
    let album = {
        Title: title,
        Artist: artist,
        Year: yearPublished
    }
    collection.push(album);
    return album;
}

// Adding 6 albums to my collection
console.log('Adding first album:', addToCollection('Master of Puppets','Metallica', '1986'));
console.log('Adding first album:', addToCollection('Sour','Olivia Rodrigo', '2021'));
console.log('Adding first album:', addToCollection(`Kill'em All`,'Metallica', '1983'));
console.log('Adding first album:', addToCollection('Rust in Peace','Megadeth', '1990'));
console.log('Adding first album:', addToCollection('The Mantle','Agalloch', '2002'));
console.log('Adding first album:', addToCollection('Details','Frou Frou', '2002'));

// Log my collection to the console
console.log('My record collection:', collection);

// Function to take in an array of album objects and publish album information for each item to the console
function showCollection(discs){
    console.log('There are', discs.length,'items in this collection.');
    for(let disc of discs){
        console.log(disc.Title,'by',disc.Artist +', published in',disc.Year);
    }
    return true;
}

// Testing showCollection with my collection
showCollection(collection);

// Function to check if any objects in my collection are by a given artist
function findByArtist(artist){
    let searchResults = [];
    for(let record of collection){
        if(record.Artist == artist){
            searchResults.push(record);
        }
    }
    return searchResults;
}

// Testing the findByArtist function for an artist with 2 matchs, 1 match and 0 matches
console.log('Searching for Metallica. Expecting two matches.', findByArtist('Metallica'));
console.log('Searching for Frou Frou. Expecting one match.', findByArtist('Frou Frou'));
console.log('Searching for Foster The People. Expecting no matches.', findByArtist('Foster The People'));

//Stretch goals
// Create search function to compare both the Artist and Year of an input object to every album in my colletion looking for
// matches on both items
function search(searchCriteria){
    let results = [];
    for(let i =0; i<collection.length;i++){
        if(searchCriteria.Artist == collection[i].Artist && searchCriteria.Year == collection[i].Year){
            results.push(collection[i]);
        }
    }
    if(searchCriteria == null){
        return collection;
    } else {
        return results;
    }
}

// Create object for search criteria
const rayCharles = {
    Artist: 'Ray Charles',
    Year: '1957'
}

// Create another object for search criteria
const metallica = {
    Artist: 'Metallica',
    Year: '1986'
}

// Test search function
console.log('Testing search function for Ray Charles in 1957. Expecting empty array.', search(rayCharles));
console.log('Testing search function for Metallica in 1986. Expecting 1 result.', search(metallica));