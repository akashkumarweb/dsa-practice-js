/** 
Difficulty: Medium
Topic: Array, Prefix / Suffix Product, No Division

Question:
Given an array nums of length n, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
// Explanation: 
// answer[0] = 2*3*4 = 24
// answer[1] = 1*3*4 = 12
// answer[2] = 1*2*4 = 8
// answer[3] = 1*2*3 = 6
*/

function productExceptSelf(nums) {
    const n = nums.length;
    const answer = Array(n).fill(1);

    // First pass: left to right
    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = left;      // Store product of all to the left
        left *= nums[i];       // Update left running product
    }

    // Second pass: right to left
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;    // Multiply by product of all to the right
        right *= nums[i];      // Update right running product
    }

    return answer;
}


console.log(productExceptSelf([1, 2, 3, 4]))
