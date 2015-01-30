var header = document.querySelector(".flex-container");


var h1 = document.createElement("h1");
h1.classList.add('flex-item');
h1.textContent = 'Glenna Xie';
header.appendChild(h1);

var nav = document.createElement('nav');
nav.classList.add('flex-item');
header.appendChild(nav);

var menu = document.createElement('ul');
menu.classList.add('menu');
nav.appendChild(menu);

var home = document.createElement('li');
var homeLink = document.createElement('a');
homeLink.textContent = 'home';
homeLink.href = "index.html";
menu.appendChild(home);
home.appendChild(homeLink);

var resume = document.createElement('li');
var resumeLink = document.createElement('a');
resumeLink.textContent = 'resume';
resumeLink.href = "resume.html";
menu.appendChild(resume);
resume.appendChild(resumeLink);

var blog = document.createElement('li');
var blogLink = document.createElement('a');
blogLink.textContent = 'blog';
blogLink.href = "blog.html";
menu.appendChild(blog);
blog.appendChild(blogLink);

