// script.js

 // Toggle visibility of the mobile menu
function toggleMenu() {
            const menu = document.getElementById('menu');
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        }

    // Simulated room availability data
    const roomAvailability = {
        "101": true,
        "102": false,
        "103": true,
        "201": false,
        "202": true
    };

    function checkAvailability() {
        const roomNumber = document.getElementById("roomCheck").value.trim();
        const resultElement = document.getElementById("availabilityResult");

        if (roomAvailability.hasOwnProperty(roomNumber)) {
            const isAvailable = roomAvailability[roomNumber];
            resultElement.textContent = isAvailable 
                ? `Room ${roomNumber} is available.` 
                : `Room ${roomNumber} is unavailable.`;
            resultElement.style.color = isAvailable ? "green" : "red";
        } else {
            resultElement.textContent = "Room number not found.";
            resultElement.style.color = "orange";
        }
    }


        