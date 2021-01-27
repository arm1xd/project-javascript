let blocks = document.getElementsByTagName('div');
console.log(blocks)
blocks[0].addEventListener('click' ,function (){
    blocks[0].classList = 'active'
    blocks[0].style.backgroundColor = 'aqua'
});
