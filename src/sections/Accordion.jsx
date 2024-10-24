import React from 'react'

export const Accordion = (questions) => {
  return (

    questions.forEach(question => {

    question.addEventListener('click', e => {

        const parent = question.parentElement;

        if (parent.classList.contains('open')){
            parent.classList.remove('open')

            return
        }


        document.querySelectorAll('.accordion-item').forEach(answer => {
            answer.classList.remove('open')
        })

        parent.classList.add('open')
    })

})
  )
}
