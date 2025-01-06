$("#facebook-form-link").on("submit",function(event){event.preventDefault();});
$("#twitter-form-link").on("submit",function(event){event.preventDefault();});
$("#instagram-form-link").on("submit",function(event){event.preventDefault();});
$("#linkedin-form-link").on("submit",function(event){event.preventDefault();});
$("#youtube-form-link").on("submit",function(event){event.preventDefault();});
$("#pinterest-form-link").on("submit",function(event){event.preventDefault();});
$("#snapchat-form-link").on("submit",function(event){event.preventDefault();});
$("#tiktok-form-link").on("submit",function(event){event.preventDefault();});
$("#facebook-input-link").on("submit",function(event){event.preventDefault();});
$("#twitter-input-link" ).on("submit",function(event){event.preventDefault();});
$("#instagram-input-link").on("submit",function(event){event.preventDefault();});
$("#linkedin-input-link").on("submit",function(event){event.preventDefault();});
$("#youtube-input-link").on("submit",function(event){event.preventDefault();});
$("#pinterest-input-link").on("submit",function(event){event.preventDefault();});
$("#snapchat-input-link").on("submit",function(event){event.preventDefault();});
$("#tiktok-input-link").on("submit",function(event){event.preventDefault();});
$("#facebook-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'Facebook',
        link: $("#Facebook-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#twitter-input-link" ).on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'Twitter',
        link: $("#Twitter-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#instagram-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'Instagram',
        link: $("#Instagram-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#linkedin-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'LinkedIn',
        link: $("#LinkedIn-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#youtube-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'YouTube',
        link: $("#YouTube-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#pinterest-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'Pinterest',
        link: $("#Pinterest-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#snapchat-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'SnapChat',
        link: $("#SnapChat-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});
$("#tiktok-input-link").on("click",function(event){
    event.preventDefault();
    axios.post(`RedesSociais/${atob($("#id").attr("content")).charCodeAt(0)}`,{
        rede: 'TikTok',
        link: $("#TikTok-input-link-valor").val()
    }).then(response => {
        if(response.data.status === 'success')
        {
            Swal.fire({
                title: response.data.message,
                icon: "success",
                draggable: true
            });
        }
    }).catch(error => {
        console.log(error.response.data.message);
        console.log(error.response.data.errors);
        if(error.response.data.message)
        {
            Swal.fire({
            icon: error.response.data.message,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        if(error.response.data.errors)
        {
            Swal.fire({
            icon: error.response.data.errors,
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    });
});