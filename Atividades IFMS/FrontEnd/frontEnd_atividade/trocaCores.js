function app() {

    function program() {

        // Declara Variaveis

        const button = document.getElementById('btn');

        const box = document.getElementById('box');

        // Animação
        
        button.addEventListener("click", ()=> {
            box.style.display = "flex"
        })

        function desativaBox() {
            if(box.style.display == "flex") {
                box.style.display = "none"
            }
            else {
                return false;
            }
        }

        }

    program();

}

app();