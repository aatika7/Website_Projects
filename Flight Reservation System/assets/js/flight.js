 // Tab switcher functionality
 const tabs = document.querySelectorAll(".tab-button");
 tabs.forEach(tab => {
     tab.addEventListener("click", () => {
         tabs.forEach(btn => btn.classList.remove("active"));
         tab.classList.add("activea");
     });
 });

 // Show flight button interaction
 document.getElementById("show-flight").addEventListener("click", () => {
     const from = document.getElementById("from").value || "Unknown";
     const to = document.getElementById("to").value || "Unknown";
     const departing = document.getElementById("departing").value || "N/A";
     const returning = document.getElementById("returning").value || "N/A";

     alert(`Flight Details: \nFrom: ${from}\nTo: ${to}\nDeparting: ${departing}\nReturning: ${returning}`);
 });

//  Airlines
function showFlightDetails() {
    alert('Flight Details:\nAirline: Feel Dubai Airline\nRoute: DUB -> SHJ\nDuration: 0h 50m\nPrice: $240');
}