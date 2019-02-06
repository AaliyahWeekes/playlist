/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "Lovely",
    "Ascension",
    "Victorious "
];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = [
    "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi3maagrvPfAhWxneAKHWZVAwkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.nts.live%2Fartists%2F71007-billie-eilish&psig=AOvVaw3L46o24hogmh8Q5Ze9_dJo&ust=1547764503476098",
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fsonar.es%2Fsystem%2Fattached_images%2F19685%2Fmedium%2Fgorillaz-sonar-bcn-2018.jpg%3F1517486863&imgrefurl=https%3A%2F%2Fsonar.es%2Fen%2F2018%2Fartists%2Fgorillaz&docid=eLTMes5JjGz36M&tbnid=67C1AM-Pys5a8M%3A&vet=10ahUKEwit9vjxr_PfAhWKc98KHRYYAE0QMwhrKAEwAQ..i&w=1600&h=938&bih=610&biw=1366&q=gorillaz&ved=0ahUKEwit9vjxr_PfAhWKc98KHRYYAE0QMwhrKAEwAQ&iact=mrc&uact=8",
    "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiPkveHr_PfAhWmmOAKHdVtDiAQjRx6BAgBEAU&url=https%3A%2F%2Fsocialifestylemag.com%2F2016%2F01%2Fbrendon-urie-of-panic-at-the-disco-dishes-possible-collaborations-new-years-resolution-and-setting-himself-on-fire%2F&psig=AOvVaw0568MQVzInCE9W6ye4auO1&ust=1547764717476648"

];

var artists = [
    "Billie Ellish",
    "Gorillza",
    "Panic! At The Disco"
];

var lengths = [
    "318",
    "236",
    "258"
    ];

var songLinks = [
    "https://www.youtube.com/watch?v=V1Pl8CzNzCw",
    "https://www.youtube.com/watch?v=hBA0PUQCvIA",
    "https://www.youtube.com/watch?v=AUChk0lxF44"
];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    songLinks.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
