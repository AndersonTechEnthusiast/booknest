window.addEventListener("load",function(){
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.getElementById('CsrfToken-3').getAttribute('content');
});