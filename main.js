const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);
 
    let template ="";
    let k=0;
    const images=(i)=>{
    for(i=k; i<k+60; i++){
        let id = response[i].thumbnailUrl;
        let title = response[i].title;
        template += `
        <div style="text-align;">
            <img src="${id}" style="margin-right: 90px; margin-left:50px;">
            <div style="width:200px; margin-left:50px; text-align: center;">
            <p style="overflow:auto">${title}</p>
          
            </div>
        </div>`
    }
    document.querySelector("#container-box").innerHTML = template
    }
    images(k);
  

   
}