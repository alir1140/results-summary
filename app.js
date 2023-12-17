document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Update each box with corresponding data
            data.forEach((item, index) => {
                const box = document.querySelector(`.box${index + 1}`);
                if (box) {
                    box.innerHTML = `
                        <div class="baddiv">
                        <img id="js-img" src="${item.icon}" alt="${item.category}icon">
                        <h3 class="js-h">${item.category}</h3>
                        </div>
                        <p>${item.score}<span class="js-100">/100</span></p>
                        
                    `;
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
