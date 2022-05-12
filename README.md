# Criação de uma library em Angular

   * Criar um projeto angular:
   
         ng new nomeDoProjeto
         
   * Abra o terminal dentro do projeto e execute o seguinte comando:
   
          ng g library NomeDaLibrary
       
   * Precisamos criar arquivo um arquivo dist e incluir o paths no tsConfigs com destino o dist, para isso executamos o comando:
   
          ng build nomeDaLibrary
      
   * No Modulo principal do projeto importe a lib que foi criarada, Ex: 
      * import { MyLibModule } from 'my-lib';
   * no App.component.html utilize o selector da lib criada, Ex:
      *  < lib-my-lib ></ lib-my-lib > 
   * Execute o comando para startar o projeto e verificar se a lib foi chamada corretamente:
   
             ng serve
             
   * (Obs): Se você tentar atualizar qualquer coisa dentro da sua lib, ira perceber que ela não vai alterar na no navegador, pelo motivo que a lib ela é utilizada pelo        espelho que seria o dist, então você terar que atualizar o dist executando o comando:
   
           ng build nomeDaLibrary
      
     ou para ficar sempre atualizando o dist pode utilizar o comando abaixo:
     
     
          ng build < nomeDaLib > --watch
     
   # Verdaccio
   
   * O que é o verdaccio ? 
      * O Verdaccio é um registro de proxy npm leve e privado escrito em Node.js 
   
   * Instalando o verdaccio
      * Execute o comando:

            npm install -g verdaccio

          ou caso esteja utilizando o yarn
            
            yarn global add verdaccio
       
       * Executar o verdaccio, digite no terminal:
            
             verdaccio
            
       * Assim que executar o comando acima ira perceber que o verdaccio nos deu um link local, Ex: 
         * http://localhost:4873/
         
       * Para que o Npm sempre fique olhando para o verdaccio, execute esse comando no terminal:
         * export  NPM_CONFIG_REGISTRY=http://localhost:4873/
         
       * Precisamos criar uma conta no Verdaccio para podemos vizualizar nossas libs, Execute o comando:
       
                npm adduser
                
                Adicione o UserName
                
                Adicionae a Password
                
                Adicione o Email
                
       * Para publicar a lib criada, Execute o comando:
       
                npm publish
                
       * Caso der um erro de privacidade na hora da publicação, vá no package.json da lib e altere o " private: true " para "private: false " 
                
       * Para verificar se a lib foi publicada no verdaccio, abra o link que o verdaccio nos fornece apos starta-lo, faça o login utilizando os dados que utilizou ao criar a conta, e verá que sua lib está lá publicada

# Continuando a configuração da lib






                  
       
                   
   
      
