/**
Question 4: Valid Anagram
Difficulty: Easy
Topic: String, HashMap (Frequency Counter)

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is formed by rearranging the letters of another string using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
*/

let s = "anagram"
let t = "nagaram"

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const freq = {};

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (const char of t) {
        if (!freq[char]) return false;
        freq[char]--;
    }
    return true;
}


console.log(isAnagram(s, t));
