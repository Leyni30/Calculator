const $buttons = document.querySelectorAll(".list li")
console.log($buttons)
$buttons.forEach(function (node) {
    node.addEventListener('mousedown', event => {
        const value = node.innerText.trim();
        console.log(value)
        const $result = document.querySelector('.result');
        console.log($result)
        const resultText = $result.innerText.trim();
        console.log(resultText)

        if (resultText == '0' || resultText == "Infinity" || resultText == "undefined") {
            $result.innerText = "";
        }
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
    })
})