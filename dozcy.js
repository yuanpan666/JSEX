function sleep(ms)
{
	return new Promise((resolve)=>{setTimeout(resolve, ms);})
}
labs = document.querySelectorAll('label.ant-form-item-required');
for (j = 0; j < labs.length; j++) {
  console.log(labs[j].textContent);
  switch (labs[j].textContent) {
    case '产地':
      var nextSib = labs[j].parentNode.nextElementSibling;
      nextSib.querySelector('span.ant-radio').click();
      nextSib.querySelector('input#address81973').click();
      var lis = document.querySelector('ul.ant-cascader-menu').querySelectorAll('li');
      lis[10].click();
      var lis_s = lis[0].parentNode.nextElementSibling.querySelectorAll('li');
      lis_s[0].click();
      sleep(200).then(lis_s[0].parentNode.nextElementSibling.querySelectorAll('li')[0].click());      
      break;
    case '是否需要安装':
      var nextSib = labs[j].parentNode.nextElementSibling;
      var input = nextSib.getElementsByTagName('input');
      input[0].click();
      var ul = document.querySelectorAll('ul.ant-select-dropdown-menu');
      var size = ul.length;
      var lis = ul[size - 1].querySelectorAll('li');
      sleep(200).then(lis[0].click());         
      break;
    case '保质期 (个月)(个月)':
      console.log('ok');
      var nextSib = labs[j].parentNode.nextElementSibling;
      var input = nextSib.getElementsByTagName('input');
      input[0].click();
      var ul = document.querySelectorAll('ul.ant-select-dropdown-menu');
      var size = ul.length;
      var lis = ul[size - 1].querySelectorAll('li');
      var i = 0;
      for (; i < lis.length; i++) {
        if (lis[i].textContent.includes('12')) {
          sleep(200).then(lis[i].click());          
          break;
        }
      }
      if (i >= lis.length) {
        sleep(200).then(lis[i - 1].click());
        
      }
      
      break;
    case '运费模板':
      console.log('ok');
      var nextSib = labs[j].parentNode.nextElementSibling;
      var input = nextSib.getElementsByTagName('input');
      input[0].click();
      var ul = document.querySelectorAll('ul.ant-select-dropdown-menu');
      var size = ul.length;
      var lis = ul[size - 1].querySelectorAll('li');
      sleep(200).then(lis[0].click());
      
      
      break;
    default:
      break;
  }
}
var a = document.getElementById('brand');
var b = a.parentElement.parentElement.parentNode.querySelector('div.ant-select-selection-selected-value');
if (b) {
  return b.textContent;
}


var arg = arguments[0].toString();var ul= document.querySelectorAll('ul.ant-select-dropdown-menu'); var size = ul.length; var lis = ul[size-1].querySelectorAll('li'); var i=0; for(;i<lis.length;i++){ if(lis[i].textContent.includes(arg)) { lis[i].click(); break; } } if(i>=lis.length) { for(i=0;i<lis.length;i++){ if(lis[i].textContent.includes('无品牌')) { lis[i].click(); break; } } }"
       
