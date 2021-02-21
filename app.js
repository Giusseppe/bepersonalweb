const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let idiomas = [
  {
      "id":1,
  "header": {
    "me": "Acerca de mi",
    "cv": "Currivulum Vitae",
    "portafolio": "Portafolio",
    "dumbstuff": "Ocio",
    "contact": "Contacto"
  },
  "main": {
    "me": {
      "title": "Desarrollador Front-End",
      "title-tooltip": "Aspiro a ser Full-Stack!!",
      "desc": "¡Hola !, mi nombre es Giusseppe, soy Ingeniero de Software y me encanta lo que elegí hacer en la vida, me llena el alma, me apasiona. Me tomó un tiempo darme cuenta de que debo aprender constantemente, por lo que trato de hacer cursos a menudo para aprender cosas nuevas y mantenerme actualizado con las nuevas tecnologías. Soy un usuario activo en LinkedIn, invito a personas para expandir mi red, compartir e informarme.",
      "techs": "Tecnologías",
      "download": "Descargar CV"
    },
    "cv": {
      "education": {
        "title": "Educacion",
        "edu1": "Egresado de Ingeniería en Informática",
        "edu2": "Titulado de Ingeniería en Informática"
      },
      "experience": {
        "title": "Experiencia",
        "exp1": {
          "title": "Practica Profesional",
          "desc": "Desarrolle un proeycto llamado SRS (Sistema de revisión de segmentaciones), que permite revisar la segmentacion de captura de camiones cargados con madera.",
          "year": "Febrero 2014 - Abril 2014",
          "duration": "3 Meses"
        },
        "exp2": {
          "title": "Desarrollador Junior",
          "desc": "Miembro del equipo OyS (Operaciones y servicios), trabajé en la mejora continua del software entregado a los clientes de Woodtech. Mis funciuones fueron programar, crear reportes de medidas de troncos para un aserradero ubicado en EEUU.",
          "year": "Mayo 2014 - Abril 2016",
          "duration": "2 Años y 1 Mes"
        },
        "exp3": {
          "title": "Semi Senior Full Stack",
          "desc": "Durante 4 meses, aprendí HTML5, CSS, GIT, Angular y EOC (Ericsson Order Care) una tecnología usaba como Back-End para manejar las operaciones de todos los sistemas externos, tambien desarrolle un sitio web simple que simula una tienda online con un carrito de compras desarrollado en Angular. Luego, viajé a Fundao, Portugal por un mes para aprender como opera el equipo de desarrollo en Portugal. Actualmente, estoy trabajando en el equipo solucionando problemas/bugs que ocurren en produccionen el sistema OneClick.",
          "year": "Abril 2019 - Marzo 2020",
          "duration": "1 Año"
        },
        "exp4": {
          "title": "Semi Senior Full Stack",
          "desc": "Proyecto de 3 meses, Desarrollo de nuevas funcionalidades y correcion de bugs en Angular, creacion de web services en Spring y creacion de procedimientos almacenados en SQL Server para 3 sitios web.",
          "year": "Noviembre 2019 - Actualmente",
          "duration": "3 Meses"
        }
      }
    },
    "portafolio": {
      "seeMore": "Ver más",
      "p1": {
        "id": "1",
        "title": "Web Personal",
        "desc": "Es un sitio web dedicado a mostrar mi perfil profesional como desarrollador Full-Stack, en donde muestro las tecnologias que manejo, carrera profesional y proyectos realizados."
      },
      "p2": {
        "id": "2",
        "title": "Buy ur Gcard",
        "desc": "Sitio web de compras donde puedes comprar, listar y agregar tarjetas graficas a un carrito de compras."
      },
      "p3": {
        "id": "3",
        "title": "Firebase auth",
        "desc": "Un sitio simple que utiliza Firebase para la authentificacion, iniciar sesion con tu cuenta de google, almacenamiento de usuarios y consumo de api que lista usuarios."
      }
    },
    "dumbstuff": {},
    "contact": {
      "name": "Nombre",
      "email": "Correo",
      "message": "Mensaje",
      "email-desc": "Nunca voy a compartir tu email con alguien mas."
    }
  },
  "footer": {
    "text": "que sucede"
  }
},
{"id":2,
  "header": {
    "me": "About Me",
    "cv": "Resume",
    "portafolio": "Portafolio",
    "dumbstuff": "Dumb stuff",
    "contact": "Contact"
  },
  "main": {
    "me": {
      "title": "Front-End Developer",
      "title-tooltip": "Aspiring to be Full-Stack!!",
      "desc": "Hello, my name is Giusseppe! I am a Software Engineer. I love my career because it is very rewarding and fills my soul. I am very passionate about Software Engineering. It took me a while to realize that I must constantly be learning as the world and technology evolve. As a result, I stay updated on my Udemy courses. I'm also an active LinkedIn user. I invite other people to my LinkedIn profile in order to expand my network, share and to get informed.",
      "techs": "Technologies",
      "download": "Download CV"
    },
    "cv": {
      "education": {
        "title": "Education",
        "edu1": "Incomplete Software Engineer Degree (All signatures Approved)",
        "edu2": "Software Engineer Degree Obtained"
      },
      "experience": {
        "title": "Experience",
        "exp1": {
          "title": "Intership",
          "desc": "I developed a project called SRS (Segmentation Review System), which allows you to review the segmentation of captures of trucks loaded with wood.",
          "year": "February 2014 - April 2014",
          "duration": "3 Months"
        },
        "exp2": {
          "title": "Junior Software Engineer",
          "desc": "Team member of OyS (Operations and services), i worked in the continuous improvement of the software delivered to Woodtech's customers. My functions were develop software, create reports of log measures for a sawmill located in the USA.",
          "year": "May 2014 - April 2016",
          "duration": "2 Years y 1 Month"
        },
        "exp3": {
          "title": "Semi Senior Full Stack",
          "desc": "During 4 months, i learned HTML5, CSS, GIT, Angular y EOC (Ericsson Order Care) a technology used as Back-End to manage the operations of many external systems, also developed a simple web site simulating a shop with a shopping cart system using Angular. Then, i traveled to Fundao, Portugal for 1 month to learn how operates the development team in Portugal. Currently, im working at the bot team, solving issues that happens at production in the system OneClick.",
          "year": "April 2019 - March 2020",
          "duration": "1 Year"
        },
        "exp4": {
          "title": "Semi Senior Full Stack",
          "desc": " 3 Months proyect, Development of new functionalities and bug correction in Angular, creation of web services in Spring and creation of stored procedures in SQL Server for 3 different web sites.",
          "year": "November 2019 - Currently",
          "duration": "3 Months"
        }
      }
    },
    "portafolio": {
      "seeMore": "See more",
      "p1": {
        "id": "1",
        "title": "Personal Web",
        "desc": "It's a web site dedicated to show my professional profile as a Full-Stack developer, where i show the technologies that i know , professional career and my own projects developed."
      },
      "p2": {
        "id": "2",
        "title": "Buy ur Gcard",
        "desc": "Shopping web site where you can buy list and add graphic cards to a shopping cart."
      },
      "p3": {
        "id": "3",
        "title": "Firebase auth",
        "desc": "A simple site using Firebase to authenticate and store sessions with google your account. Besides consumes an api to list users"
      }
    },
    "dumbstuff": {},
    "contact": {
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "email-desc": "I'll never share your email with anyone else."
    }
  },
  "footer": {
    "text": "what's up"
  }
},{
    "id":3,
  "header": {
    "me": "Sobre mim",
    "cv": "Currículo",
    "portafolio": "Portafolio",
    "dumbstuff": "Coisas estúpidas",
    "contact": "Contato"
  },
  "main": {
    "me": {
      "title": "Programador Front-End",
      "title-tooltip": "Aspirando a ser Full-Stack!!",
      "desc": "¡Oi!, meu nome é Giusseppe, sou Engenheiro de Software e adoro o que escolhi fazer na vida, enche minha alma, sou apaixonado por isso. Demorei um pouco para perceber que eu precisava aprender constantemente, então tento fazer cursos Udemy com muita frequência para aprender coisas novas para me manter atualizado com as novas tecnologias. Sou um usuário ativo e vinculado no LinkedIn. Convido pessoas a expandir minha rede, compartilhar e se informar.",
      "techs": "Tecnologias",
      "download": "Baixar CV"
    },
    "cv": {
      "education": {
        "title": "Educação",
        "edu1": "Engenheiro de software incompleto (Todas as assinaturas aprovadas)",
        "edu2": "Graduado de engenheiro de software"
      },
      "experience": {
        "title": "Experiência",
        "exp1": {
          "title": "Estágio",
          "desc": "Desenvolvi um projeto chamado SRS (Segmentation Review System), que permite revisar a segmentação de capturas de caminhões carregados com madeira.",
          "year": "Fevereiro 2014 - Abril 2014",
          "duration": "3 Meses"
        },
        "exp2": {
          "title": "Junior Engenheiro de software",
          "desc": "Membro da equipe da OyS (Operações e serviços), trabalhei na melhoria contínua do software entregue aos clientes da Woodtech. Minhas funções eram desenvolver software, criar relatórios de medidas de toras para uma serraria localizada nos EUA.",
          "year": "Maio 2014 - Abril 2016",
          "duration": "2 Anos y 1 Mês"
        },
        "exp3": {
          "title": "Semi Senior Full Stack",
          "desc": "Durante 4 meses, aprendi HTML5, CSS, GIT, Angular e EOC (Ericsson Order Care), uma tecnologia usada como Back-End para gerenciar as operações de muitos sistemas externos, também desenvolvi um site simples simulando uma loja com um sistema de carrinho de compras usando Angular. Então, eu viajei para Fundao, Portugal por 1 mês para aprender como opera a equipe de desenvolvimento em Portugal. Atualmente, estou trabalhando na equipe de bot, resolvendo problemas que acontecem na produção no sistema OneClick.",
          "year": "Abril 2019 - Marcha 2020",
          "duration": "1 Ano"
        },
        "exp4": {
          "title": "Semi Senior Full Stack",
          "desc": "Projeto de 3 meses, desenvolvimento de novas funcionalidades e correção de bugs, criação de web services e criação de stored procedures para 3 websites.",
          "year": "Novembro 2019 - Atualmente",
          "duration": "3 Meses"
        }
      }
    },
    "portafolio": {
      "seeMore": "Ver mais",
      "p1": {
        "id": "1",
        "title": "Web Pessoal",
        "desc": "É um site dedicado a mostrar meu perfil profissional como desenvolvedor Full-Stack, onde mostrei as tecnologias que conheço, carreira profissional e meus próprios projetos desenvolvidos."
      },
      "p2": {
        "id": "2",
        "title": "Buy ur Gcard",
        "desc": "Site de compras onde você pode comprar, listar e adicionar placas de vídeo a um carrinho de compras."
      },
      "p3": {
        "id": "3",
        "title": "Firebase auth",
        "desc": "Um site simples usando o Firebase para autenticar e armazenar sessões com a sua conta no Google. Além de consumir uma API para listar usuários."
      }
    },
    "dumbstuff": {},
    "contact": {
      "name": "Nome",
      "email": "Email",
      "message": "Mensagem",
      "email-desc": "Nunca compartilharei seu email com outra pessoa."
    }
  },
  "footer": {
    "text": "e aí"
  }
}]

app.get('/', (req, res) =>{
    res.send('Hello world use --> /api/idiomas and /api/idiomas/id  (en,es,pt)');
})

app.get('/api/idiomas', (request, response) => {
  response.json(idiomas)
})

app.get('/api/idiomas/:id', (request, response) => {
  const id = Number(request.params.id)
  const idioma = idiomas.find(idioma => idioma.id === id)

  if (idioma) {
    response.json(idioma)
  } else {
    response.status(404).end()
  }
})

app.listen(port, () =>{
    console.log(`Ejemplo de app escuchando en http://localhost:${port}`);
})