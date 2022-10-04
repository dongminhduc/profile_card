var btnContact = document.querySelector('.contact')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal_header i')
var btClose = document.querySelector('.modal_footer .btClose')
function toggleModal(e){
   
    modal.classList.toggle('hide');
}
btnContact.addEventListener('click', toggleModal)
btClose.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);
modal.addEventListener('click',function(e){
    if(e.target == e.currentTaget){
        toggleModal();
    }
})