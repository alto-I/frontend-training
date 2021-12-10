class Person {
  constructor(name) {
    this.name = name
    console.log(this.name)
  }

  greet() {
    const doIt = function() {
      console.log(`Hi, I'm${this.name}`)
    }
    doIt()
  }
  
}

const alto = new Person('alto')
alto.greet()
