let starIcon = document.querySelector(".star-icon");
let content = document.querySelector(".content");
let rate = document.querySelector(".rate");

let ratesNumber = document.querySelectorAll(".rate ul li");

let submitBtn = document.querySelector(".submit");

let ratedText = document.querySelector(".rated");

let hiddenDiv = document.querySelector(".hidden");
ratesNumber.forEach((rate) => {
  rate.onclick = function () {
    for (let i = 0; i < ratesNumber.length; i++) {
      ratesNumber[i].classList.remove("select");
      this.classList.add("select");
    }
  };
});

submitBtn.onclick = function () {
  let rateMessage;
  let rateNum;
  for (let i = 0; i < ratesNumber.length; i++) {
    if (ratesNumber[i].classList.contains("select")) {
      starIcon.remove();
      content.remove();
      rate.remove();
      submitBtn.remove();
      hiddenDiv.classList.add("show");
      rateNum = ratesNumber[i].innerHTML;
      rateMessage = `You selected ${rateNum} out of ${ratesNumber.length}`;
      ratedText.innerHTML = rateMessage;
    }
  }
};
