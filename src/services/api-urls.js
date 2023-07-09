export default function getApiUrl () {
  var urlGubun = '';
  if( location.host.indexOf('localhost')>-1 ){
      urlGubun = 'dev-';
  }
  else if( location.host.indexOf('-reboot.cyworld.com')>-1){
     urlGubun = (location.host.replace('reboot.cyworld.com',''));
  } else if(location.host==('cyworld.com')||location.host==('www.cyworld.com')){
      urlGubun=''
  }
  return urlGubun
}
