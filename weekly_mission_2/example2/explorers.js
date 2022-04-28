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

   console.log("1.- Imprimimos el nombre cada explorer")
   explorers.forEach(name => {
    console.log("Nombre: %s", name.name);
   });

   console.log("2.- Imprimimos el stack de cada explorer: ")
   explorers.forEach((name) => {
    console.log(name);
   });

   console.log("3.- Creamos una lista nueva usando MAP")
   const stacks = explorers.map(function(stack ){
    return console.log(stack.name + ` ` + stack.stack);
   });

   console.log("4.- Filtramos el stack js de cada explorer")
   const filter = explorers.filter(function(stack){
       return console.log(stack.stack == 'js');
   });
