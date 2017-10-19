
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Window} from '../milib/views/windows/window';
import {Button} from '../milib/views/buttons/button';



export class Actividad1 implements EventsAdminListener{
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
        let pmw=DataHolder.instance.nScreenWidth*0.6;
        let pmh=DataHolder.instance.nScreenHeight*0.6;
        let pmx=DataHolder.instance.nScreenWidth2-(pmw>>1);
        let pmy=DataHolder.instance.nScreenHeight2-(pmh>>1);
        //this.panelMenu=new Panel(this.motor,pmx,pmy,pmw,pmh);
        this.window1=new Window(this.motor,pmx,pmy,pmw,pmh);
        this.motor.addViewToParentView(this.imagenFondo,this.window1);

        this.imagenCentro=new Imagen(this.motor,0,0,pmw,pmh)
        this.imagenCentro.setImg('./assets/fondoCentro2.jpg');
        this.motor.addViewToParentView(this.window1,this.imagenCentro);


        this.btnNuevo=new Button(this.motor,300,70,240,50);
        this.btnNuevo.setTexto("Nuevo");
        this.btnNuevo.setImagePath('./assets/btnNew.png');
        this.motor.addViewToParentView(this.window1,this.btnNuevo);


        this.btnContinuar=new Button(this.motor,300,170,240,50);
        this.btnContinuar.setTexto("Continuar");        
        this.btnContinuar.setImagePath('./assets/btnNew.png');
        this.motor.addViewToParentView(this.window1,this.btnContinuar);

        this.btnSalir=new Button(this.motor,300,270,240,50);
        this.btnSalir.setTexto("Salir");
        this.btnSalir.setImagePath('./assets/btnNew.png');
        this.motor.addViewToParentView(this.window1,this.btnSalir);

        if(this.btnContinuar.mouseClicked){
            this.btnContinuar.blVisible=false;
        }
       

       
    }

    private crearEscenarioJuego():void{
        
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

}