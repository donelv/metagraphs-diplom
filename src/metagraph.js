export const graphData = {
  nodes: [
    // 1 курс
    { id: "c1_st", course: 1, type: "course", name: '1 Курс' },
    {
      id: 2,
      course: 1,
      name: "1 Семестр",
      nestedNodes: [65, 75, 140, 150, 160, 170, 172, 182, 192, 711],
      hours: 591,
      ze: 31,
      exs_amount: 3,
      zcht_amount: 6
    },
    {
      id: 65,
      course: 1,
      name: "Аналитическая геометрия",
      department: "ФН-12",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 75,
      course: 1,
      name: "Иностранный язык",
      department: "Л-2",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 140,
      course: 1,
      name: "Математический анализ",
      department: "ФН-12",
      form: "экзамен",
      hours: 85,
      ze: 5,
      type: "disc",
    },
    {
      id: 150,
      course: 1,
      name: "Начертательная геометрия",
      department: "РК-1",
      form: "экзамен",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 160,
      course: 1,
      name: "Социология",
      department: "СГН-2",
      form: "зачет",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 170,
      course: 1,
      name: "Физ.культура и спорт",
      department: "ФВ",
      form: "зачет",
      hours: 64,
      ze: 2,
      type: "disc",
    },
    {
      id: 172,
      course: 1,
      name: "Информатика",
      department: "ИУ-5",
      form: "зачет",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 182,
      course: 1,
      name: "Основы программирования",
      department: "ИУ-5",
      form: "экзамен",
      hours: 119,
      ze: 6,
      type: "disc",
    },
    {
      id: 192,
      course: 1,
      name: "История России",
      department: "СГН-1",
      form: "зачет",
      hours: 51,
      ze: 2,
      type: "disc",
    },
    {
      id: 711,
      course: 1,
      name: "Проектно-технологическая практика",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 51,
      ze: 2,
      type: "disc",
    },
    {
      id: 3,
      course: 1,
      name: "2 Семестр",
      nestedNodes: [85, 202, 213, 234, 244, 254, 264, 274, 666, 713],
      hours: 563,
      ze: 29,
      exs_amount: 4,
      zcht_amount: 5
    },
    {
      id: 85,
      course: 1,
      name: "Иностранный язык",
      department: "Л-2",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 202,
      course: 1,
      name: "История России",
      department: "СГН-1",
      form: "распределенный экзамен",
      hours: 53,
      ze: 2,
      type: "disc",
    },
    {
      id: 213,
      course: 1,
      name: "Архитектура АСОИУ",
      department: "ИУ-5",
      form: "зачет",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 234,
      course: 1,
      name: "Инженерная графика",
      department: "РК-1",
      form: "дифференцированный зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 244,
      course: 1,
      name: "Интегралы и дифференциальные уравнения",
      department: "ФН-12",
      form: "экзамен",
      hours: 85,
      ze: 5,
      type: "disc",
    },
    {
      id: 254,
      course: 1,
      name: "Линейная алгебра и функции нескольких переменных",
      department: "ФН-12",
      form: "зачет",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 264,
      course: 1,
      name: "Программирование на основе классов и шаблонов",
      department: "ИУ-5",
      form: "экзамен",
      hours: 102,
      ze: 5,
      type: "disc",
    },
    {
      id: 274,
      course: 1,
      name: "Физика",
      department: "ФН-4",
      form: "экзамен",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 666,
      course: 1,
      name: "Элективный курс по физической культуре и спорту",
      department: "ФВ",
      form: "зачет",
      hours: 68,
      ze: 0,
      type: "disc",
    },
    {
      id: 713,
      course: 1,
      name: "Проектно-технологическая практика",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 68,
      ze: 2,
      type: "disc",
    },
    { id: "c1_end", course: 1, type: "course" },
    // 2 курс
    { id: "c2_st", course: 2, type: "course", name: '2 Курс'},
    {
      id: 4,
      course: 2,
      name: "3 Семестр",
      nestedNodes: [95, 223, 284, 295, 305, 315, 325, 335, 606, 668, 716],
      hours: 544,
      ze: 30,
      exs_amount: 4,
      zcht_amount: 6
    },
    {
      id: 95,
      course: 2,
      name: "Иностранный язык",
      department: "Л-2",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 223,
      course: 2,
      name: "Архитектура АСОИУ",
      department: "ИУ-5",
      form: "зачет",
      hours: 34,
      ze: 4,
      type: "disc",
    },
    {
      id: 284,
      course: 2,
      name: "Физика",
      department: "ФН-4",
      form: "экзамен",
      hours: 85,
      ze: 5,
      type: "disc",
    },
    {
      id: 295,
      course: 2,
      name: "Теория вероятностей и математическая статистика",
      department: "ФН-12",
      form: "экзамен",
      hours: 85,
      ze: 5,
      type: "disc",
    },
    {
      id: 305,
      course: 2,
      name: "Электротехника",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 315,
      course: 2,
      name: "Модели данных",
      department: "ИУ-5",
      form: "зачет",
      hours: 51,
      ze: 2,
      type: "disc",
    },
    {
      id: 325,
      course: 2,
      name: "Правоведение",
      department: "ЮР",
      form: "зачет",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 335,
      course: 2,
      name: "Экология",
      department: "Э-9",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 606,
      course: 2,
      name: "Парадигмы и конструкции языков программирования",
      department: "ИУ-5",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 668,
      course: 2,
      name: "Элективный курс по физической культуре и спорту",
      department: "ФВ",
      form: "зачет",
      hours: 68,
      ze: 0,
      type: "disc",
    },
    {
      id: 716,
      course: 2,
      name: "Технологическая практика",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 68,
      ze: 1,
      type: "disc",
    },
    {
      id: 5,
      course: 2,
      name: "4 Семестр",
      nestedNodes: [105, 345, 355, 365, 375, 385, 395, 670, 691, 718],
      hours: 544,
      ze: 30,
      exs_amount: 4,
      zcht_amount: 5
    },
    {
      id: 105,
      course: 2,
      name: "Иностранный язык",
      department: "Л-2",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 345,
      course: 2,
      name: "Базы данных",
      department: "ИУ-5",
      form: "распределенный экзамен",
      hours: 68,
      ze: 5,
      type: "disc",
    },
    {
      id: 355,
      course: 2,
      name: "Дискретная математика",
      department: "ФН-12",
      form: "распределенный экзамен",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 365,
      course: 2,
      name: "Системное программирование",
      department: "ИУ-5",
      form: "зачет",
      hours: 68,
      ze: 5,
      type: "disc",
    },
    {
      id: 375,
      course: 2,
      name: "Схемотехника дискретных устройств",
      department: "ИУ-5",
      form: "экзамен",
      hours: 85,
      ze: 4,
      type: "disc",
    },
    {
      id: 385,
      course: 2,
      name: "Электроника",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 395,
      course: 2,
      name: "Политология",
      department: "СГН-3",
      form: "зачет",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 670,
      course: 2,
      name: "Элективный курс по физической культуре и спорту",
      department: "ФВ",
      form: "зачет",
      hours: 68,
      ze: 0,
      type: "disc",
    },
    {
      id: 691,
      course: 2,
      name: "XML-технологии / Программирование сетевых приложений",
      department: "ИУ-5",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 718,
      course: 2,
      name: "Эксплуатационная практика",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 34,
      ze: 2,
      type: "disc",
    },
    { id: "c2_end", course: 2, type: "course" },
    // 3 курс
    { id: "c3_st", course: 3, type: "course", name: '3 Курс' },
    {
      id: 6,
      course: 3,
      name: "5 Семестр",
      nestedNodes: [115, 405, 415, 425, 435, 616, 626, 672, 720, 723],
      hours: 544,
      ze: 30,
      exs_amount: 4,
      zcht_amount: 4
    },
    {
      id: 115,
      course: 3,
      name: "Иностранный язык",
      department: "Л-2",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 405,
      course: 3,
      name: "Вычислительные средства АСОИУ",
      department: "ИУ-5",
      form: "экзамен",
      hours: 85,
      ze: 6,
      type: "disc",
    },
    {
      id: 415,
      course: 3,
      name: "Операционные системы",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 425,
      course: 3,
      name: "Сети и телекоммуникации",
      department: "ИУ-5",
      form: "экзамен",
      hours: 85,
      ze: 5,
      type: "disc",
    },
    {
      id: 435,
      course: 3,
      name: "Теория управления",
      department: "ИУ-1",
      form: "зачет",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 616,
      course: 3,
      name: "Разработка интернет-приложений",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 626,
      course: 3,
      name: "Оперативный анализ данных",
      department: "ИУ-5",
      form: "зачет",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 672,
      course: 3,
      name: "Элективный курс по физической культуре и спорту",
      department: "ФВ",
      form: "зачет",
      hours: 68,
      ze: 0,
      type: "disc",
    },
    {
      id: 720,
      course: 3,
      name: "Эксплуатационная практика",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 68,
      ze: 2,
      type: "disc",
    },
    {
      id: 723,
      course: 3,
      name: "Научно-исследовательская работа",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 68,
      ze: 1,
      type: "disc",
    },
    {
      id: 7,
      course: 3,
      name: "6 Семестр",
      nestedNodes: [125, 445, 455, 465, 475, 485, 495, 505, 674, 725],
      hours: 527,
      ze: 30,
      exs_amount: 4,
      zcht_amount: 5
    },
    {
      id: 125,
      course: 3,
      name: "Иностранный язык",
      department: "Л-2",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 445,
      course: 3,
      name: "Описание процессов жизненного цикла АСОИУ",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 455,
      course: 3,
      name: "Сетевые технологии в АСОИУ",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 6,
      type: "disc",
    },
    {
      id: 465,
      course: 3,
      name: "Технология мультимедиа",
      department: "ИУ-5",
      form: "зачет",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 475,
      course: 3,
      name: "Философия",
      department: "СГН-4",
      form: "зачет",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 485,
      course: 3,
      name: "Технологии машинного обучения",
      department: "ИУ-5",
      form: "экзамен",
      hours: 51,
      ze: 3,
      type: "disc",
    },
    {
      id: 495,
      course: 3,
      name: "Исследование операций",
      department: "ФН-12",
      form: "зачет",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 505,
      course: 3,
      name: "Сетевое программное обеспечение",
      department: "ИУ-5",
      form: "зачет",
      hours: 51,
      ze: 2,
      type: "disc",
    },
    {
      id: 674,
      course: 3,
      name: "Элективный курс по физической культуре и спорту",
      department: "ФВ",
      form: "зачет",
      hours: 68,
      ze: 0,
      type: "disc",
    },
    {
      id: 725,
      course: 3,
      name: "Научно-исследовательская работа",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 68,
      ze: 4,
      type: "disc",
    },
    { id: "c3_end", course: 3, type: "course" },
    // 4 курс
    { id: "c4_st", course: 4, type: "course", name: '4 Курс' },
    {
      id: 8,
      course: 4,
      name: "7 Семестр",
      nestedNodes: [515, 525, 535, 545, 555, 636, 681, 701, 727],
      hours: 476,
      ze: 30,
      exs_amount: 4,
      zcht_amount: 4
    },
    {
      id: 515,
      course: 4,
      name: "Методы поддержки принятия решений",
      department: "ИУ-5",
      form: "экзамен",
      hours: 85,
      ze: 5,
      type: "disc",
    },
    {
      id: 525,
      course: 4,
      name: "Технология конструирования ЭВМ",
      department: "ИУ-4",
      form: "распределенный экзамен",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 535,
      course: 4,
      name: "Экономика часть 1",
      department: "ИБМ-3",
      form: "зачет",
      hours: 34,
      ze: 2,
      type: "disc",
    },
    {
      id: 545,
      course: 4,
      name: "Безопасность жизнедеятельности",
      department: "Э-9",
      form: "зачет",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 555,
      course: 4,
      name: "Инженерная этика",
      department: "СГН-2",
      form: "зачет",
      hours: 34,
      ze: 3,
      type: "disc",
    },
    {
      id: 636,
      course: 4,
      name: "Имитационное моделирование дискретных процессов",
      department: "ИУ-5",
      form: "экзамен",
      hours: 51,
      ze: 5,
      type: "disc",
    },
    {
      id: 681,
      course: 4,
      name: "Методы / Средства проектирования АСОИУ",
      department: "ИУ-5",
      form: "зачет",
      hours: 68,
      ze: 3,
      type: "disc",
    },
    {
      id: 701,
      course: 4,
      name: "Беспроводные сети/Автоматизация развертывания и эксплуатации программного обеспечения",
      department: "ИУ-5",
      form: "экзамен",
      hours: 68,
      ze: 4,
      type: "disc",
    },
    {
      id: 727,
      course: 4,
      name: "Научно-исследовательская работа",
      department: "ИУ-5",
      // form: "экзамен",
      // hours: 68,
      ze: 2,
      type: "disc",
    },
    {
      id: 9,
      course: 4,
      name: "8 Семестр",
      nestedNodes: [565, 576, 586, 596, 646, 656, 729, 734, 736],
      hours: 324,
      ze: 30,
      exs_amount: 2,
      zcht_amount: 4
    },
    {
      id: 565,
      course: 4,
      name: "Экономика часть 2",
      department: "ИБМ-6",
      form: "зачет",
      hours: 24,
      ze: 2,
      type: "disc",
    },
    {
      id: 576,
      course: 4,
      name: "Эксплуатация АСОИУ",
      department: "ИУ-5",
      form: "экзамен",
      hours: 60,
      ze: 3,
      type: "disc",
    },
    {
      id: 586,
      course: 4,
      name: "Элементы управления в АСОИУ",
      department: "ИУ-5",
      form: "экзамен",
      hours: 72,
      ze: 4,
      type: "disc",
    },
    {
      id: 596,
      course: 4,
      name: "Русский язык делового общения",
      department: "Л-1",
      form: "зачет",
      hours: 36,
      ze: 2,
      type: "disc",
    },
    {
      id: 646,
      course: 4,
      name: "Защита информации",
      department: "ИУ-5",
      form: "зачет",
      hours: 48,
      ze: 2,
      type: "disc",
    },
    {
      id: 656,
      course: 4,
      name: "Анализ характеристик производительности КИС",
      department: "ИУ-5",
      form: "зачет",
      hours: 84,
      ze: 4,
      type: "disc",
    },
    // 729, 734, 736],
    {
      id: 729,
      course: 4,
      name: "Научно-исследовательская работа",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 84,
      ze: 2,
      type: "disc",
    },
    {
      id: 734,
      course: 4,
      name: "Преддипломная практика",
      department: "ИУ-5",
      // form: "зачет",
      // hours: 84,
      ze: 2,
      type: "disc",
    },
    {
      id: 736,
      course: 4,
      name: "Подготовка и защита ВКР",
      department: "ИУ-5",
      form: "ГЭК",
      // hours: 84,
      ze: 9,
      type: "disc",
    },
    { id: "c4_end", course: 4, type: "course" },
  ],
  links: [
    // 1 семестр
    { source: "c1_st", target: 65 },
    { source: 65, target: 75 },
    { source: 75, target: 140 },
    { source: 140, target: 150 },
    { source: 150, target: 160 },
    { source: 160, target: 2 },
    { source: 2, target: 170 },
    { source: 170, target: 172 },
    { source: 172, target: 182 },
    { source: 182, target: 192 },
    { source: 192, target: 711 },

    // 2 семестр
    { source: 711, target: 85 },
    { source: 85, target: 202 },
    { source: 202, target: 213 },
    { source: 213, target: 234 },
    { source: 234, target: 244 },
    { source: 244, target: 3 },
    { source: 3, target: 254 },
    { source: 254, target: 264 },
    { source: 264, target: 274 },
    { source: 274, target: 666 },
    { source: 666, target: 713 },
    { source: 713, target: "c1_end" },

    // 3 семестр
    { source: "c2_st", target: 95 },
    { source: 95, target: 223 },
    { source: 223, target: 284 },
    { source: 284, target: 295 },
    { source: 295, target: 305 },
    { source: 305, target: 315 },
    { source: 315, target: 4 },
    { source: 4, target: 325 },
    { source: 325, target: 335 },
    { source: 335, target: 606 },
    { source: 606, target: 668 },
    { source: 668, target: 716 },

    // 4 семестр
    { source: 716, target: 105 },
    { source: 105, target: 345 },
    { source: 345, target: 355 },
    { source: 355, target: 365 },
    { source: 365, target: 375 },
    { source: 375, target: 5 },
    { source: 5, target: 385 },
    { source: 385, target: 395 },
    { source: 395, target: 670 },
    { source: 670, target: 691 },
    { source: 691, target: 718 },
    { source: 718, target: "c2_end" },

    // 5 семестр
    { source: "c3_st", target: 115 },
    { source: 115, target: 405 },
    { source: 405, target: 415 },
    { source: 415, target: 425 },
    { source: 425, target: 435 },
    { source: 435, target: 6 },
    { source: 6, target: 616 },
    { source: 616, target: 626 },
    { source: 626, target: 672 },
    { source: 672, target: 720 },
    { source: 720, target: 723 },

    // 6 семестр
    { source: 723, target: 125 },
    { source: 125, target: 445 },
    { source: 445, target: 455 },
    { source: 455, target: 465 },
    { source: 465, target: 475 },
    { source: 475, target: 7 },
    { source: 7, target: 485 },
    { source: 485, target: 495 },
    { source: 495, target: 505 },
    { source: 505, target: 674 },
    { source: 674, target: 725 },
    { source: 725, target: "c3_end" },

    // 7 семестр
    { source: "c4_st", target: 515 },
    { source: 515, target: 525 },
    { source: 525, target: 535 },
    { source: 535, target: 545 },
    { source: 545, target: 555 },
    { source: 555, target: 8 },
    { source: 8, target: 636 },
    { source: 636, target: 681 },
    { source: 681, target: 701 },
    { source: 701, target: 727 },

    // 8 семестр
    { source: 727, target: 565 },
    { source: 565, target: 576 },
    { source: 576, target: 586 },
    { source: 586, target: 596 },
    { source: 596, target: 646 },
    { source: 646, target: 9 },
    { source: 9, target: 656 },
    { source: 656, target: 729 },
    { source: 729, target: 734 },
    { source: 734, target: 736 },
    { source: 736, target: "c4_end" },

    { source: 3, target: 4, directed: true },
    { source: 5, target: 6, directed: true },
    { source: 7, target: 8, directed: true },
  ],
}