const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
  car('Mercedes', 'Vision AVTR','Alex','2021','+7 929 123 45 68','./images/mercedesAvatarVision.jpg'),
  car('Lamborghini', 'V12 Vision Gran Turismo','Alex','2020','+7 929 123 45 82','./images/lambo-V12-Vision.jpg'),
  car('Bugatti', 'Chiron','Alex','2019','+7 929 123 45 67','./images/bugatti.jpg'),
  car('Lamborghini', 'Millennio','Alex','2020','+7 929 123 45 82','./images/lambo-millennio.jpg'),
  car('Nio', 'P9','Alex','2020','+7 929 123 45 77','./images/niop9.jpg'),
  car('Reno', 'Trezor','Alex','2021','+7 929 123 45 79','./images/reno.jpg'),
  car('Mercedes', 'Electro','Alex','2020','+7 929 123 45 69','./images/mercedesElectro.jpg'),
  car('Porsche', 'Taycan','Alex','2019','+7 929 123 45 78','./images/porsche.jpg'),
  car('Tesla', 'Model X','Alex','2018','+7 929 123 45 80','./images/tesla.jpg'),
  car('AMG', 'AMG Mercedes','Alex','2018','+7 929 123 45 60','./images/amg.jpg'),
  car('Lamborghini', 'Huracan','Alex','2016','+7 929 123 45 81','./images/lambo.jpg'),
]

new Vue({
  el: '#app',
  data: {
    cars,
    car: cars[0],
    selectCarIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false,
    logs: []
  },
  methods: {
    // старое объявление
    selectCar: function (index) {
      this.car = this.filteredCars[index];
      this.selectCarIndex = index;
    },
    newOrder () {
      this.modalVisibility = false;
      this.logs.push(
        log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
      )
    },
    cancelOrder () {
      this.modalVisibility = false;
      this.logs.push(
        log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
      )
    }
  },
  computed: {
    // новое объявление, можно сокращать
    phoneBtnText () {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone';
    },
    filteredCars () {
      let searchToLowerCase = this.search.toLowerCase();
      return this.cars.filter( car => {
        // return car.name.toLowerCase().includes(searchToLowerCase) || car.model.includes(searchToLowerCase);
        return car.name.toLowerCase().indexOf(searchToLowerCase) > -1 || car.model.toLowerCase().indexOf(searchToLowerCase) > -1
      });
    }
  },
  filters: {
    date (value) {
      return value.toLocaleString();
    }
  }
})
