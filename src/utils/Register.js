var base64 = require("base-64");
const API = "https://avalon-show.herokuapp.com/api";

// const loginUser = async (form) => {
//   const apiURL = `${API}${"/auth/sign-in"}`;
//   console.log(apiURL);
//   try {
//     const response = await fetch(apiURL, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: `Basic ${base64.encode(
//           `${"admin@avalon-show.com"}:${"123456"}`
//         )}`,
//       }),
//       body: JSON.stringify({
//         apiKeyToken:
//           "98fbbd37e1daf634fd7b322d8d5de856f1301da90d4c29ed28dd96299a8b449f",
//       }), // body data type must match "Content-Type" header
//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log("Fetch Error", error);
//   }
// };
// export default loginUser;

const createUser = async (form) => {
  const apiURL = `${API}${"/auth/sign-up"}`;
  console.log(apiURL);
  try {
    const response = await fetch(apiURL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Basic ${base64.encode(
          `${"admin@avalon-show.com"}:${"123456"}`
        )}`,
      }),
      body: JSON.stringify(form), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
export default createUser;
// postData({
//   id: 0,
//   email: "string",
//   phone: "string",
//   password: "string",
//   Name: "string",
//   lastName: "string",
//   birthday: "string",
//   country: "string",
//   address: "string",
// });

// // Ejemplo implementando el metodo POST:
// async function posttData(url = "", data = {}) {
//   // Opciones por defecto estan marcadas con un *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     // redirect: "follow", // manual, *follow, error
//     // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// posttData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

// function submitInfo() {
//   let form = document.forms["myForm"];
//   let fd = new FormData(form);
//   let data = {};
//   for (let [key, prop] of fd) {
//     data[key] = prop;
//   }
//   VALUE = JSON.stringify(data, null, 2);
//   console.log(VALUE);

//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   fetch("http://example_website/api/login", {
//     method: "POST",
//     headers: myHeaders,
//     mode: "cors",
//     cache: "default",
//     body: VALUE,
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
///metodo de carlos
// const { data } = await axios({
//   method: "POST",
//   url: `https://avalon-show.herokuapp.com/api/auth/sign-in`,
//   // url: `http://localhost:8080/api/auth/sign-in`,
//   timeout: 3000,
//   data: {
//     // "apiKeyToken":"e335916b9ca9647b1cf3365a94817d9f93eedd6b2a5a87741b5069c12aa985b5", // AVALON LOCAL
//     apiKeyToken:
//       "98fbbd37e1daf634fd7b322d8d5de856f1301da90d4c29ed28dd96299a8b449f", // AVALON REMOTE
//   },
//   headers: {
//     "Content-Type": "application/json",
//     "X-Requested-With": "XMLHttpRequest",
//     "Access-Control-Allow-Origin": "*",
//   },
//   auth: {
//     username: "cguzman@expressingenieria.com",
//     password: "ing870915", // Bad password
//   },
// });

// `Basic ${base64.encode(`${"admin@avalon-show.com"}:${"123456"}`)}`;

// {
//   email: "martinmaceda3@gmail.com",
//   phone: "1234567890",
//   password: "1234567890",
//   name: "luis",
//   lastname: "maceda",
//   birthday: "1989-09-15",
//   country: "",
//   address: "SALAMANDRA CASA 3",
//   isAdmin: false,
//   createdAt: "2020-10-04T02:42:30.239Z",
//   updatedAt: "2020-10-04T02:42:30.239Z",
// }
