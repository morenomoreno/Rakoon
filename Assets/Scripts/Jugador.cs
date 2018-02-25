using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Jugador : MonoBehaviour {

    public float force;
    public GameObject camera;

    public Text txtmonedas;
    

    private Rigidbody rb;
    public float speed;
    public float maxspeed;
    public GameObject referencia;
    private Vector3 poscamara;
    private int monedas;

	// Use this for initialization
	void Start () {
        rb = GetComponent<Rigidbody>();
        poscamara = camera.transform.position;
        monedas = 0;
	}
	
	// Update is called once per frame
	void Update () {
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");

        if(rb.velocity.magnitude > maxspeed)
        {
            rb.velocity = rb.velocity.normalized * maxspeed;
        }

        //Vector3 vector = new Vector3(h, 0, v);
        //rb.AddForce(vector * force * Time.deltaTime);
        rb.AddForce(v * referencia.transform.forward * speed);
        rb.AddForce(h * referencia.transform.right * speed);

        camera.transform.position = this.transform.position + poscamara;
	}

    void OnTriggerEnter(Collider obj)
    {
        //Destroy(obj.gameObject);
        if (obj.gameObject.tag == "coin")
         {
            //Destroy(obj.gameObject);
            obj.gameObject.transform.position = new Vector3((Random.value * 100)-50, 1.0111f, (Random.value * 100)-50);
            monedas++;
            txtmonedas.text = "Monedas: " + monedas.ToString();
        }
    }
}
