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

// log my collection to the console
console.log('My record collection:', collection);


