const dog_btn = document.getElementById("dog_btn");

const dog_result = document.getElementById("dog_result");

dog_btn.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      let p = new Promise((resolve, reject) => {
        if (data.url.includes(".mp4")) {
          resolve(getRandomDog());
        } else {
          reject((dog_result.innerHTML = `<img src=${data.url} alt="dog" />`));
        }
      });
    });
}