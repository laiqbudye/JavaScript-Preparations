
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
