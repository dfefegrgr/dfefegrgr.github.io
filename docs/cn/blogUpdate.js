document.addEventListener('DOMContentLoaded',function (){
    const contentDiv = document.querySelector('.content-section');
    const useMethodDiv = document.querySelector('.useMethod-section')
    if (contentDiv){
        const content = contentDiv.innerHTML;
        const section = document.querySelector('.appIntroduction');
        if (section){
            section.innerHTML = content;
            contentDiv.innerHTML='';
        }
    }
    if(useMethodDiv){
        const content = useMethodDiv.innerHTML;
        const section = document.querySelector('.useMethod');
        if (section){
            section.innerHTML = content;
            useMethodDiv.innerHTML='';
        }
    }
})