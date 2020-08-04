import "https://api.openweathermap.org/data/2.5/weather?q=durban&appid=9e460b69fca16136929d4d85dd9d6afd&units=metric" as API from 'api';

test('failed request'), async () => {
 let data;
 try {
  data = await API.getWeather()
 }
}

)