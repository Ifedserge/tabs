const tabs = (selector) => {
    const tabContainer = document.querySelectorAll(selector);


    const contentHandler = (contens, index) => {
        contens.forEach((content, i) =>{
            if( i === index){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        });
    }
   

    const tabsHandler = (buttons, contents) => {
        buttons.addEventListener('click', event => {
            let button = event.target;
            if(button.tagName !== 'LI') return;
            [...buttons.children].forEach((btn, i) => {
                if (btn === button){
                    btn.classList.add('active');
                    contentHandler([...contents.children], i)
                }else{
                    btn.classList.remove('active');
                }
            })
        });

    }

    [...tabContainer].forEach(tab => {
        const buttons = tab.querySelector('.tabs');
        const content = tab.querySelector('.tabs__content');

        tabsHandler(buttons, content)
    })

   
}
tabs('.container');

const toolTips = (selector) => {
    const tooltips = document.querySelectorAll(selector);
    let tooltipDescription = null;

    const createTooltip = (event) => {
        if(event.target.tagName !== "SPAN") return;

        const elem = event.target;
        const text = elem.dataset.text;
        console.log(elem.dataset);

        let y = elem.offsetHeight + 3;
        let x = elem.offsetWidth; 


        tooltipDescription = document.createElement('div');
        tooltipDescription.classList.add('tool-tip-elemnt');
        tooltipDescription.innerText = text;

        tooltipDescription.style.top = y + 'px';
        // tooltipDescription.style.left = -x + 'px';

        elem.append(tooltipDescription); 


    }
    const removeTooltip = event => {
        const elem = event.target;

        [...elem.children].forEach(child => {
            if(child.classList.contains('tool-tip-elemnt')){
                child.remove();
                tooltipDescription = null;
            }
        })
    }

    tooltips.forEach(tooltip =>{
        tooltip.addEventListener('mouseover', function(event){
            createTooltip(event);
        });
        tooltip.addEventListener('mouseout', event => removeTooltip(event))
    })
}
toolTips('.tool-tip');