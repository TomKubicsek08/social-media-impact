// Social Media Impact Data

// Popular social media platforms (String)
let platform1 = "Instagram";
let platform2 = "TikTok";
let platform3 = "Twitter";

// Average daily screen time in hours (Number)
let screenTimeInstagram = 2.5;
let screenTimeTikTok = 3.2;
let screenTimeTwitter = 1.8;

// Total weekly screen time calculation
let totalWeeklyScreenTime = (screenTimeInstagram + screenTimeTikTok + screenTimeTwitter) * 7;

// Percentage of users affected by social media pressure (Number)
let anxietyPercentage = 65;
let depressionPercentage = 50;

// Constructing a message about social media usage (String)
let impactMessage = `On average, people spend ${totalWeeklyScreenTime.toFixed(1)} hours per week on social media. Studies show that ${anxietyPercentage}% of users experience anxiety and ${depressionPercentage}% experience depression due to social media pressure.`;

// Insert data into the webpage
document.getElementById("platforms").innerHTML = `Popular Platforms: ${platform1}, ${platform2}, ${platform3}`;
document.getElementById("weekly-screen-time").innerHTML = `Total Weekly Screen Time: ${totalWeeklyScreenTime.toFixed(1)} hours`;
document.getElementById("anxiety-impact").innerHTML = `Anxiety Impact: ${anxietyPercentage}% of users affected.`;
document.getElementById("depression-impact").innerHTML = `Depression Impact: ${depressionPercentage}% of users affected.`;
document.getElementById("impact-message").innerHTML = impactMessage;

