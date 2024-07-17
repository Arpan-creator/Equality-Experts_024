// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Admin</title>
//     <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
// </head>

// <body>
//     <form action="" class="adminForm">
//         <label for="selectDate"></label>
//         <input type="datetime-local" id="selectDate">


//         <select name="" id="duration">
//             <option value="">Select Duration</option>
//             <option value="minTime">15 min</option>
//             <option value="maxTime">30 min</option>
//         </select>

//         <button type="submit">Submit</button>
//     </form>

//     <!-- "admin": [
//     {
//       "meetingDetails": [
//       { "status": "Active",
//         "slot": "",
//         "meetingLink": "", 
//         "duration" : "" }
//       ]
//     }
//   ] -->
// </body>
// <script type="module">
//     import { fetchData } from "../utils/fetchdata.js"
//     let fetchURL = `http://localhost:3000/admin`
//     const urlParams = new URLSearchParams(window.location.search);
//     let userId = urlParams.get('userId');
//     let baseURL = `http://localhost:3000/admin/${userId}`;
//     let adminData = fetchData(fetchURL)
//     // console.log(adminData)
//     let loggedUser = JSON.parse(localStorage.getItem("logged")) || false;

//     console.log(loggedUser.meetingDetails)
//     let minTime = 30
//     let maxTime = 15
//     let adminForm = document.querySelector(".adminForm")
//     let setAdminAvail = async (event) => {
//         let id = Math.random().toString()
//         let duration = 0;
//         event.preventDefault();
//         let slot = await event.target[0].value
//         let obj = {}
//         let selectedTime = await  event.target[1].value
//         if (selectedTime === "maxTime") {
//             duration = await minTime
//         } else {
//             duration = await maxTime
//         }

//         obj = await { id, slot, duration, status: "active", "meetingLink": "" }
//         let narr = [obj, ...loggedUser.meetingDetails]
//         await fetch(fetchURL, {
//             method: "POST",
//             headers: {
//                 "content-type": 'application/json'
//             },
//             body: JSON.stringify({ meetingDetails: narr })
//         })

//         // document.querySelector(".selectDate")

//     }

//     adminForm.addEventListener("submit", setAdminAvail)
// </script>

// </html>