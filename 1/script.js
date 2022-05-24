const f1 = document.forms['f1'];
const f2 = document.forms['f2'];


   f1.button.onclick = () => {
      if (f1.left.value !== ''){
   f1.right.value = f1.left.value;}

}

f2.bottom.onblur = () => {
   if (f2.bottom.value !== ''){
   f2.bottom.placeholder = f2.bottom.value;
   f2.bottom.value = '';
   }
}