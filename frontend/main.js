window.addEventListener('DOMContentLoaded', (event)=>{
    getVisitCount();
})

const functionApiUrl = 'https://bidyutresumecounter.azurewebsites.net/api/GetResumeCounter?code=Lvw6WxE3caySIOAvB8l6sAr1m0QVTLEU624QfheJvMov1pgfiJ0o4g=='
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}