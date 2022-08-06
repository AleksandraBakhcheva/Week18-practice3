let container = document.createElement("form");
container.classList.add("container");
container.innerHTML += `<div class="result"></div>
<label for="messages"><input class="nickname" type="text" id="messages" placeholder="Имя" /><input class="picture"  type="url" id="messages" placeholder="Здесь можно вставить ссылку на аватарку" /><input class="messages" type="text" id="messages" placeholder="Введите сообщение" /></label>
<button type="submit">Отправить</button>`;
document.body.append(container);

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    addMessage();
});

function addMessage() {

    let nickName = document.querySelector(".nickname").value;
    if (nickName !== "") {
        localStorage.setItem('name', nickName);
    }
    else {
        nickName = "Аноним";
    }

    let nickAvatar = document.querySelector(".picture").value;
    if (nickAvatar !== "") {
        let image = document.createElement("img");
        image.classList.add("nickAvatar");
        image.src = `${nickAvatar}`;
        document.querySelector(".result").appendChild(image);
        localStorage.setItem('avatar', nickAvatar);
    }

    let message = document.querySelector(".messages").value;
    
    if (message !== "") {
        checkSpam(message);
        document.querySelector(".messages").value = "";
    }
    else {
        return 0;
    }

    function checkSpam(str) {
        let finalstr = str.replace(/viagra|XXX/gi, "***");
        document.querySelector(".result").innerHTML += nickName + ": " + finalstr + "<br/>";
    }
}