const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '002ff11e69msh642d9244f8c51bfp136aa4jsn74d388486591',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
// 	.then(response => response.json())
// 	.then(response => {var data = response})
// 	.catch(err => console.error(err));

const arr = document.getElementsByClassName('text-start');
const arr2 = document.getElementsByClassName('fields');

// To print weather parameters for below 3 cities
for(let i=0; i<arr.length; i++){
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${arr[i].innerHTML}`, options)
	.then(response => response.json())
	.then(response => {
        for(let j=0; j<arr2.length; j++){
            let kalu = arr2[j].innerHTML
            // console.log(kalu);
            // console.log(response[kalu]);
            document.getElementById(`${arr[i].innerHTML}/${arr2[j].innerHTML}`).innerHTML=`${response[kalu]}`;
            // console.log(i)
        } })
    .catch(err => console.error(err));      
}

var spanParameter = document.getElementsByClassName('span-parameter');
//To find weather of the city searched
function addRecord(){    
    let formElement = document.getElementById('formElement');
    let enteredCity = formElement.value;
    // formElement.value = "";
    console.log(enteredCity);
    // console.log(formElement);
    document.getElementById("city-line").innerHTML = `<b>${enteredCity}</b> Weather`;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${enteredCity}`, options)
	.then(response => response.json())
	.then(response => {
        var variables = ["temp", "humidity", "wind_speed"];
        for(let i=0; i<spanParameter.length; i++){
            let vulu = variables[i]
            console.log(spanParameter);
            // console.log(response[kalu]);
            spanParameter[i].innerHTML=`${response[vulu]}`;
            // console.log(i)
        } })
    .catch(err => console.error(err));
}

