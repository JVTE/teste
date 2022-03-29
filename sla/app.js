var animateButton = function(e){

    e.preventDefault;
    //reset animation
    e.target.classlist.remove('animate');

    e.target.classlist.add('animate');
    setTimeout(function(){
        e.target.classlist.remove('animate');

    },700);
};
 
var bubblyButtons = document.getElementByIdClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++){
    bubblyButtons[i].addEventListener('click', animateButton, false);
}