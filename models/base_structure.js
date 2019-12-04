var user = {
  userId: Number,
  trailId_unlocked: Number,
  name: String,
  email: String,
  password: String,
  photo: String,
  teacher: Boolean,
  trail_completed: Array
};

var trail = {
  trailId: Number,
  //   step_number_max: Number, //permet de faire un current_step
  tags: Array, //thèmes abordés, spécialités du parcours (rea augmentée), difficultée
  details: Object,
  enigma: [
    [
      {
        step_number: Number,
        instruction: String,
        content: Object,
        solution: Object
      },
      { step2 }
    ],
    [{ step1 }, { step2 }, { step3 }]
  ] // content et solution : types à voir en fonction
};

var details = {
  detailsId: Number,
  trail_name: String,
  visual: Map,
  description: String,
  backup_step_in_progress: Number, //id de chaque étape? // barre de progression
  main_concept: Object,
  secondary_notions: Array,
  notation: String,
  estimated_time: String //en dur car au final pas d'utilité à manipuler cette date ultérieurement
};

var enigma = [
  {
    louvre: {
      //step 1 : besoin d'images (les fausses et les bonnes)
      //step 2 : besoin "dessin du Louvre" et bonnes images drag&dropables de la step 1
    }
  },
  {
    pont_neuf: {
      //step 1 : besoin des 4 questions
      //step 2 : besoin de la question finale de validation
    }
  }
];
