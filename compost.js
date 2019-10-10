var introTime = 60 * 7;
var iphoneWidth = 750;
var iphoneHeight = 1294;
var currentPage = 0;

var locationQuestionX = 120;
var locationQuestionY = 170;

var locationGPSX = 160;
var locationGPSY = 200;

var restaurantNameX = 78;
var restaurantNameY = 230;

var restaurantAddressX = 175;
var restaurantAddressY = 260;

var acceptButtonWidth = 100;
var acceptButtonHeight = 50;
var acceptButtonX = 75;
var acceptButtonY = 300;

var enterLocationButtonWidth = 320;
var enterLocationButtonHeight = 40;
var enterLocationButtonX = 185;
var enterLocationButtonY = 400;

var enterButtonWidth = 100;
var enterButtonHeight = 50;
var enterButtonX = 75;
var enterButtonY = 455;

var thankyouX = 170;
var thankyouY = 300;

var submitButtonWidth = 100;
var submitButtonHeight = 50;
var submitButtonX = 185;
var submitButtonY = 425;

var confirmButtonWidth = 100;
var confirmButtonHeight = 50;
var confirmButtonX = 185;
var confirmButtonY = 425;

var homeButtonWidth = 100;
var homeButtonHeight = 50;
var homeButtonX = 190;
var homeButtonY = 300;

var homeInstructionsX = 200;
var homeInstructionsY = 500;
var homeInstructionText;

var firstMenu;
var secondMenu;
var bottomMenuHome;
var bottomBackMenu;

var bin1;
var bin1Fill;
var bin2;
var bin2Fill;
var bin3;
var bin3Fill;
var bin4;
var bin4Fill;

var backgroundLogo;

var truck;
var truckX = 50;
var truckY = 300;
var truckDirection = 2;

var compostBin;

var bin1ButtonWidth = 160;
var bin1ButtonHeight = 160;
var bin1ButtonX = 100;
var bin1ButtonY = 180;

var bin2ButtonWidth = 160;
var bin2ButtonHeight = 160;
var bin2ButtonX = 255;
var bin2ButtonY = 180;

var bin3ButtonWidth = 160;
var bin3ButtonHeight = 160;
var bin3ButtonX = 100;
var bin3ButtonY = 320;

var bin4ButtonWidth = 160;
var bin4ButtonHeight = 160;
var bin4ButtonX = 255;
var bin4ButtonY = 320;

var confirmBin;

var flyXarray = [];
var flyYarray = [];

function preload() {
  firstMenu = loadImage("assets/first_menu.png");
  secondMenu = loadImage("assets/second_menu.png");
  bottomMenuHome = loadImage("assets/bottom_menu.png");
  bottomBackMenu = loadImage("assets/bottom_back_menu.png");
  backgroundLogo = loadImage("assets/background_logo.png");
  truck = loadImage("assets/truck.png");
  compostBin = loadImage("assets/compost_bin.png");
  bin1 = loadImage("assets/bin1.png");
  bin1Fill = loadImage("assets/bin1_fill.png");
  bin2 = loadImage("assets/bin2.png");
  bin2Fill = loadImage("assets/bin2_fill.png");
  bin3 = loadImage("assets/bin3.png");
  bin3Fill = loadImage("assets/bin3_fill.png");
  bin4 = loadImage("assets/bin4.png");
  bin4Fill = loadImage("assets/bin4_fill.png");
}

function setup() {
  // put setup code here
  createCanvas(iphoneWidth / 2, iphoneHeight / 2);
  background(0, 100, 0);
  noStroke();
  fill(255, 0, 0);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(50);
  for(var i=0;i<4;i++){
  flyXarray[i]=random(150,150)}
  for(var i=0;i<4;i++){
  flyYarray[i]=random(303,303)}

}

function draw() {
  if (currentPage === 0) {
    displayIntroAndTransition();
  } else if (currentPage === 1) {
    displayPage1();
  } else if (currentPage === 2) {
    displayPage2();
  } else if (currentPage === 3) {
    displayPage3();
  } else if (currentPage === 4) {
    displayThankYouPage();
  }

}

