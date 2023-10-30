// WRITE YOUR CODE BELOW THIS LINE

let favMovies = [
	{
		title: "Interstellar",
		year: 2014,
		rating: 8.7,
		description: `Set in a future where a failing Earth puts humanity on the brink of extinction, 
it sees an intrepid team of NASA scientists, engineers and pilots attempt to find a new habitable planet, 
via interstellar travel.`,
		directors: ["Christopher Nolan"],
		writers: ["Jonathan Nolan", "Christopher Nolan"],
		stars: ["Matthew McConaughey", "Anne Hathaway", "Ellen Burstyn", "Matt Damon"],
		genres: ["Adventure", "Drama", "Sci-Fi"]
	},
	{
		title: "Star Wars",
		year: 1977,
		rating: 8.6,
		description: `A space opera set “a long time ago in a galaxy far, far away,” 
the film centres on Luke Skywalker, a young man who finds himself 
embroiled in an interplanetary war between an authoritarian empire and rebel forces.`,
		directors: ["George Lucas"],
		writers: ["George Lucas"],
		stars: ["Harrison Ford", "Mark Hamill", "Carrie Fisher"],
		genres: ["Action", "Adventure", "Fantasy"]
	},
	{
		title: "Oppenheimer",
		year: 2023,
		rating: 8.5,
		description: `The film is about the creation of the atomic bomb during World War II. 
More specifically, it follows J. Robert Oppenheimer, 
the man responsible for making the Manhattan Project a success.`,
		directors: ["Christopher Nolan"],
		writers: ["Christopher Nolan"],
		stars: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
		genres: ["Biography", "Drama", "History"]
	},
	{
		title: "Avengers: Endgame",
		year: 2019,
		rating: 8.4,
		description: `AVENGERS: ENDGAME is set after Thanos' catastrophic use of the Infinity Stones 
randomly wiped out half of Earth's population in Avengers: Infinity War. Those left behind are desperate 
to do something to bring back their lost loved ones.`,
		directors: ["Anthony Russo", "Joe Russo"],
		writers: ["Stephen McFeely", "Christopher Markus"],
		stars: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
		genres: ["Action", "Adventure", "Drama"]
	}
];

console.log(favMovies[0].title);
console.log(favMovies[1].year);
console.log(favMovies[2].rating);
console.log(favMovies[3].description);

console.log("The first movie's title is: " + favMovies[0].title);
console.log("The second movie's release year is: "+ favMovies[1].year);
console.log("The third movie's IMDB rating is: "+ favMovies[2].rating);
console.log("The fourth movie's short description is: "+ favMovies[3].description);


console.log("The first movie's lead director is: " + favMovies[0].directors[0]);
console.log("The second movie's lead writer is: "+ favMovies[1].writers[0]);
console.log("The third movie's lead star is: "+ favMovies[2].stars[0]);
console.log("The fourth movie's main genre is: "+ favMovies[3].genres[0]);

let averageRating = (favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating) / 4;
console.log("The average rating is: " + averageRating);

let averageAge = ( (2023 - favMovies[0].year) + (2023 - favMovies[1].year) + (2023 - favMovies[2].year) + (2023 - favMovies[3].year) ) / 4;
console.log("The average age is: " + averageAge)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
