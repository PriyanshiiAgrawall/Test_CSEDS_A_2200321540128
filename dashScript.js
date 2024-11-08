const userContainer = document.getElementById("user-container");
const orderDropdown = document.getElementById("order");


const getData = async function () {
    const output = await fetch("https://api.github.com/users?per_page=10");
    const parsed = await output.json();
    return parsed;
};


function showUsers(order = "default") {
    getData().then((responses) => {

        if (order === "alphabetical") {
            responses.sort((a, b) => a.login.localeCompare(b.login));
        }


        userContainer.innerHTML = "";


        responses.forEach(response => {
            const userCard = `
                <div class="user-card">
                    <a href="${response.html_url}" target="_blank">${response.login}</a>
                </div>
            `;
            userContainer.innerHTML += userCard;
        });
    });
}


orderDropdown.addEventListener("change", function () {
    const selectedOrder = this.value;
    showUsers(selectedOrder);
});


function loggingOut() {
    window.location.href = "index.html";
}




