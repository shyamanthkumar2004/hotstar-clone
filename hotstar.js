var vid=document.getElementById("vid");
function playvid(){
    vid.play();
}
function pausevid(){
    vid.pause();
}
var vid1=document.getElementById("vid1");
function playvid1(){
    vid1.play();
}
function pausevid1(){
    vid1.pause();
}
var vid2=document.getElementById("vid2");
function playvid2(){
    vid2.play();
}
function pausevid2(){
    vid2.pause();
}
var vid3=document.getElementById("vid3");
function playvid3(){
    vid3.play();
}
function pausevid3(){
    vid3.pause();
}
var vid4=document.getElementById("vid4");
function playvid4(){
    vid4.play();
}
function pausevid4(){
    vid4.pause();
}
var vid5=document.getElementById("vid5");
function playvid5(){
    vid5.play();
}
function pausevid5(){
    vid5.pause();
}
let cardContainers = document.querySelectorAll('.card-group1');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
let cardContainers1 = document.querySelectorAll('.card-group2');
let preBtns1 = document.querySelectorAll('.pre-btn1');
let nxtBtns1 = document.querySelectorAll('.nxt-btn1');
cardContainers1.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
let cardContainers2 = document.querySelectorAll('.card-group3');
let preBtns2 = document.querySelectorAll('.pre-btn2');
let nxtBtns2 = document.querySelectorAll('.nxt-btn2');
cardContainers2.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})