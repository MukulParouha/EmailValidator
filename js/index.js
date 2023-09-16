console.log("this is my script");

let result = {
  tag: "",
  free: false,
  role: false,
  user: "mukulkumar",
  email: "mukulkumar@harry.com",
  score: 0.64,
  state: "unknown",
  domain: "harry.com",
  reason: "no_connect",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked!");
  resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`;
  // api key
  let key = "ema_live_Ro3e0kz2U1thbcXYuChAID4Hmn3BYd8sIO0OeyHx";
  // mail
  let email = document.getElementById("username").value;
  //  url
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url);
  let result = await res.json();

  let str = ``;
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]}</div>`;
    }
  }
  console.log(str);
  resultCont.innerHTML = str;
});
