// There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.

// The word “async” before a function means one simple thing: a function always returns a promise. 
// Other values are wrapped in a resolved promise automatically.

// The keyword await makes JavaScript wait until that promise settles and returns its result.
// await keyword works only inside functions that are started with async keywrd.
// If we try to use await in non-async function, there would be a syntax error:


// Async / Await
async function init() {   //we need to write async keyword in front of function
  await createPost({ title: 'Post Three', body: 'This is post three' });    // awiat will wait for the statement to get execute completely.

  getPosts();
}

init();


-------------------------------------------------------------------------------------------------------------------------------------
  // Asunc / Await / Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
}

fetchUsers();
