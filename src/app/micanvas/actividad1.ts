
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Window} from '../milib/views/windows/window';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Label} from '../milib/views/labels/label';



export class Actividad1 implements EventsAdminListener, ButtonListener{
    private window1:Window;
    private motor:Motor;
    private panelMenu:Panel;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private imagenCentro:Imagen;
    private btnNuevo:Button;
    private btnContinuar:Button;
    private btnSalir:Button;
    private btnTest:Button;
    private window2:Window;
    private pmw=DataHolder.instance.nScreenWidth*0.6;
    private pmh=DataHolder.instance.nScreenHeight*0.6;
    private pmx=DataHolder.instance.nScreenWidth2-(this.pmw>>1);
    private pmy=DataHolder.instance.nScreenHeight2-(this.pmh>>1);
    private pregunta1:Label;
    private pregunta2:Label;
    private pregunta3:Label;
    private respuesta1:Button;
    private respuesta2:Button;
    private respuesta3:Button;
    private respuesta4:Button;


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/fondoCentro.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        
    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    private crearEscenarioMenu():void{
        //this.panelMenu=new Panel(this.motor,pmx,pmy,pmw,pmh);
        this.window1=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
        this.motor.addViewToParentView(this.imagenFondo,this.window1);

        this.imagenCentro=new Imagen(this.motor,0,0,this.pmw,this.pmh)
        this.imagenCentro.setImg('./assets/fondoCentro2.jpg');
        this.motor.addViewToParentView(this.window1,this.imagenCentro);


        this.btnNuevo=new Button(this.motor,300,70,240,50);
        this.btnNuevo.setTexto("Nuevo");
        this.btnNuevo.setImagePath('./assets/btnNew.png');
        this.motor.addViewToParentView(this.window1,this.btnNuevo);
        this.btnNuevo.setListener(this);


        this.btnContinuar=new Button(this.motor,300,170,240,50);
        this.btnContinuar.setTexto("Continuar");
        this.btnContinuar.setImagePath('./assets/btnNew.png');
        this.motor.addViewToParentView(this.window1,this.btnContinuar);
        this.btnContinuar.setListener(this);

        this.btnSalir=new Button(this.motor,300,270,240,50);
        this.btnSalir.setTexto("Salir");
        this.btnSalir.setImagePath('./assets/btnNew.png');
        this.motor.addViewToParentView(this.window1,this.btnSalir);
        this.btnSalir.setListener(this);

     



    }

    buttonListenerOnClick?(btn:Button):void{
        if(btn==this.btnNuevo){
         
          this.window2 = new Window(this.motor, this.pmx, this.pmy,this.pmw,this.pmh);
            this.motor.addViewToParentView(this.imagenFondo,this.window2);
            this.pregunta1=new Label(this.motor,380,70,100,50);

            this.pregunta1.setTexto("pregunta 1");
            this.motor.addViewToParentView(this.window2,this.btnNuevo);

            this.respuesta1 = new Button(this.motor,120,220,200,100);
            this.respuesta1.setTexto("respuesta1");

            this.respuesta2 = new Button(this.motor,520,220,200,100);
            this.respuesta2.setTexto("respuesta2");


            this.respuesta3 = new Button(this.motor,120,330,200,100);
            this.respuesta3.setTexto("respuesta3");

            this.respuesta4 = new Button(this.motor,520,320,200,100);
            this.respuesta4.setTexto("respuesta4");

            this.motor.addViewToParentView(this.window2,this.respuesta1);
            this.motor.addViewToParentView(this.window2,this.respuesta2);
            this.motor.addViewToParentView(this.window2,this.respuesta3);
            this.motor.addViewToParentView(this.window2,this.respuesta4);

        }

        if(btn==this.btnContinuar){
            
          }
          if(btn==this.btnSalir){
            
          }

      }

    private crearEscenarioJuego():void{

    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

}
