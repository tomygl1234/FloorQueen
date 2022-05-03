var map = L.map('map').setView([-34.615184, -58.387404], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.615184, -58.387404]).addTo(map)
    .bindPopup('¡Estamos aquí!')
    .openPopup();