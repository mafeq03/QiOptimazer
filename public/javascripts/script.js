document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

// // main.js
// function startMap() {
//   const ironhackBCN = {
//   	lat: 41.3977381,
//   	lng: 2.190471916};
//   const map = new google.maps.Map(
//     document.getElementById('map'),
//     {
//       zoom: 15,
//       center: ironhackBCN
//     }
//   );
// }
// var google;

// const myMarker = new google.maps.Marker({
//   position: {
//   	lat: 41.3977381,
//   	lng: 2.190471916
//   },
//   map: map,
//   title: "I'm here"
// });

// // Try to get a geolocation object from the web browser
// if (navigator.geolocation) {

//   // Get current position
//   // The permissions dialog will popup
//   navigator.geolocation.getCurrentPosition(function (position) {
//     // Create an object to match
//     // google's Lat-Lng object format
//     const center = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };
//     console.log('center: ', center)
//     // User granted permission
//     // Center the map in the position we got
//   }, function () {
//     // If something else goes wrong
//     console.log('Error in the geolocation service.');
//   });
// } else {
//   // Browser says: Nah! I do not support this.
//   console.log('Browser does not support geolocation.');
// }

// function startMap() {

//   // Store Ironhack's coordinates
//   const ironhackBCN = { lat: 41.3977381,  lng: 2.190471916 };
//   const directionsService = new google.maps.DirectionsService;
//   const directionsDisplay = new google.maps.DirectionsRenderer;


//   // Map initialization
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: ironhackBCN
//   });

// //get directions 
//   const directionRequest = {
//     origin: { lat: 41.3977381, lng: 2.190471916},
//     destination: 'Madrid, es',
//     travelMode: 'DRIVING'
//   };
  
//   directionsService.route(
//     directionRequest,
//     function(response, status) {
//       if (status === 'OK') {
//         // everything is ok
//         directionsDisplay.setDirections(response);
  
//       } else {
//         // something went wrong
//         window.alert('Directions request failed due to ' + status);
//       }
//     }
//   );
  
//   directionsDisplay.setMap(map);

//   // Add a marker for Ironhack Barcelona
//   const IronHackBCNMarker = new google.maps.Marker({
//     position: {
//       lat: ironhackBCN.lat,
//       lng: ironhackBCN.lng
//     },
//     map: map,
//     title: "Barcelona Campus"
//   });


//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       const user_location = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       // Center map with user location
//       map.setCenter(user_location);

//       // Add a marker for your user location
//       const ironHackBCNMarker = new google.maps.Marker({
//         position: {
//           lat: user_location.lat,
//           lng: user_location.lng
//         },
//         map: map,
//         title: "You are here"
//       });

//     }, function () {
//       console.log('Error in the geolocation service.');
//     });
//   } else {
//     console.log('Browser does not support geolocation.');
//   }
// }

// startMap();