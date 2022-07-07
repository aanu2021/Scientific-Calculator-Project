let string="";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    
   button.addEventListener('click',(e)=>{

      if(e.target.innerHTML === '='){

        string = eval(string);
        document.querySelector('input').value = string;

      }

      else if(e.target.innerHTML==='AC'){

         string = "";
         document.querySelector('input').value = string;

      }

      else if(e.target.innerHTML==='M+'){

        var len=string.length;

        var ch=string.charAt(len-1);

        string = string + ch;

        document.querySelector('input').value = string;
          
      }

      else if(e.target.innerHTML === 'M-'){

         var nstr = string.slice(0,-1);

          string = nstr;

         document.querySelector('input').value = string;

      }

      else{

        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;

      }

   })

})