function mousePressed() {
  var isOverlappingAcceptButton = isOverlappingButton(acceptButtonX, acceptButtonY, acceptButtonWidth, acceptButtonHeight);
  var isOverlappingSubmitButton = isOverlappingButton(submitButtonX, submitButtonY, submitButtonWidth, submitButtonHeight);
  var isOverlappingEnterButton = isOverlappingButton(enterButtonX, enterButtonY, enterButtonWidth, enterButtonHeight);
  var isOverlappingBin1Button = isOverlappingButton(bin1ButtonX, bin1ButtonY, bin1ButtonWidth, bin1ButtonHeight);
  var isOverlappingBin2Button = isOverlappingButton(bin2ButtonX, bin2ButtonY, bin2ButtonWidth, bin2ButtonHeight);
  var isOverlappingBin3Button = isOverlappingButton(bin3ButtonX, bin3ButtonY, bin3ButtonWidth, bin3ButtonHeight);
  var isOverlappingBin4Button = isOverlappingButton(bin4ButtonX, bin4ButtonY, bin4ButtonWidth, bin4ButtonHeight);
  var isOverlappingConfirmButton = isOverlappingButton(confirmButtonX, confirmButtonY, confirmButtonWidth, confirmButtonHeight);

  if (isOverlappingAcceptButton && currentPage === 1) {
    transitionPage()
  } else if (isOverlappingEnterButton && currentPage === 1) {
    transitionPage()
  } else if (isOverlappingSubmitButton && currentPage === 2) {
    transitionPage()
  } else if (isOverlappingBin1Button && currentPage === 2) {
    bin1Icon()
    confirmBin = bin1Fill
  } else if (isOverlappingBin2Button && currentPage === 2) {
    bin2Icon()
    confirmBin = bin2Fill
  } else if (isOverlappingBin3Button && currentPage === 2) {
    bin3Icon()
    confirmBin = bin3Fill
  } else if (isOverlappingBin4Button && currentPage === 2) {
    bin4Icon()
    confirmBin = bin4Fill
  } else if (isOverlappingConfirmButton && currentPage === 3) {
    transitionPage();
  }

}


function isOverlappingButton(buttonX, buttonY, buttonWidth, buttonHeight) {
  var isOverlapping = mouseX > (buttonX - buttonWidth / 2) &&
    mouseX < (buttonX + buttonWidth / 2) &&
    mouseY < (buttonY + buttonHeight / 2) &&
    mouseY > (buttonY - buttonHeight / 2)

  return isOverlapping;
}

function displayIntroAndTransition() {

  if (frameCount < introTime) {

  //I could not get the dropshadow on my logo to display properly so I
  //had to create an image with my logo and background together for the
  //welcome screen.

    image(backgroundLogo, width / 2, height / 2, width, height);
    image(compostBin, width / 2, 300, 150, 151);
    image(firstMenu, width / 2, 69 / 2, width, 69);
    fill(250);
    textSize(20);
    textStyle(ITALIC);
    textAlign(LEFT);
    let homeInstructionText = 'Please Submit Your Compost Bin Levels Daily';
    text(homeInstructionText, 160, 550, 300, 180);
    textAlign(CENTER, CENTER);
    image(bottomMenuHome, width / 2, 1225 / 2, width, 69);

  } else {
    currentPage = 1;
  }
}

