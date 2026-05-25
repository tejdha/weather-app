const apiKey = 'f0770c4177489c4dcd9f9cc3d2f577a7';

let input = document.getElementById('enter-city');
let but = document.getElementById('Search');
let res = document.getElementById('result');

but.addEventListener('click', async () => {
    const city = input.value.trim();
    
    if (!city){
        res.textContent = `Please Enter City Name`;
        return;
    }
    
    try {
        res.innerText = 'fetching letest weather report';
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
            if (!response.ok){
                res.innerHTML = `${city} not found Please enter valid city name`;
                return;
            }
        
            const data = await response.json();

            let {feels_like, humidity, temp} = data.main;
            let {speed } = data.wind;
            let {name} = data

            res.innerHTML = `<h3>Today Temprature ${temp} ℃ in ${name}</h3>
            <p> Feels like : ${feels_like} ℃ </p>
            <p> Humidity : ${humidity} % </p>
            <p> wind speed : ${(speed * 3.6).toFixed(1)} khm/hr </p>`;
            input.value = "";

            
    } catch (error) {
            res.textContent = `something went wrong `
        }

    });
input.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        but.click();
    }
})

// #overview-div{
//    border: 1px solid rgb(226, 226, 226,0.5);
//    border-radius: 7px;
//    max-height: fit-content;
//    max-width:none;
//    /* background-color: rgb(226, 226, 226,0.5); */
//    box-shadow:3px 3px 10px 1px rgb(179, 179, 179);
// }
// #enter-city{
//     border: 1px solid rgb(226, 226, 226,0.5);
//     border-radius: 10px;
//     box-shadow: 2px 2px 5px 0.5px rgb(179, 179, 179) ;
//     width:500px;
// }
// #details-div{
//     border: 1px solid rgb(226, 226, 226,0.5);
//    border-radius: 7px;
//    max-height: fit-content;
//    max-width:none;
//    /* background-color: rgb(226, 226, 226,0.5); */
//    box-shadow:3px 3px 10px 1px rgb(179, 179, 179);
// }
// #overview-cards > div{
//     border: 1px solid rgb(226, 226, 226,0.5);
//     border-radius: 10px;
//     box-shadow: 2px 2px 5px 0.5px rgb(179, 179, 179) ;
//     width:fit-content;
//     height: 100px;
// }
// #details-div > div{
//     border: 1px solid rgb(226, 226, 226,0.5);
//     border-radius: 10px;
//     box-shadow: 2px 2px 5px 0.5px rgb(179, 179, 179) ;
//     width:fit-content;
//     height: 100px;
// }
// a{
//   display:block;
// }

// #header-div{
//     display: flex;
//     justify-content:space-evenly;    
// }
// #overview-div > div{
//     display: flex;
//     justify-content: space-evenly;
// }
// #details-div {
//     display: flex;
//     /* flex-direction: row; */
//     justify-content:space-around;
//     gap: 10px;
// }

