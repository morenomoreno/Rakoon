#pragma strict
var player : Transform;
public var rotSpeed = 100.0f;
public var yOffset = 2.0f;
private var  offset : Vector3 = Vector3.zero;
function Start () {
	player = GameObject.FindGameObjectWithTag("Player").transform;
	offset = transform.position - player.transform.position;
}

function start(){
	
}
function LateUpdate () {
 	if (IsNotGrounded()) {
	 	offset = Quaternion.AngleAxis (Input.GetAxis("Horizontal") * rotSpeed * Time.deltaTime, Vector3.up) * offset;
		transform.position = player.position + offset; 
	    transform.LookAt(new Vector3 (player.position.x,player.position.y+ yOffset,player.position.z));

	}else{
		transform.position = player.position + offset; 
	    transform.LookAt(new Vector3 (player.position.x,player.position.y+ yOffset,player.position.z));
	}

}

function IsNotGrounded(): boolean {
   return Physics.Raycast(player.transform.position, -Vector3.up,0.9);
 }