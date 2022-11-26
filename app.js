const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

if(new Date().getHours()>5 && new Date().getHours() < 12)
{
	console.log("Working at 1")
	document.getElementById("greeting").innerHTML = "Good Morning,";
	document.getElementById("greeting").style.color = "#fac467";

}
else if(new Date().getHours() > 12 && new Date().getHours() < 18)
{
    document.getElementById("greeting").innerHTML = "Good Afternoon,";
	document.getElementById("greeting").style.color = "#f8aa27";
}
else if(new Date().getHours() > 1 && new Date().getHours() < 4)
{
    document.getElementById("greeting").innerHTML = "Mid Night,";
	document.getElementById("greeting").style.color = "#f8aa27";
}
else 
{
	console.log("Working at 3")
	document.getElementById("greeting").innerHTML = "Good Evening,";
	document.getElementById("greeting").style.color = "#F4633C";
}

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
