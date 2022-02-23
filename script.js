

     
     
    
     let i=0;

let Category=localStorage.getItem("category");
        if(Category==null){
            localStorage.setItem("category",JSON.stringify([]));
        }


        if((localStorage.getItem("category")).length<=2){
            window.onload = (event) => {
           categories();

        };
        }

       
        
        
        async function categories(){
            console.log("hi");
            let res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
        );
    
            let data=await res.json();
            storelocal(data.meals);
            // console.log(data.meals);
                    }


        function storelocal(data){
        let category=JSON.parse(localStorage.getItem("category"));
        category.push(data);
        localStorage.setItem("category",JSON.stringify(category));
    }


    if(i==0){
    disply();
   function disply(){
        let data1=JSON.parse(localStorage.getItem("category"));
        data1=data1[0];
        data1.forEach(element => {
        let opt1=document.getElementById("opt1")
        let optn=document.createElement("option");
        optn.setAttribute("id","option")
        optn.value=element.strCategory;
        let temp=element.strCategory;
        optn.textContent=temp;
        opt1.append(optn);
        
    });

}
i++;
    }


function search(){
    var opt=document.getElementById("opt1").value;
    let footer=document.getElementById("footer");
    footer.textContent="";
    if(opt.length==0){
      return ;
   }
 getallitems(opt);

}
//  function getall(opt){
 
async function getallitems(opt){
    let res=await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${opt}`);
    let data=await res.json();
    data=data.meals;
    displaydata(data);

}
 
function displaydata(data)
{
    let cont=document.getElementById("container");
 
   cont.textContent="";
  
    data.forEach(element => {
     let div=document.createElement("div");
     let p=document.createElement("p");
     let imag=document.createElement("img");
     imag.src=element.strMealThumb;
     p.textContent=element.strMeal;
     div.append(imag,p);
     cont.append(div);  
    });
    let footer=document.getElementById("footer");
    footer.setAttribute("class","footer");
    let ptr=document.createElement("p");
    ptr.textContent="Masai"+" "+"School";
    console.log(ptr.textContent);
    footer.append(ptr);
}

   
   