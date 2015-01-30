var footer = document.querySelector("footer");

var small = document.createElement('small');
small.textContent = '\u00A9 2015 Glenna Xie. All Rights Reserved.';
footer.appendChild(small);

var social = document.createElement('ul');
social.classList.add('social');
footer.appendChild(social);

var linkedIn = document.createElement('li');
var linkedInLink = document.createElement('a');
var linkedInImg = document.createElement('img');
linkedInLink.href = 'https://www.linkedin.com/in/glennaxie';
linkedInImg.src = 'images/linkedin.png';
linkedInImg.alt = 'linkedIn';
social.appendChild(linkedIn);
linkedIn.appendChild(linkedInLink);
linkedInLink.appendChild(linkedInImg);

var twitter = document.createElement('li');
var twitterLink = document.createElement('a');
var twitterImg = document.createElement('img');
twitterLink.href = 'https://twitter.com/jinggexie';
twitterImg.src = 'images/twitter.png';
twitterImg.alt = 'twitter';
social.appendChild(twitter);
twitter.appendChild(twitterLink);
twitterLink.appendChild(twitterImg);


var ins = document.createElement('li');
var insLink = document.createElement('a');
var insImg = document.createElement('img');
insLink.href = 'http://instagram.com/glennagege/';
insImg.src = 'images/ins.png';
insImg.alt = 'instagram';
social.appendChild(ins);
ins.appendChild(insLink);
insLink.appendChild(insImg);