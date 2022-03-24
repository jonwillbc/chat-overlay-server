/*
*Created by Jonathan Williams (jonwilliams7129@gmail.com)
*Released under the MIT License.
*Code built following lessons from https://www.udemy.com/course/the-complete-nodejs-developer-course-2/
*/

const generateMessage = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage
}