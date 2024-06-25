const buttons = document.querySelectorAll('.button') ;
console.log(buttons);

const body = document.querySelector('body') ;

buttons.forEach((button) => {
    console.log(button) ;
    button.addEventListener("click", function (change){
        console.log(change);
        console.log(change.target);
        switch(change.target.id)
        {
            case "grey":
                body.style.backgroundColor = change.target.id ;
                break ;
            case "white":
                body.style.backgroundColor = change.target.id ;
            case "yellow":
                body.style.backgroundColor = change.target.id ;
                break ;
            case "orange":
                body.style.backgroundColor = change.target.id ;
                break ;
            case "green" :
                body.style.backgroundColor = change.target.id ;
        }
    })
})