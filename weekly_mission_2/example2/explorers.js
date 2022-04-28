const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("1.- Imprimimos el nombre cada explorer");
   explorers.forEach(name => {
    console.log("Nombre: %s", name.name);
   });

   console.log("2.- Imprimimos el stack de cada explorer: ");
   explorers.forEach((name) => {
    console.log(name);
   });

   console.log("3.- Creamos una lista nueva usando MAP");
   const stacks = explorers.map(function(stack ){
    return console.log(stack.name + ` ` + stack.stack);
   });

   console.log("4.- Filtramos el stack js de cada explorer");
   const filter = explorers.filter(function(stack){
       return console.log(stack.stack == 'js');
   });

   console.log("5.- Buscamos el explorer que sea de la CDMX");
   const find = explorers.find(city => city.city == "CDMX");
   console.log(find);

   console.log("6.- Sumamos los valores de exercises_completed");
   const reduce = explorers.reduce(function(previousValue, currentValue){
       return previousValue + currentValue.exercises_completed;
   }, 0);
   console.log("Total de ejercicios completados: " + reduce);

   console.log("7.- Validación por el operador SOME");
   const valsome = explorers.map(function(frontend){
    return frontend.missions.frontend.exercisesFinished;
   }) 
   function search(element){
       return element == true;
   }
   console.log(valsome.some(search));

   console.log("8.- Validación para el onbording");
   const val = explorers.map(function(onboarding){
    return onboarding.missions.onboarding.isFinished;
    })
   function every(element){
       return element == true;
   }
   const verifity = val.find(every);
   console.log(verifity);