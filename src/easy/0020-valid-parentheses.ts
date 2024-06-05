export function isValid(s: string): boolean {

  type Table = {
    [key: string]: string
  }

  const pairs: Table = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  const stack: string[] = []

  for (const char of s) {
    if (char in pairs) {
      stack.push(char)
    } else if (pairs[stack[stack.length - 1]] === char) {
      stack.pop()
    } else {
      return false
    }
  }

  return !stack.length
}


/* 

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

*/
