let sing =() => {
    let string1 = "99 bottles of beer on the wall, 99 bottles of beer.";
    let string2 = "Take one down and pass it around, 98 bottles of beer on the wall.";
    const song = []

    for(let i = 99; i > 1; i--){
        
        string1 = string1.split(" ");
        string2 = string2.split(" ");
        string1[0] = string1[7] = i;
        string2[7] = i - 1;
        
        if(i === 2) string2[8] = "bottle";

        string1 = string1.join(" ");
        string2 = string2.join(" ");
        song.push(string1);
        song.push(string2);
    }
    console.log(song.length)
    song.push("1 bottle of beer on the wall, 1 bottle of beer.");
    song.push("Take one down and pass it around, no more bottles of beer on the wall.");
    song.push("No more bottles of beer on the wall, no more bottles of beer.");
    song.push("Go to the store and buy some more, 99 bottles of beer on the wall.");

    console.log(song.length)
    return song;
};
let song = sing()
console.log(song);