async function postData(url = '', data = {}) {
       // Default options are marked with *
       const response = await fetch(url, {
           method: 'POST', // *GET, POST, PUT, DELETE, etc.
           mode: 'cors', // no-cors, *cors, same-origin
           cache: 'no-cache', // *default, no-cache, reload, force-cache,only-if-cached
           credentials: 'same-origin', // include, *same-origin, omit
           headers: {
               'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
           },
           redirect: 'follow', // manual, *follow, error
           referrerPolicy: 'no-referrer', // no-referrer,*no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
           body: JSON.stringify(data) // body data type must match"Content-Type"header
       });
       return response.json(); // parses JSON response into native JavaScriptobjects
   }
   postData(url="registrering.html",)

   function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const formJSON = Object.fromEntries(data.entries());
        const results = document.querySelector('.results pre');
        postData('https://bacit.info/', formJSON)
        .then(data => {
           results.innerText = JSON.stringify(data, null, 2);
        });
   }
   const form = document.querySelector('form');
   form.addEventListener('submit', handleSubmit);

   function myFunction() {
                    var globalarray = [];
                    var arrLinks =[];
                    arrLinks = JSON.parse(window.localStorage.getItem("globalarray"));
                    document.getElementById("booking").innerHTML = arrLinks;
                }
