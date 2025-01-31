# Url Shortener - MERN Stack

LIVE-Example @ https://farids-url-shortener.onrender.com/


[Important]:
To setup demo usage a working MongoDB connection is required.
Setup your own MongoDB instance or connect to your cloud-based solution, then add in the root of the project an ".env" file with the key [MONGOURI=YourDatabaseURI]

- git clone https://github.com/FaridZimmermann/url-shortener.git
- npm run build
- npm run start


Objective: To create a full-stack web application that allows the user to shorten valid/"existing" URLs, storing their reference in a database. 



Main Challenges/Learning Experience: </br>

BACKEND - validating URLs internally using built-in node:dns package to do an independent DNS lookup. Edge cases, as the node:dns package itself doesn`t check for valid protocols (http/https). </br>

FRONTEND - creating custom useFetch hook. Also, issue regarding responsive design on different mobile sizes as list items that display each weather day might have flexible width based on description length. I have not found a proper solution yet.