function displayPage1() {
  background(119, 170, 77);

  textStyle(NORMAL);
  fill(44, 132, 65);
  image(secondMenu, width / 2, 69 / 2, width, 69);
  rect(acceptButtonX, acceptButtonY, acceptButtonWidth, acceptButtonHeight, 15);

  textStyle(NORMAL);
  fill(250);
  textSize(20);
  text("Is This Your Location?", locationQuestionX, locationQuestionY);

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("GPS: 36.975782,-121.8952505", locationGPSX, locationGPSY);

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("The Hideout", restaurantNameX, restaurantNameY);

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("9051 Soquel Dr, Aptos, CA 95003", restaurantAddressX, restaurantAddressY);

  textStyle(NORMAL);
  fill(255);
  textSize(20);
  text("Accept", acceptButtonX, acceptButtonY);

  fill(200, 200, 200);
  rect(enterLocationButtonX, enterLocationButtonY, enterLocationButtonWidth, enterLocationButtonHeight, );

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("Enter Location.....", enterLocationButtonX, enterLocationButtonY);

  fill(44, 132, 65);
  rect(enterButtonX, enterButtonY, enterButtonWidth, enterButtonHeight, 15);

  textStyle(NORMAL);
  fill(255);
  textSize(20);
  text("Enter", enterButtonX, enterButtonY);

  image(bottomBackMenu, width / 2, 1225 / 2, width, 69);

}

function displayPage2() {

  background(119, 170, 77);
  fill(44, 132, 65);
  image(secondMenu, width / 2, 69 / 2, width, 69);
  rect(submitButtonX, submitButtonY, submitButtonWidth, submitButtonHeight, 15);
  fill(250);
  textSize(20);

  image(bin1, bin1ButtonX, bin1ButtonY, bin1ButtonWidth, bin1ButtonHeight);
  image(bin2, bin2ButtonX, bin2ButtonY, bin2ButtonWidth, bin2ButtonHeight);
  image(bin3, bin3ButtonX, bin3ButtonY, bin3ButtonWidth, bin3ButtonHeight);
  image(bin4, bin4ButtonX, bin4ButtonY, bin4ButtonWidth, bin4ButtonHeight);

  fill(250);
  textSize(20);
  textStyle(ITALIC);
  textAlign(LEFT);
  let homeInstructionText = 'Submit Your Compost Bin Level';
  text(homeInstructionText, 160, 560, 300, 180);
  textAlign(CENTER, CENTER);

  text("Submit", submitButtonX, submitButtonY);
  image(bottomBackMenu, width / 2, 1225 / 2, width, 69);

}

function displayPage3() {
  background(119, 170, 77);
  image(confirmBin, 75, 335, bin4ButtonWidth, bin4ButtonHeight);

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("GPS: 36.975782,-121.8952505", locationGPSX, locationGPSY);

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("The Hideout", restaurantNameX, restaurantNameY);

  textStyle(NORMAL);
  fill(0);
  textSize(20);
  text("9051 Soquel Dr, Aptos, CA 95003", restaurantAddressX, restaurantAddressY);

  fill(44, 132, 65);
  image(secondMenu, width / 2, 69 / 2, width, 69);
  rect(confirmButtonX, confirmButtonY, confirmButtonWidth, confirmButtonHeight, 15);
  fill(250);
  textSize(20);
  text("Confirm", confirmButtonX, confirmButtonY);
  image(bottomBackMenu, width / 2, 1225 / 2, width, 69);

}

function displayThankYouPage() {
  background(119, 170, 77);
  image(secondMenu, width / 2, 69 / 2, width, 69);
  image(bottomMenuHome, width / 2, 1225 / 2, width, 69);
  fill(0);
  textSize(50);
  textStyle(ITALIC);

  text("Thank You", thankyouX, thankyouY);

  for(var i=0;i<4;i++){
  fill(20,20,20);
  ellipse(flyXarray[i],flyYarray[i], 6,3)
  flyXarray[i]+= random(-2,2);
  flyYarray[i]-= random(-2,2);

}

  image(truck, truckX, truckY, 500, 115);

  truckX = truckX + truckDirection

  if (truckX > 650) {
    truckDirection = 600

  }

}

function transitionPage() {
  currentPage += 1;
}

function bin1Icon() {
  bin1 = bin1Fill
}

function bin2Icon() {
  bin2 = bin2Fill
}

function bin3Icon() {
  bin3 = bin3Fill
}

function bin4Icon() {
  bin4 = bin4Fill
}
