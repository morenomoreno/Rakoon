public var speed = 16.0F;
public var jumpSpeed = 8.0F;
public var gravity = 20.0F;
public var rotSpeed = 100;
private var tiempo = 0.0;
private var  moveDirection : Vector3 = Vector3.zero;
private var rotation : Vector3 = Vector3.zero;
var cam : GameObject;
private var meta : boolean;
private var monedas ;
function Start(){
	//cam = GameObject.FindWithTag("camera");
	meta = false;
	monedas = 0 ;
}

function Update() {
	tiempo += Time.deltaTime;
   	var controller : CharacterController = GetComponent(CharacterController);
    if (controller.isGrounded) {
        moveDirection = new Vector3(0, 0, Input.GetAxis("Vertical"));
        moveDirection = transform.TransformDirection(moveDirection);

        rotation = new Vector3(0, Input.GetAxis("Horizontal") *rotSpeed* Time.deltaTime, 0);
        transform.Rotate(rotation);

        moveDirection *= speed;
        if (Input.GetButton("Jump"))
            moveDirection.y = jumpSpeed;
        
    }
    moveDirection.y -= gravity * Time.deltaTime;
    controller.Move(moveDirection * Time.deltaTime);
}



function OnGUI(){
	GUI.Box(Rect(5, 5, 100, 90),"");
	GUI.Label(Rect(10,70,100,20), "Tiempo: "+tiempo.ToString("f2"));
	GUI.Label(Rect(10,10,100,20),"Salud: ");
	GUI.Label(Rect(10,30,100,20),"Monedas: " + monedas);
	GUI.Label(Rect(10,50,100,20),"Vidas: ");
//	GUI.Label(Rect(10,70,100,20),"Tiempo Bola: "+ tiempoBola);

	if(meta){
		GUI.Box(Rect(Screen.width/2 - 50, Screen.height/2  -50, 100, 100),"You Win");
		if(GUI.Button(Rect(Screen.width/2 - 30, Screen.height/2  -20,60, 40),"Repetir")){
			Application.LoadLevel(Application.loadedLevel);
			}
		}
	
	/*if(muerte){
		GUI.Box(Rect(Screen.width/2 - 50, Screen.height/2  -50, 100, 100),"Game Over");
		//Si tenemos vidas, revivimos y retornamos al ultimo checkpoint
		if(vida > 0){
			if(GUI.Button(Rect(Screen.width/2 - 30, Screen.height/2  -20,60, 40),"Seguir")){
				vida--;
				transform.position = checkpoint.position;
				muerte = false;
				salud = 100;
				GetComponent.<Animation>()["Morir"].layer = -5;
			}
		}
	}*/
}
function OnTriggerEnter(obj : Collider){
	if (obj.tag == "finish"){
		meta = true;
	}
    if (obj.tag == "coin")
     {
     	Debug.Log("tocado");
        Destroy(obj.gameObject);
        //obj.gameObject.transform.position = new Vector3((Random.value * 100)-50, 1.0111f, (Random.value * 100)-50);
        monedas++;
    }

}