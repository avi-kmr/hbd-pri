// Customize your friend's details here
const friend = {
  name: "Priyanshi",
  facebook: "https://www.facebook.com/priyanshi.singh.52493",
  instagram: "https://www.instagram.com/singh_priyanshi26",
  words: ""
};

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  if (width < 600) {
    document.body.style.background = 'linear-gradient(135deg, #fbc2eb, #a6c1ee)';
  } else {
    document.body.style.background = 'linear-gradient(135deg, #ff9a9e, #fad0c4)';
  }
});


// Display the birthday message
document.getElementById("birthdayMessage").innerText = `🎉 Happy Birthday, ${friend.name}! 🎂`;
setTimeout(() => {
  document.getElementById("messageBody1").innerText = `Happy Birthday to you 🎂`;
}, 2000);

setTimeout(() => {
  document.getElementById("messageBody2").innerText = `May life paint your days in colors bright and kind,
and may every dream that rests within your heart
find its wings and learn to fly.`;
}, 4000);

setTimeout(() => {
  document.getElementById("messageBody3").innerText = `Your words still echo softly in my mind—
each one a reminder of the bond we share.
If ever clouds passed between us,
know that I always saw the light in you,
and I’m grateful beyond words
for your patience, your care, and your truth.`;
}, 6000);

setTimeout(() => {
  document.getElementById("messageBody4").innerText = `Thank you for being you—
for the laughter, the lessons, and the quiet strength you carry.
Today, I simply wish you joy—
the kind that stays, grows, and warms even the coldest days.`;
}, 8000);

setTimeout(() => {
  document.getElementById("messageBody5").innerText = `With all my heart,
Happy Birthday once again. 🎉`;
}, 10000);

// Set social media links
document.getElementById("facebook").href = friend.facebook;
document.getElementById("instagram").href = friend.instagram;