// let submit=document.querySelector('#submit');
// submit.addEventListener('click',()=>{
//     submitData()
// })

// let submitData=()=>{
//     var tableRow="";
//     let tableBody=document.querySelector('#table-body').value;
//     let firstName=document.querySelector('#first-name').value;
//     let lastName=document.querySelector('#last-name').value;
//     let address=document.querySelector('#address').value;
//     let pinCode =document.querySelector('#pin-code').value;
//     let gender=document.querySelector('#gender').value;
//     let food1 = document.querySelector('#food1').value;
//     let food2 = document.querySelector('#food2').value;
//     let state = document.querySelector('#state').value;
//     let country = document.querySelector('#country').value;
//     tableRow+="<tr><td>"+firstName+"</td><td>"+lastName+"</td><td>"+address+"</td><td>"+pinCode+"</td><td>"+gender+"</td><td>"+food1+"</td><td>"+food2+"</td><td>"+state+"</td><td>"+country+"</td></tr>";
//     tableBody.innerHTML = tableRow
// }

let checkboxLimit=()=>{
    let checkBoxgroup=document.forms['form']['food']
    console.log(checkBoxgroup);
    var limit=2;
    for(let i=0; i<checkBoxgroup.length;i++) {
        checkBoxgroup[i].onclick=()=>{
            var checkedcount=0;
            for(let i=0; i<checkBoxgroup.length; i++) {
                checkedcount+=checkBoxgroup[i].checked ? 1 : 0;
            }
            if(checkedcount>limit){
                alert("you can select maximum"+limit+"checkboxes");
                this.checked=false;
            }
        }
    }
}