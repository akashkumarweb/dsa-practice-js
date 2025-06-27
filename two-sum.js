/**
 * 🔢 Two Sum
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

// 💡 Method 1: Brute Force – O(n^2)
function twoSumMethodOne(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// 💡 Method 2: Hash Map – O(n)
function twoSumMethodTwo(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (seen.hasOwnProperty(diff)) {
            return [seen[diff], i];
        }
        seen[nums[i]] = i;
    }
}

// ✅ Example Tests
const input = [2, 7, 11, 15];
const target = 9;

console.log('Method 1:', twoSumMethodOne(input, target)); // [0, 1]
console.log('Method 2:', twoSumMethodTwo(input, target)); // [0, 1]
