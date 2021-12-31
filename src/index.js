import './style.css';
import pho from './pho.png';
function createButton(){
    const container = document.querySelector("#content");
    const button = document.createElement('div');
    button.className = "btn";
    container.appendChild(button);

    let home = document.createElement('button');
    home.textContent = "Home";
    home.setAttribute('id', 'btn1');
    button.appendChild(home);

    let menu = document.createElement('button');
    menu.setAttribute('id', 'btn2');
    menu.textContent = "Menu";
    button.appendChild(menu);

    let contact = document.createElement('button');
    contact.setAttribute('id', 'btn3');
    contact.textContent = "Contact us";
    button.appendChild(contact);
}

function createPages(){
    const container = document.querySelector("#content");
    const info = document.createElement('div');
    info.className = "info";
    container.appendChild(info);
    for (let i = 0; i < 3; i++){
        let page = document.createElement('div');
        page.classList.add("pages");
        info.appendChild(page);
    }
    let pages = document.querySelectorAll(".pages");
    // add an extra class to each page
    pages[0].classList.add("home");
    //pages[0].textContent = "Home";

    pages[1].classList.add("menu");
    //pages[1].textContent = "Menu";

    pages[2].classList.add("contact");
    //pages[2].textContent = "Contact Us"
}

function pageOneLayOut(){
    const home = document.querySelector(".home");
    
    let intro = document.createElement('div');
    intro.innerHTML = "<b>Welcome to Pho!</b>";
    intro.style.cssText = "font-size: 50px; font-family: sans-serif; text-align: center; ";
    home.appendChild(intro);

    let img = document.createElement('img');
    // from the import statement
    img.src = pho;
    img.className = 'image';
    home.appendChild(img);

    let div = document.createElement('div');
    div.className = 'intro';
    div.textContent = "The best Pho in town. We have everything from beef, chicken pho to seafoot hot pot. We also serve other traditional Vietnamese Food";
    div.textContent += ". Starting next month, we will be starting the Pho challenge. Anyone who is able to finish this 10 pound bowl will get a T-shirt and a picture with the owner!";
    div.style.cssText = "margin-top: 50px; font-weight: bold; font-size: 30px; color: white";
    home.appendChild(div);
}

// remember to create the showContent function at the very last
function pageTwoLayOut() {
    const menu = document.querySelector(".menu");
    
    let container = document.createElement('div');
    container.className = 'dishes';
    menu.appendChild(container);

    for (let i = 0; i < 6; i++){
        let box = document.createElement('div');
        box.className = 'box';
        container.appendChild(box);
    }

    // adding content to each box
    let dishes = document.querySelectorAll(".box");
    dishes[0].innerHTML = "Pho Bo <br> Beef, noodles, and beef broth that tastes <br> better than your mama's ... (hahaahha jk). <br>Served with onions and green onion";
    dishes[1].innerHTML = "Pho Ga <br> Chicken, noodles, and special <br> made chicken broth. Served with your mom <br>as a side dish (hahaha)";
    dishes[2].innerHTML = "Com Tam <br> White rice, served with grilled <br> marinated short<br> ribs and sweet fish sauce. <br> Sides included pickled carrot and soup of the day.";
    dishes[3].innerHTML = "Bun Thit Nuong <br> Vermicelli, with grilled <br> marinated short ribs and sweet fish sauce. <br>Served with chili and <br>a lot of greens";
    dishes[4].innerHTML = "Seafood Hot Pot <br> Spciy Tom Yum Broth. <br>Served with all-you-can-eat mussels, clams, <br>shrimps, beef, vegatables, and noodles or vermicelli";
    dishes[5].innerHTML = "Iced Coffee <br> Vietnamese Style. <br>Served with lots of ice and condensed milk. <br> Might not be for diabetic mfs";

    dishes.forEach((dish) => {
        dish.style.cssText = "text-align: center;font-size: 30px; display: inline-block; border: 5px solid black; margin-top: 100px; background-color: lightyellow; color: blue";
    })

    container.style.cssText = "display: flex; justify-content: space-between; flex-wrap: wrap; gap: 50px";
}
function pageThreeLayOut() {
    const contact = document.querySelector(".contact");
    let box = document.createElement('div');
    //append all contact elements into this box
    box.className = 'contactBox';
    box.style.cssText = 'display: inline-block; border: 5px solid coral; padding: 20px; margin-left: 320px; margin-top: 180px; background-color: honeydew';
    contact.appendChild(box);

    for (let i = 0; i < 4; i++){
        let div = document.createElement('div');
        div.className = "contactInfo";
        box.appendChild(div);
    }
    let contactInfo = document.querySelectorAll(".contactInfo");
    // adding content to all prev divs
    contactInfo[0].textContent = "Phone Number: 696-969-6969";
    contactInfo[1].textContent = "Chief Chef: Gordan-Ramsay Nguyen";
    contactInfo[2].innerHTML = "Adress: 233 5th Ave, New York, NY 10016 <br>(Meet me there for signatures!)";
    contactInfo[3].textContent = "Email: totallyRealEmailNotFake@all.com";
    contactInfo.forEach((div) => {
        div.style.cssText = "font-size: 35px; font-weight: 10px";
    })
}

function switchTabs(pageIndex){
    let pages = document.querySelectorAll(".pages");
    pages.forEach((page) => {
        page.style.display = "none";
    });
    pages[pageIndex].style.display = "block";
}

createButton();
createPages();
pageOneLayOut();
pageTwoLayOut();
pageThreeLayOut();
switchTabs(0);
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        let id = btn.id;
        switchTabs(id[id.length - 1] - 1);
    })
})
