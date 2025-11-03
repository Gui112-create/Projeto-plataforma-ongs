// js/scripts.js

document.addEventListener('DOMContentLoaded', ()=>{
  // Simple mask helper
  function setInputFilter(textbox, maskFn){
    textbox.addEventListener('input', e => {
      const start = textbox.selectionStart;
      const old = textbox.value;
      textbox.value = maskFn(old);
      // attempt to preserve caret — simple approach
      textbox.selectionStart = textbox.selectionEnd = Math.min(start + 1, textbox.value.length);
    });
  }

  // CPF mask 000.000.000-00
  const cpf = document.querySelector('#cpf');
  if(cpf){
    setInputFilter(cpf, v => {
      v = v.replace(/\D/g,'').slice(0,11);
      v = v.replace(/(\d{3})(\d)/,'$1.$2');
      v = v.replace(/(\d{3})(\d)/,'$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2');
      return v;
    });
  }

  // Phone mask (00) 00000-0000 or (00) 0000-0000
  const tel = document.querySelector('#telefone');
  if(tel){
    setInputFilter(tel, v => {
      v = v.replace(/\D/g,'').slice(0,11);
      if(v.length > 10){
        v = v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');
      } else {
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/,'($1) $2-$3');
      }
      return v;
    });
  }

  // CEP mask 00000-000
  const cep = document.querySelector('#cep');
  if(cep){
    setInputFilter(cep, v => {
      v = v.replace(/\D/g,'').slice(0,8);
      v = v.replace(/(\d{5})(\d{1,3})/,'$1-$2');
      return v;
    });
  }

  // Optional: simple client-side validation message for email
  const form = document.querySelector('form#cadastroForm');
  if(form){
    form.addEventListener('submit', e=>{
      // browsers handle required & pattern; here we can do a last check
      if(!form.checkValidity()){
        e.preventDefault();
        form.reportValidity();
      } // else allow submit (for the assignment, form can point to a dummy)
    });
  }
});

