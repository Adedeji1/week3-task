// 1)Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
 function hello() {
    console.log('Week 3 assignment');

    alert('Week 3 assignment completed!');
 }

 //2) Write a JavaScript program that converts a callback-based function to a Promise-based function.
 function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    } );
 }
 async function main() {
    await wait (2000);

    console.log("Hello for Assignment 2!");
 }
 main();

 //assignment number 3
 // Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
 function getUserLocation (){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
 }
 
 async function response() {
    let position;

    try {
         position = await getUserLocation();
    } catch (err) {
        console.error(err);
    }
   

    console.log(position);
 }

 response();
 //boss i no understand this assignment no 3


 //assignmnt no 4
 // Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.
 function downloadUrlsParallel(urls) {
    const promises = [];

    for (const url of urls) {
      const promise = fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
          }

          return response.text();
        })
        .catch(error => {
          console.error(`Error fetching ${url}:`, error.message);
          return null;
        });
  
      promises.push(promise);
    }

    return Promise.all(promises);
  }
  
  const urls = ['https://example.com/api/data1', 'https://example.com/api/data2', 'https://example.com/api/data3'];
  
  downloadUrlsParallel(urls)
    .then(contents => {
      contents.forEach((content, index) => {
        if (content !== null) {
          console.log(`Content from ${urls[index]}:`, content);
        } else {
          console.log(`Failed to fetch content from ${urls[index]}`);
        }
      });
    })
    .catch(error => {
      console.error('Error downloading URLs:', error.message);
    });
  