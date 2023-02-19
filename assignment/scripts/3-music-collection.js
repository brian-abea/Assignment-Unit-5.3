console.log('***** Music Collection *****')

// Empty variable collection

const collection = [];

// function addToCollection, and object

function addToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);

    return album;
}

// Adding albums to addToCollection function
addToCollection("Renaissance", "Beyonce", "2022");
console.log("New album:", addToCollection("Ruins", "Grouper", "2014"));
console.log("New album:", addToCollection("Teflon Don", "Rick ross", "2010"));
console.log("New album:", addToCollection("Islah", "Kevin Gates", "2016"));
console.log("New album:", addToCollection("Magic", "Nas", "2021"));
console.log("New album:", addToCollection("Tha Carter III", "Lil Wayne", "2008"));

// console collection array

console.log("collection:", collection);

// showCollection function

function showCollection(collection){
    console.log(`Number of items are: ${collection.length}`);
    for(const album of collection) {
        console.log(album.title, "by", album.artist + ",", "published in", album.yearPublished);
    }   
}
showCollection(collection);

// Find by artist function
function findByArtist(artist){
    const arrAlbum = [];
    for(const album of collection){
        if(album.artist === artist){
            arrAlbum.push(album);
        }
    return arrAlbum;
    }
}

// test the findByArtist
const results = findByArtist("Lil Wayne");
console.log("Album by artist:", results);
