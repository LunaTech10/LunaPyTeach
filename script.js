const responses = {
    pythonIntro: "📖 Python is a powerful, easy-to-learn programming language! Learn more at <a href='https://www.w3schools.com/python/' target='_blank'>W3Schools</a>.",
    pythonFeatures: "🔍 Python has simple syntax, dynamic typing, and huge community support! Read more at <a href='https://www.geeksforgeeks.org/python-programming-language/' target='_blank'>GeeksforGeeks</a>.",
    startPython: "🚀 Start learning Python with <a href='https://www.codecademy.com/learn/learn-python-3' target='_blank'>Codecademy</a>.",
    pythonFirstProgram: "👩‍💻 Your first Python program is: <br><code>print('Hello, Python!')</code>",
    pythonSyntax: "📜 Python syntax is super simple! Read more at <a href='https://realpython.com/tutorials/basics/' target='_blank'>RealPython</a>.",
    pythonDataTypes: "🔢 Python supports numbers, strings, lists, tuples, and dictionaries! Learn more <a href='https://docs.python.org/3/tutorial/' target='_blank'>here</a>.",
    pythonLoops: "🔄 Loops help repeat code! Learn about **for** and **while** loops <a href='https://www.programiz.com/python-programming/loop' target='_blank'>here</a>.",
    pythonFunctions: "🔧 Functions let you organize code! Read about them <a href='https://www.w3schools.com/python/python_functions.asp' target='_blank'>here</a>.",
    pythonCourses: "📚 Best courses: <a href='https://www.sololearn.com/Course/Python/' target='_blank'>SoloLearn</a> | <a href='https://www.udemy.com/course/python-for-beginners/' target='_blank'>Udemy</a>",
    pythonDocs: "🔗 Official Python documentation: <a href='https://docs.python.org/3/tutorial/' target='_blank'>Python.org</a>"
};

function getReply(topic) {
    document.getElementById("response").innerHTML = responses[topic] || "Sorry, I don't have that information.";
}
