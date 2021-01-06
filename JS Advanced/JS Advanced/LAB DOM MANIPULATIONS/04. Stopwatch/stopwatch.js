function stopwatch() {
    let startButon = document.getElementById("startBtn");
    let stopButon = document.getElementById("stopBtn");
    

     
    startButon.addEventListener("click", () => {
        document.getElementById("time").textContent = `00:00`;
        let minutes = 0;
        let seconds = 0;
        startButon.setAttribute("disabled", "true");
        stopButon.removeAttribute("disabled");

        let intervalTime = setInterval(() => {
            seconds++
            if(seconds == 60){
                seconds = 0;
                minutes++;
            }

            if(minutes < 10 && seconds < 10){
                document.getElementById("time").textContent = `0${minutes}:0${seconds}`;
            } else if(seconds < 10){
                document.getElementById("time").textContent = `${minutes}:0${seconds}`;
            } else if(minutes < 10){
                document.getElementById("time").textContent = `0${minutes}:${seconds}`;
            } else {
                document.getElementById("time").textContent = `${minutes}:${seconds}`;
            }

            

            stopButon.addEventListener("click", () => {
                stopButon.setAttribute("disabled", "true");
                startButon.removeAttribute("disabled");
                clearInterval(intervalTime);
            })

            
        }, 1000)
    })
}