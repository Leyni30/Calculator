const $buttons = document.querySelectorAll(".list li")
// Firstly I grab a hold of the list items in the ul tag, or the buttons so I can go over them and make them work.
console.log($buttons)
$buttons.forEach(function (node) {
    node.addEventListener('mousedown', event => {
        const value = node.innerText.trim();
        console.log(value)
        const $result = document.querySelector('.result');
        console.log($result)
        const resultText = $result.innerText.trim();
        console.log(resultText)
        /*Then I go over them with forEach method that can go over the nodeList
        and on each I apply a function defined in the method as a parameter.
        That function is anonymous and takes in the list item/button as a parameter
        and attaches an event listener to it - mousedown.
        The second parameter that the event listener takes is the event itslef 
        which has properties of which we targer the innerText to get to the value of the button.
        And remove any possible empty spaces we might have written with the trim() method.
        This is up to line 6 in the code.
        My personal point I want to retain from this is that Once you grab a hold od a list
        you can then loop through it and on each item attach an event listener while looping.
        Meanwhile, with each looping we also grab a hold of the 'result' div
        and its innerText. 

        */

        if (resultText == '0' || resultText == "Infinity" || resultText == "undefined") {
            $result.innerText = "";
        } // Here I learned it is best practice to put the least expected outcome first.
        if (value == "=") {
            let solution = eval(resultText);
            $result.innerText = solution;
            return true;
        }
        if (value.toLowerCase() == 'c') {
            $result.innerText = "";
            return true;
        }

        $result.append(value);
        /* For this I had to read about the difference between
         append() and appendChild() methods. 
         I learned that appendChild() restricts you
         to only append Node objects and only one at a time.
         And it does return it, whereas append() doesnt have a return value
         and can add to the dom
         not only Node objects but also strings and more than one. */

    })
})