
// Promise introduced in ES6. before promised we were using callback funtions.

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;   //printing post's title
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();         //getposts() will get execute here 
  }, 2000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);    // here we passed getPosts as callback function 


*********************************************************************************************************************************
  
//   to overcome this issue promises comes into picture.
  
  const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)       // if it gets resolved then this line will get execute
  .catch(err => console.log(err));    // if some error occurs this will catch that errror


Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values =>
  console.log(values)
);
