const text =
  "Happy 1st Anniversary! It honestly feels like time flew by, and even though we’ve been apart more than we would’ve liked, you’ve made everything feel so special and worth it. I just want to say thank you for always being there, for being so patient with me, for understanding me even when I can’t find the words, and for loving me the way you do. You really spoil me not just with little things, but with your time and effort, it makes our LDR less lonely and and a lot more worth it. I know it’s a bit sad that we can’t celebrate this day together, but I hope this little surprise made you smile. I can’t wait for the day we don’t have to count down the days to see each other again. I want to experience life with you every up, every down, every ordinary moment or big moment. Just you and me, always. I love you ♥️ Happy 1st anniversary, my love! Cheers to the first of many! Lovingly, Wifey";
const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();