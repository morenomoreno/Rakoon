using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;
public class LoadSceneByIndex : MonoBehaviour {

	public void LoadByIndex (int sceneIndex)
	{
		SceneManager.LoadScene (sceneIndex);
	}
}