const carrossel = document.querySelector("[data-carrossel]") as HTMLDivElement

let count:number = 0;
   
  
      let animationCarrossel:number =  setInterval(()=>{
                carrossel.style.transition = "transform 0.5s ease-in-out";
                carrossel.style.transform = `translateX(${( count * -100)}%)`
        
                count++
                  
                if(count >= carrossel.children.length -1){
                    setTimeout(()=>{
                        carrossel.style.transition = "none";
                        carrossel.style.transform = `translateX(0)`;
                        count = 0;
        
                        carrossel.appendChild(carrossel.children[0])
        
                    }, 500)
                }
        }, 1800)
        
        
        
const boxfaq =  document.querySelectorAll("[data-boxfaq]") as NodeListOf <HTMLDivElement>

boxfaq.forEach((box)=>{
        
        const question = box.querySelector('ul');
        const answer = question?.children[1]; // Assumindo que a resposta é o segundo filho do ul
        const icon = box.querySelector("[data-iconfaq]"); // Ícone de expandir/contrair
    
        if (!question || !answer || !icon) return; // Garante que os elementos existem
    
        box.addEventListener("click", () => {
            const isHidden = box.classList.contains("noshow");
    
            if (!isHidden) {
                answer.classList.add("translate-y-0", "opacity-100", "relative");
                answer.classList.remove("-translate-y-full", "opacity-0", "absolute");
                box.classList.add("noshow");
                icon.classList.add("bi-caret-up-fill");
                icon.classList.remove("bi-caret-down-fill");
            } else {
                answer.classList.remove("translate-y-0", "opacity-100", "relative");
                answer.classList.add("-translate-y-full", "opacity-0", "absolute");
                box.classList.remove("noshow");
                icon.classList.add("bi-caret-down-fill");
                icon.classList.remove("bi-caret-up-fill");
            }
        });


})





    
    
    
