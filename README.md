# pathLyfe
### You're career is so much more than a resume
_______
## ABOUT
pathLyfe is an application for any career starter who has ever asked the question, "Where do I go from here?". On pathLyfe, users who have achieved career success in a particular field share the path that led them there, in whatever form it may have taken. Credit can be given to inpiring talks, helpful free resources, challenging tutorials, and of course, job experiences and education. Someone looking to break into a particular career field can then browse these paths, helping them determine their next steps.

_______
## MVP

1. Users must be able to sign up for password protected accounts.
2. Users must be able to create a path for themselves.
3. User's will be able to view their own profile and the profiles of others.
3. Users should be able to follow another user's path.
4. Paths will have blips with titles, descriptions, and images.

_______
## User Stories

My name is Troy, and I am interested in 3D modeling. I've been searching the internet, but I haven't found a good answer to the question, where do I start? I use pathLyfe to look at the paths of those that have sucessful careers in 3D modeling to see how they got where they are.

My name is Sundi, I have an incredibly sucessful career in social media marketing. I love helping others get a leg up in the field, but I don't always have time to give one on one help. I started using pathLyfe because I recieved many inquiries about how I became successful in my career. I now have one central place to direct people when asked about my career.

My name is Alex, I have a career in software development, but would like to compare my path in this career with others who have done the same. There are not many places online that provide varied information about how others have risen to the same spot career-wise, so I check pathLyfe to see if my career climb is similar to others, and if what I am doing and learning is current.

My name is Bob, and I provide a free online resource to help burgeoning writers. I check pathLyfe to see how many people are actually using my resource to assist them in their paths towards becoming writers.

_________
## Technologies used
- MongoDB / mlab
- Express
- node.js
- RESTful API production
- JSON
- AJAX
- Authentication using OAuth
- Heroku
- git/gitHub
_______
## Set up procedure

Working as a group of three, we used the above-mentioned technologies to create an application that has highly functioning back-end code that will allow a user to create, update, and delete resources in the application using authorization middleware.

Our group delegated different pieces of the application to each other, so that we would be able to connect the pieces of code together for a working product using git and gitHub. Using trello (linked below), we were able to track our progress throughout the project week.

https://trello.com/b/dkezkiRe/pathlyfe
________
## Data Model
```javascript

// User
userSchema{
  local: {
    name: {type: String},
    email : {type: String},
    password: {type: String}
  },
  img: {type: String},
  bio: {type: String},
  paths: [{type: mongoose.Schema.Types.ObjectId, ref:'Path'}]
}

// Path
pathSchema{
  _by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, required: true},
  blips: [blipSchema]
}

blipSchema{
  title : {type: String, required: true},
  description: {type: String},
  link: {type: String},
  kind: {type: String},
  year: {type: Number},
  img: {type: String}
 }
```

________
# Wireframe
![Imgur](http://i.imgur.com/3MTXglc.png)
_______
# Contributers
|| [Troy C 😎](https://github.com/troycarson100)  ||
[Sundiata T 😇](https://github.com/sundiata88)  ||
[Alex K 😷](https://github.com/alexkarevoll)  ||
