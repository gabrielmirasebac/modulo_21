const menuMain = document.querySelector('.information__menuMain');
const botaoMenu = document.getElementById('menu');
const botaoSubMenuFilmes = document.getElementById('subMenuFilmes');
const botaoSubMenuElenco = document.getElementById('subMenuElenco');
const subMenuFilmes = document.querySelector('.information__subMenu--filmes');
const subMenuElenco = document.querySelector('.information__subMenu--elenco');
const descriptionSubMenu = document.querySelector('.information__description');
const descriptionText = document.querySelector('.information__description--content p');
const displayCuriosities = document.querySelector('.information__curiosities');

let recebeMenu = '';
let recebeSubMenuFilmes = '';
let recebeSubMenuElenco = '';

// Constantes com os textos do submenu filme
const textMatrix1 = 'O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.';
const textMatrix2 = 'Após derrotar as máquinas em seu combate inicial, Neo ainda vive na Nabucodonosor ao lado de Morpheus, Trinity e Link, o novo tripulante da nave. As máquinas estão realizando uma grande ofensiva contra Zion, onde 250 mil delas escavam rumo à cidade e podem alcançá-la em poucos dias. A Nabucodonosor é convocada para retornar a Zion e participar da reunião que definirá o contra-ataque para salvar a humanidade da extinção. Entretanto, um recado enviado pelo Oráculo faz com que Neo retorne à Matrix.';
const textMatrix3 = 'Após enfrentar os sentinelas no mundo real, Neo, a maior esperança da humanidade, está preso entre a Matrix e a realidade. A maioria da população do planeta permanece em um estado de suspensão da realidade virtual. Os poucos humanos que estão cientes das duras realidades tentam desesperadamente afastar as máquinas a tempo de Neo escapar e salvar o dia. Mas as coisas pioram quando o poderoso programa de computador, Agente Smith, aparece na forma humana.';
const textMatrix4 = 'Se o Sr. Anderson, conhecido como Neo, aprendeu alguma coisa é que a escolha, mesmo sendo uma ilusão, é a única maneira de sair - ou entrar - da Matrix. Ele sabe o que precisa fazer, mas ainda não descobriu que a Matrix está mais forte e perigosa.';

// Constantes com os textos do submenu elenco
const neo = "Keanu Reeves, nascido em Beirute em 1964, é um ator canadense que começou sua carreira em teatro e televisão. Ele ganhou destaque com “Bill & Ted's Excellent Adventure” (1989) e se firmou como herói de ação em “Point Break” (1991) e “Speed” (1994). Após alguns fracassos, Reeves foi bem recebido em “The Devil's Advocate” (1997) e alcançou grande sucesso como Neo na franquia “The Matrix” (1999). Ele também estrelou “Constantine” (2005) e “John Wick” (2014), além de dirigir “Man of Tai Chi” (2013).";
const trinity = "Carrie-Anne Moss, nascida em 1967, começou sua carreira como modelo na Europa e atuou na série “Dark Justice” (1991). Mudou-se para Los Angeles, onde participou de comerciais e peças teatrais. Foi indicada ao Prêmio Gemini por seu papel em “Due South” (1996). Em 1999, interpretou Trinity na franquia “Matrix”. Casou-se com Steven Roy e tem três filhos: Owen, Jaden e Frances Beatrice.";
const morpheus = "Laurence John Fishburne III, (Augusta, 30 de Julho de 1961) é um ator e produtor estadunidense,[1] indicado ao Oscar de melhor ator pelo filme What's Love Got to Do with It. De 2008 a 2011, integrou o elenco fixo da série CSI: Crime Scene Investigation como o perito criminal Ray Langston, e na aclamada série Hannibal como o agente do FBI Jack Crawford. No cinema seu papel de maior destaque foi o personagem Morpheus na trilogia Matrix. É também conhecido pelo seu papel em Stargate Atlantis.";





