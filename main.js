// const xhr = new XMLHttpRequest();
// const source =
//   "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
// xhr.open("GET", source, true);
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response);
//     let output = "";
//     for (let i = 0; i < response.length; i++) {
//       output += `
//         <div class="box">
//             <img src="https://picsum.photos/100/?random=${i}">
//             <div class="content">
//                 <p class="user">User - ${response[i].userId}</p>
               
//             </div>
//         </div>`;
//     }
//     document.querySelector("#container").innerHTML = output;
//   }
// };
// xhr.send();
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

xhr.send()
