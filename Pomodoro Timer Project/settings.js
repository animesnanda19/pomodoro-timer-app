const focusTimeInput = document.querySelector("#FocusTime");
const breakTimeInput = document.querySelector("#BreakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("FocusTime");
breakTimeInput.value = localStorage.getItem("BreakTime");

document.querySelector("form").addEventListener("submit",(e) =>{
    e.preventDefault();
    localStorage.setItem("FocusTime", focusTimeInput.value);
    localStorage.setItem("BreakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () =>{
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
});

pauseBtn.addEventListener("click", () =>{
    if (paused === undefined){
        return;
    }

    if(paused){
        paused = false;
        initial = setTimeout("decremenT()", 60);
        pauseBtn.textContent = "pause";
        pauseBtn.classList.remove("resume");

    }

    else{
        clearTimeout(initial);
        pauseBtn.textContent = "resume";
        pauseBtn.classList.add("resume");
        paused = true;
    }
});