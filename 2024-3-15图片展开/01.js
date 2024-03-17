//选择所有图片id
const panel = document.querySelectorAll('.panel1, .panel2, .panel3, .panel4, .panel5');
   
//js的数组元素遍历方法foreach（）
panel.forEach(myFunction);
//给每个遍历加上监听点击
function myFunction(panel) {
    panel.addEventListener('click', () => {
        //调用下面的移走函数
        removeActiveClassed();
        panel.classList.add('active')
    })
}

function removeActiveClassed() {
    panel.forEach(function removeClass(panel) {
        panel.classList.remove('active');
    })
}


