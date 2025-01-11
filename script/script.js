let designBtn = document.getElementById('designBtn');
let scriptBtn = document.getElementById('scriptBtn');

if(designBtn || scriptBtn){
    designBtn.addEventListener('click', () => {
        scriptBtn.classList.remove('bg-gradient-to-r');
        scriptBtn.style.color = '#000000';
        designBtn.classList.add('bg-gradient-to-r');
        designBtn.style.color = '#525252';
    })
    
    scriptBtn.addEventListener('click', () => {
        designBtn.classList.remove('bg-gradient-to-r');
        designBtn.style.color = '#000000';
        scriptBtn.classList.add('bg-gradient-to-r');
        scriptBtn.style.color = '#525252';
    })
}