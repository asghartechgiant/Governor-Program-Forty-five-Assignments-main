// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite ? Make a list that includes at least three people you’d like to invite to dinner.Then use your list to print a message to each person, inviting them to dinner.

// Define an array of guest names
let guestList: string[] = ["Rehan", "Asad", "Bilal", "Faizan"];

// Iterate through each guest in the array
for (let i: number = 0; i < guestList.length; i++) {
  // Print an invitation message for each guest
  console.log("Hi " + guestList[i] + ", I would like to invite you to dinner.");
}
