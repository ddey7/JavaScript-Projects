window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDescriptions = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".degree-section");
    let temperatureSpan = document.querySelector(".degree-section span");




    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // console.log(long, lat);
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=fa64ef6423674738a83e4eac6a9ea378`;

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    var {
                        temp,
                        timezone
                    } = data.data[0];
                    var {
                        icon,
                        description
                    } = data.data[0].weather;
                    //Set DOM Element From the API
                    temperatureDegree.textContent = temp;
                    //   console.log(temperatureDegree.textContent);

                    temperatureDescriptions.textContent = description;
                    //   console.log(temperatureDescriptions.textContent);

                    locationTimezone.textContent = timezone;
                    //   console.log(locationTimezone.textContent);
                    //   console.log(icon);

                    //Set ICON
                    //   setIcon(icon, document.querySelector(".icon"));
                    let fehren = (temp * 9 / 5) + 32;
                    // let celsius = (temp - 32) * (5 / 9);
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === "C") {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = Math.floor(fehren);
                        } else {
                            temperatureSpan.textContent = "C";
                            temperatureDegree.textContent = temp;

                        }
                    });



                });
        });
    }

    //   function setIcon(icon, iconID) {
    //     const skycons = new Skycons({ color: "white" });
    //     const currentIcon = icon.replace(/-/g, "_");
    //     skycons.play();
    //     return skycons.set(iconID, skycons[currentIcon]);
    //   }
});

// temp: 31.7;
// aqi: 42;
// city_name: "Dispur";
// clouds: 99;
// country_code: "IN";
// datetime: "2020-07-18:11";
// dewpt: 25.3;
// dhi: 76.88;
// dni: 666.75;
// elev_angle: 21.16;
// ghi: 310.98;
// h_angle: 64.3;
// lat: 26.13;
// lon: 92.08;
// ob_time: "2020-07-18 11:32";
// pod: "d";
// precip: 0;
// pres: 983.542;
// rh: 88.2;
// slp: 1003.16;
// snow: 0;
// solar_rad: 64.5;
// state_code: "03";
// station: "VEGT";
// sunrise: "23:12";
// sunset: "12:47";
// temp: 27.4;
// timezone: "Asia/Kolkata";
// ts: 1595071949;
// uv: 1.39171;
// vis: 14;
// weather: code: 804;
// description: "Overcast Clouds";
// icon: "c04d";
// __proto__: Object;
// wind_cdir: "WNW";
// wind_cdir_full: "west-northwest";
// wind_dir: 300;
// wind_spd: 1.29372;