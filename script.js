const $buttons = document.querySelectorAll("ul li");

$buttons.forEach((node) => {
    node.addEventListener('onmousedown', function (event) {
        const value = node.innerText.trim();
        const $result = document.querySelector('result');
        const resultText = $result.innerText.trim();
        if ($resultText === 0) {
            $result.innerText = "";
        }
        if (value === "=") {
            let solution = eval(resultText);
            $result.innerText = solution;
            return true;
        }
        if (value.toLowerCase() === 'c') {
            $result.innerText = "";
            return true;
        }

        $result.append(value);
    })
})