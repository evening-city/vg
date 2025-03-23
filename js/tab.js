export const tabs = ()=>{
    if(document.querySelector('[data-tab-content]')){
        const buttons = document.querySelectorAll('[data-click-btn]');
        const tabs = document.querySelectorAll('[data-tab-content]');
    
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                tabs.forEach(tab => tab.classList.remove('active'));
                
                const target = button.getAttribute('data-click-btn');
                document.querySelector(`[data-tab-content="${target}"]`).classList.add('active');
            });
        });
        
    }
}