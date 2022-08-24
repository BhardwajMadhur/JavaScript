const API_URL="https://api.covid19api.com/summary";
async function getAPIData(url)
{
    var data=await fetch(url);
    console.log("as");
    // var result=await data.json();
    // console.log(result);
    // console.log(result);
}