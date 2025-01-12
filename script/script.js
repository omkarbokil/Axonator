let designBtn = document.getElementById('designBtn');
let scriptBtn = document.getElementById('scriptBtn');
let mobDesignBtn = document.getElementById('mobDesignBtn');
let mobScriptBtn = document.getElementById('mobScriptBtn');
let designPath = document.getElementById('designPath');
let scriptPath = document.getElementById('scriptPath');
let mobDesignPath = document.getElementById('mobDesignPath');
let mobScriptPath = document.getElementById('mobScriptPath');

if(designBtn || scriptBtn){
    designBtn.addEventListener('click', () => {
        scriptBtn.classList.remove('bg-gradient-to-r');
        scriptBtn.style.color = '#000000';
        scriptPath.style.stroke = '#000000';
        designBtn.classList.add('bg-gradient-to-r');
        designBtn.style.color = '#525252';
        designPath.style.fill = '#525252';
    })
    
    scriptBtn.addEventListener('click', () => {
        designBtn.classList.remove('bg-gradient-to-r');
        designBtn.style.color = '#000000';
        designPath.style.fill = '#000000';
        scriptBtn.classList.add('bg-gradient-to-r');
        scriptBtn.style.color = '#525252';
        scriptPath.style.stroke = '#525252';
    })
}

if(mobDesignBtn || mobScriptBtn){
    mobDesignBtn.addEventListener('click', () => {
        mobScriptBtn.classList.remove('bg-gradient-to-r');
        mobScriptBtn.style.color = '#000000';
        mobScriptPath.style.stroke = '#000000';
        mobDesignBtn.classList.add('bg-gradient-to-r');
        mobDesignBtn.style.color = '#525252';
        mobDesignPath.style.fill = '#525252';
    })
    
    mobScriptBtn.addEventListener('click', () => {
        mobDesignBtn.classList.remove('bg-gradient-to-r');
        mobDesignBtn.style.color = '#000000';
        mobDesignPath.style.fill = '#000000';
        mobScriptBtn.classList.add('bg-gradient-to-r');
        mobScriptBtn.style.color = '#525252';
        mobScriptPath.style.stroke = '#525252';
    })
}

let moreOptions = document.getElementById('moreOptions');
let moreOptionsPopup = document.getElementById('moreOptionsPopup');
let moreOptionsCloseBtn = document.getElementById('moreOptionsCloseBtn');

if(moreOptions){
    moreOptions.addEventListener('click', () => {
        moreOptionsPopup.classList.toggle('hidden');
    })
    moreOptionsCloseBtn.addEventListener('click', () => {
        moreOptionsPopup.classList.toggle('hidden');
    })
}

let toolbarOption = document.getElementById('toolbarOption');
let toolbar = document.getElementById('toolbar');
let toolbarCloseBtn = document.getElementById('toolbarCloseBtn');

if(toolbarOption){
    toolbarOption.addEventListener('click', () => {
        toolbar.classList.toggle('-left-[120%]');
        toolbar.classList.toggle('left-5');
    })

    toolbarCloseBtn.addEventListener('click', () => {
        toolbar.classList.toggle('-left-[120%]');
        toolbar.classList.toggle('left-5');
    })
    // toolbarOption.addEventListener('click', () => {
    //     toolbar.classList.toggle('hidden');
    // })

    // toolbarCloseBtn.addEventListener('click', () => {
    //     toolbar.classList.toggle('hidden');
    // })
}

let formSettingOption = document.getElementById('formSettingOption');
let formSettings = document.getElementById('formSettings');
let formSettingCloseBtn = document.getElementById('formSettingCloseBtn');

if(formSettingOption){
    formSettingOption.addEventListener('click', () => {
        formSettings.classList.toggle('-right-[120%]');
        formSettings.classList.toggle('right-0');
    })

    formSettingCloseBtn.addEventListener('click', () => {
        formSettings.classList.toggle('-right-[120%]');
        formSettings.classList.toggle('right-0');
    })
}

