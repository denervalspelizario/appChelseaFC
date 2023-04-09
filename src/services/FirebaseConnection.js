import firebase from "firebase/app"; // importando o firebase
import 'firebase/database'; 
import 'firebase/auth';


/*
    ** após os imports vai até o site do firebase clica no app clica na engrenagem desce ate o copy
       copiando do const firebaseconfig ate o const app e cola neste arquivo e troca a const por let

    ** após o colar adicione a const app dentro da condicional if(linha 25)
    ** obs esse if tem que fica como na tela não usar o exemplod a documentação que dá erro

    ** se der erro do asyncstorage va em node_module > react-native > index.js depois ctrl + f
       e busca por asyncStorage  e comenta toda a exportação neste exemplo de linha 261 até 269
*/



let firebaseConfig = {
  apiKey: "AIzaSyC-1jfEzZlfnRisndXWeZV78GavoVjl620",
  authDomain: "appchelseafc.firebaseapp.com",
  projectId: "appchelseafc",
  storageBucket: "appchelseafc.appspot.com",
  messagingSenderId: "391712269021",
  appId: "1:391712269021:web:327448b1a0bade180f7134",
  measurementId: "G-16MWPLF1LR"
};

  if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);

  }
  
  export default firebase;
