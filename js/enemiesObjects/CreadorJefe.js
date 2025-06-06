function createVecna(){
    return new Jefe("Vecna",
        `Vecna ​​es un antagonista recurrente en DnD. Nacido como un pobre humano ordinario de la clase intocable, logró convertirse en el mago más exitoso de todos los tiempos. Finalmente, realizó un ritual mágico que le permitió ascender a la divinidad, pero Kas, su lugarteniente de mayor confianza, lo traicionó y le costó un ojo y una mano normales, que se convirtieron en artefactos mágicos. Intentó doblegar todo el multiverso a su voluntad usando la ciudad del sigilo, gobernada por la Dama del Dolor, pero finalmente fue derrotado por una combinación de ella y personajes jugables. Sin embargo, sobrevivió incluso después de que ella restableció por completo el multiverso, y Vecna ​​ha continuado con planes malvados para dominarlo.`,
        "/recursos/enemiesImg/vecna2.png",
        new Stats(14+"(+2)", 16+"(+3)", 18+"(+4)", 22+"(+6)", 24+"(+7)", 16+"(+3)")
    );

};

function createTiamat(){
    return new Jefe("Tiamat",
        `Tiamat es la reina de cinco cabezas de los dragones cromáticos malvados. Ella tiene una cabeza para cada uno de los colores más comunes de dragón cromático (negro, azul, verde, rojo, blanco), y cada cabeza tiene los poderes de un miembro de la raza respectiva de los dragones. El color de cada cabeza continúa por la espalda y los lados, con el tiempo la mezcla en tres franjas de color gris, azul-verde, y púrpura a lo largo de sus cuartos traseros, convirtiéndose en marrón oscuro en su cola. Su bajo vientre y las piernas rechonchas son mezcla blanco verdoso en los colores en los costados y la parte posterior. Su grasa, cuerpo hinchado es una mezcla de varias formas de dragones cromáticos con una piel adecuada multicolor. Su cola se inclina con un aguijón venenoso como la de un wyvern. `,
        "/recursos/enemiesImg/tiamat.png",
        new Stats(30+"(+10)", 10+"(+0)", 30+"(+10)", 26+"(+8)", 26+"(+8)", 28+"(+9)")
    );
};

function createDemogorgon(){
    return new Jefe("Demogorgon",
        `Demogorgon es un poderoso señor demonio y una deidad menor del Abismo. Es conocido por la mayoría como el Príncipe de los Demonios, y algunos señores de Helm lo llaman el Encarcelado, y Leegooggoogoon el "Padre Profundo" por algunos kuo-toa. El autoproclamado título de Príncipe de los Demonios lo ganó en virtud del poder y la influencia; muchos demonios lo desafiaron, pero ninguno pudo derrotar a Demogorgon y reclamarlo.`,
        "/recursos/enemiesImg/demogorgon.png",
        new Stats(29+"(+9)", 14+"(+2)", 26+"(+8)", 20+"(+5)", 17+"(+3)", 25+"(+7)")
    );
};

function createTam(){
    return new Jefe("Szass Tam",
        `Szass Tam es un poderoso liche y miembro de un grupo de ocho Zulkirs que gobiernan el país de Thay. Los Zulkir son archimagos que representan cada una de las ocho escuelas de magia que dirigen a los Magos Rojos de Thay. Tam es el Zulkir de la Nigromancia y comanda la Legión de Hueso, una enorme legión de soldados no muertos, liderada por sus generales vampiros y liches. Szass Tam es el gobernante de Thaymount.`,
        "/recursos/enemiesImg/szass.png",
        new Stats(11+"(+0)", 18+"(+4)", 20+"(+5)", 22+"(+6)", 20+"(+5)", 20+"(+5)")
    );
};

function createAcererak(){
    return new Jefe("Acererak",
        `Acererak viajaba por el multiverso en busca de artefactos, que le gustaba encerrar en mazmorras plagadas de trampas para ver sufrir y morir a los aventureros. Luego disfrutaba atrapando sus almas en su filacteria, cuya ubicación era desconocida.

        A pesar de haber tenido el poder y las oportunidades de ascender a la divinidad, Acererak no tenía ningún interés en ser adorado, a pesar de tener su cuota de seguidores cuyo sufrimiento disfrutaba viendo.`,
        "/recursos/enemiesImg/acerak.png",
        new Stats(13+"(+1)", 16+"(+3)", 20+"(+5)", 27+"(+8)", 21+"(+5)", 20+"(+5)")
    );
};

function createKyuss(){
    return new Jefe("Kyuss",
        `La verdadera historia del ser conocido como el Gusano que Camina era un misterio para los eruditos, aunque algunos afirmaban que alguna vez fue sumo sacerdote de Orcus. El único hecho conocido en el que todos coincidían era que el Gusano que Camina era originalmente un semidiós llamado Kyuss, que vivió en el pasado antiguo como nigromante mortal y creó muchas criaturas no muertas aberrantes, como los engendros de Kyuss que plagaban la Infraoscuridad.
        Con el tiempo, la maldad de Kyuss llevó a sus contemporáneos a exiliarlo a los márgenes de la sociedad. En lugar de languidecer como un paria, se convirtió en el profeta de una secta perversa que creía en la temida Era de los Gusanos. Durante esta época, Kyuss descubrió las ruinas de una civilización extinta en una isla cerca de Maztica, conocida como la Isla del Gusano Reptante por los elfos de Siempre Unidos, y reclamó el lugar como suyo, donde gobernó como un rey-dios. En las ruinas, sus seguidores descubrieron antiguas placas de metal que contenían terribles secretos, pero que también confirmaban todas las profecías que había pronunciado.`,
        "/recursos/enemiesImg/kyuss.png",
        new Stats(24+"(+7)", 20+"(+5)", 28+"(+9)", 30+"(+10)", 26+"(+8)", 20+"(+5)")
    );
};

function createArtemis(){
    return new Jefe("Artemis Entreri",
        `Artemis es el modelo de asesino, frío y brutalmente eficiente. Durante años, la vida de Entreri se ha centrado en su rivalidad con el héroe drow, Drizzt Do'Urden, alimentada por el contraste entre la naturaleza vacía de Entreri y la estrecha colección de amigos del drow. En última instancia, cayó en una sociedad con Jarlaxle Baenre, el líder de Bregan D'aerthe. Bajo la manipulación de Jarlaxle, Entreri creyó que finalmente había matado a Drizzt. En los últimos años, Artemis pasó a hacerse pasar por un aventurero honorable en Damara, donde durante un breve período Entreri fue coronado rey a regañadientes. Ese último acto atrajo la atención no deseada del rey Gareth Dragonsbane y una poderosa hermandad de asesinos. En las consecuencias de esos eventos, Artemis rompió su asociación con Jarlaxle, dándose cuenta de la medida en que el drow lo había manipulado durante años, y finalmente pudo haber llegado a un acuerdo con la persona en la que se ha convertido.`,
        "/recursos/enemiesImg/artemis.png",
        new Stats(14+"(+2)", 22+"(+6)", 15+"(+2)", 18+"(+4)", 18+"(+4)", 14+"(+2)")
    );
};