botaoMenu.addEventListener('click',({target})=>{ //evento de clique do menu principal
    const select_menu = target.getAttribute('data-menu');

    if(recebeMenu === select_menu){
        menuMain.classList.remove('active');
        subMenuFilmes.classList.remove('active','opacity');
        subMenuElenco.classList.remove('active','opacity');
        descriptionSubMenu.classList.remove('active', 'runContent');
        displayCuriosities.classList.remove('active','runContent');
        recebeMenu = '';
        return;
    }

    recebeMenu = select_menu;

    menuMain.classList.remove('active');
    subMenuFilmes.classList.remove('active', 'opacity');
    subMenuElenco.classList.remove('active', 'opacity');
    descriptionSubMenu.classList.remove('active', 'runContent');
    displayCuriosities.classList.remove('active','runContent');

    switch(select_menu){
        case 'filmes':
            menuMain.classList.add('active');
            subMenuFilmes.classList.add('active');
            setTimeout(()=> subMenuFilmes.classList.add('opacity'),3000);
            break;
        case 'elenco':
            menuMain.classList.add('active');
            subMenuElenco.classList.add('active');
            setTimeout(()=> subMenuElenco.classList.add('opacity'),3000);
            console.log('elenco selecionado');
            break;
        case 'curiosities':
            menuMain.classList.add('active');
            displayCuriosities.classList.add('active','runContent');
            setTimeout(()=> displayCuriosities.classList.add('opacity'),3000);
            console.log('curiosidade selecionada')
            break;
    };
});

botaoSubMenuFilmes.addEventListener('click', ({ target }) => { // evento de clique do sub menu Filmes
    const selectSubMenuFilmes = target.getAttribute('data-filmes');

    // Verifica se o submenu clicado é o mesmo que o anterior
    if (selectSubMenuFilmes === recebeSubMenuFilmes) {
        // Alterna a visibilidade da descrição
        if (descriptionSubMenu.classList.contains('active')) {
            descriptionSubMenu.classList.remove('active', 'runContent');
        } else {
            descriptionSubMenu.classList.add('active');
            setTimeout(() => descriptionSubMenu.classList.add('runContent'), 500);
        }
    } else {
        // Atualiza o texto do submenu, nesse caso enquanto o submenu estiver oculto, para posterior ser mostrado.
        switch (selectSubMenuFilmes) {
            case 'matrix1':
                descriptionText.innerHTML = textMatrix1;
                break;
            case 'matrix2':
                descriptionText.innerHTML = textMatrix2;
                break;
            case 'matrix3':
                descriptionText.innerHTML = textMatrix3;
                break;
            case 'matrix4':
                descriptionText.innerHTML = textMatrix4;
                break;
        };

        // Adiciona as classes para mostrar a descrição, alterna a visibilidade
        if (!descriptionSubMenu.classList.contains('active')) {
            descriptionSubMenu.classList.add('active');
            setTimeout(() => descriptionSubMenu.classList.add('runContent'), 500);
        }

        // Atualiza o submenu selecionado
        recebeSubMenuFilmes = selectSubMenuFilmes;
    }
});

botaoSubMenuElenco.addEventListener('click', ({ target }) => { // evento de clique do sub menu Filmes
    const selectSubMenuElenco = target.getAttribute('data-elenco');

    // Verifica se o submenu clicado é o mesmo que o anterior
    if (selectSubMenuElenco === recebeSubMenuElenco) {
        // Alterna a visibilidade da descrição
        if (descriptionSubMenu.classList.contains('active')) {
            descriptionSubMenu.classList.remove('active', 'runContent');
        } else {
            descriptionSubMenu.classList.add('active');
            setTimeout(() => descriptionSubMenu.classList.add('runContent'), 500);
        }
    } else {
        // Atualiza o texto do submenu, nesse caso enquanto o submenu estiver oculto, para posterior ser mostrado.
        switch (selectSubMenuElenco) {
            case 'neo':
                descriptionText.innerHTML = neo;
                break;
            case 'trinity':
                descriptionText.innerHTML = trinity;
                break;
            case 'morpheus':
                descriptionText.innerHTML = morpheus;
                break;
        };

        // Adiciona as classes para mostrar a descrição, alterna a visibilidade
        if (!descriptionSubMenu.classList.contains('active')) {
            descriptionSubMenu.classList.add('active');
            setTimeout(() => descriptionSubMenu.classList.add('runContent'), 500);
        }

        // Atualiza o submenu selecionado
        recebeSubMenuElenco = selectSubMenuElenco;
    }
});

