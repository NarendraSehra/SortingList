let movies = [
    {
        Name:"Shawshank Redemption",
        id:"tt143",
        rank:5
    },
    {
        Name:"Red Rock",
        id:"tt324",
        rank:6
    },
    {
        Name:"Ratatouille",
        id:"tt1553",
        rank:3
    },
    {
        Name:"Kingsman",
        id:"tt109",
        rank:1
    },
    {
        Name:"Redemption",
        id:"tt234",
        rank:4
    },
    {
        Name:"Money Heist",
        id:"tt443",
        rank:2
    },
    {
        Name:"Dominic",
        id:"tt220",
        rank:8
    },
    {
        Name:"Vendata",
        id:"tt112",
        rank:7
    },
    {
        Name:"Pain And Gain",
        id:"tt624",
        rank:9
    },
]
var isAsc;
var storeAttr;
window.onload = function(){

    
    var attr;
    
    
    displayList(movies);
    var table = document.querySelector("#mytable");
    var tablechild = table.firstChild.firstChild.childNodes;
    tablechild.forEach(s => s.addEventListener('click',function(e){
            attr = e.target.innerHTML;
            switch(attr)
           {
               case "Id":
                   attr =  "id";
                   break;
                case "Rank":
                    attr = "rank";
                    break;
           }
        if(storeAttr === attr && isAsc === true){
            isAsc=false;
            console.log(attr);
        }
        else{
            isAsc = true;
            storeAttr = attr;
        }
    var sortedMovies = SortingMoviesToggle(movies,attr);
    displayList(sortedMovies); 
    }));
    
};

function displayList(movies){
    
    
    var tableHeader =  document.querySelector("#mytable");
    var tableRowLength = tableHeader.rows.length;
    for(let k =tableRowLength-1;k>0;k--){
        tableHeader.deleteRow(k);
    }
    
    for(let i=0 ;i<movies.length;i++)
    {
        tableRow = document.createElement("tr");
        tableData = document.createElement("td");
        tableData.innerHTML = movies[i].Name;
        tableData1 = document.createElement("td");
        tableData1.innerHTML = movies[i].id;
        tableData2 = document.createElement("td");
        tableData2.innerHTML = movies[i].rank;

        tableRow.appendChild(tableData);
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);

        tableHeader.appendChild(tableRow);
        
    }
  
    
}

function SortingMoviesToggle(movies,attr){

    movies.sort(function(first,second){
        if(isAsc){
            if(first[attr]>second[attr]){
                return 1;
            }
            else
                return -1;
        }
        else
        {
            if(first[attr]>second[attr])
                return -1;
            else
                return 1;
        }
    });
    return movies;
}



