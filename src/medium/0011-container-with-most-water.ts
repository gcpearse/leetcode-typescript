export function maxArea(height: number[]): number {

  let left = 0
  let right = height.length - 1

  let maxArea = 0

  while (left < right) {
    if (Math.min(height[left], height[right]) * (right - left) > maxArea) {
      maxArea = Math.min(height[left], height[right]) * (right - left)
    }
    height[left] < height[right] ? left++ : right--
  }

  return maxArea
}


/*

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49

Example 2:

Input: height = [1, 1]
Output: 1

*/
