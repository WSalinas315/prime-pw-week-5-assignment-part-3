console.log('***** Music Collection *****')

// Define collection array
let collection = [];

// Define arrays with track lists and durations for each album
let mOP = [{Name:'Battery',Duration:'5:13'},{Name:'Master of Puppets',Duration:'8:36'},{Name:'The Thing That Should Not Be',Duration:'6:36'},{Name:'Welcome Home (Sanitarium)',Duration:'6:27'},{Name:'Disposable Heroes',Duration:'8:17'},{Name:'Leper Messiah',Duration:'5:40'},{Name:'Orion',Duration:'8:27'},{Name:'Damage, Inc.',Duration:'5:32'}];
let sour =[{Name:'Brutal',Duration:'2:23'},{Name:'Traitor',Duration:'3:49'},{Name:'Drivers License',Duration:'4:02'},{Name:'1 Step Forward, 3 Steps Back',Duration:'2:43'},{Name:'Deja Vu',Duration:'3:35'},{Name:'Good 4 U',Duration:'2:58'},{Name:'Enough for You',Duration:'3:22'},{Name:'Happier',Duration:'2:55'},{Name:'Jealousy, Jealousy',Duration:'2:53'},{Name:'Favorite Crime',Duration:'2:32'},{Name:'Hope Ur OK',Duration:'3:29'}];
let kEA = [{Name:'Hit The Lights',Duration:'4:17'},{Name:'The Four Horsemen',Duration:'7:13'},{Name:'Motorbreath',Duration:'3:08'},{Name:'Jump In The Fire',Duration:'4:42'},{Name:'(Anesthesia)-Pulling Teeth',Duration:'4:15'},{Name:'Whiplash',Duration:'4:09'},{Name:'Phantom Lord',Duration:'5:02'},{Name:'No Remorse',Duration:'6:27'},{Name:'Seek & Destroy',Duration:'6:56'},{Name:'Metal Militia',Duration:'5:11'}];
let rIP = [{Name:'Holy Wars... The Punishment Due',Duration:'6:36'},{Name:'Hanger 18',Duration:'5:14'},{Name:'Take No Prisoners',Duration:'3:28'},{Name:'Five Magics',Duration:'5:42'},{Name:'Poison Was The Cure',Duration:'2:58'},{Name:'Lucretia',Duration:'3:58'},{Name:'Tornado of Souls',Duration:'5:22'},{Name:'Dawn Patrol',Duration:'1:50'},{Name:'Rust In Peace... Polaris',Duration:'5:36'}];
let tM = [{Name:'A Celebration For The Death Of Man...',Duration:'2:24'},{Name:'In The Shadow Of Our Pale Companion',Duration:'14:45'},{Name:'Odal',Duration:'7:39'},{Name:'I Am The Wooden Doors',Duration:'6:11'},{Name:'The Lodge',Duration:'4:40'},{Name:'You Were But A Ghost In My Arms',Duration:'9:15'},{Name:'The Hawthorne Passage',Duration:'11:19'},{Name:'...And The Great Cold Death Of The Earth',Duration:'7:14'},{Name:'A Desolation Song',Duration:'5:08'}];
let details = [{Name:'Let Go',Duration:'4:13'},{Name:'Breathe In',Duration:'4:27'},{Name:`It's Good To Be In Love`,Duration:'4:39'},{Name:'Must Be Dreaming',Duration:'4:01'},{Name:'Psychobabble',Duration:'5:33'},{Name:'Only Got One',Duration:'4:09'},{Name:'Shh',Duration:'5:34'},{Name:'Hear Me Out',Duration:'4:19'},{Name:'Maddening Sound',Duration:'3:37'},{Name:'Flicks',Duration:'3:58'},{Name:'The Dumbing Down Of Love',Duration:'4:44'}];

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
    if(searchCriteria == null){
        return collection;
    } else{
    let results = [];
    for(let i =0; i<collection.length;i++){
        if(searchCriteria.Artist == collection[i].Artist && searchCriteria.Year == collection[i].Year){
            results.push(collection[i]);
        }
    }
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
console.log('Testing search function for null input. Expecting entire collection returned.', search());