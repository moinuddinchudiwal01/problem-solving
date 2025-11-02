// 🧩 Problem Statement: “Group Anagrams”

// Description:
// You are given an array of strings. Your task is to group all the anagrams together.
// An anagram is a word formed by rearranging the letters of another word.

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (words: Array<string>) => {
  const map = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(words));
