const btnContainer = document.querySelector('.btn-container')
const allButtons = document.querySelectorAll('.tab-btn') 
const allContent = document.querySelectorAll('.content')

btnContainer.addEventListener('click', (e) => {
    console.log(allContent)

    const btnId = e.target.id;

    allButtons.forEach((btn) => {
        btn.classList.remove('active')

        if(btn.id === btnId) {
            btn.classList.add('active')
        }
    })

    allContent.forEach((content) => {
        content.classList.remove('active')

        if(content.id === `${btnId}-content`) {
            content.classList.add('active')
        }
    })
})
