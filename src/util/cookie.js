exports.getCsrfToken = ()=>{
  let cookieArr = document.cookie.split(';')
  let a = cookieArr.find((v)=>v.indexOf('csrfToken') > -1 )
  if(a){
    return a.split('=')[1];
  }
  return '';
}
