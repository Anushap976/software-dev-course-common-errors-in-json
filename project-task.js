/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",              //missing comma. In JSON, multiple key-value pairs within an object must be separated by commas
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",                 //missing quotes for name property. In JSON key-value pairs should be enclosed in quotes
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,                           //Invalid value for age. In JSON undefined values are not supported. The value must be null or number
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]           //trailing comma for amenities array which is an error. JSON does not allow trailing commas after the last element in an array
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

  When i test my final version using jsonlint.com , it says JSON is valid!
*/



// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I carefully went through the code and checked for common mistakes, like missing commas, invalid data types, or any formatting issues.
I kept in mind the standard JSON rules, such as ensuring each key-value pair is properly separated by commas and that values are of the correct type.

2️⃣ How did you confirm that your corrected JSON file was valid?
After making the changes, I used an online JSON validator like jsonlint.com to double-check the file. 
The tool helped confirm that the syntax was correct and there were no issues left to fix.

3️⃣ Which errors were the most difficult to spot? Why?
The most challenging issue to spot was the undefined value for the age field. Even though undefined is a valid JavaScript value, it's not allowed in JSON, 
it took a moment to recall the constraints of JSON syntax.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
Regularly using linters during development can automatically highlight syntax errors as soon as they occur. Using an editor with syntax highlighting can make it 
easier to spot missing commas or unmatched braces. When building JSON structures, it's helpful to reference a correctly formatted example to ensure the syntax is accurate.

*/
