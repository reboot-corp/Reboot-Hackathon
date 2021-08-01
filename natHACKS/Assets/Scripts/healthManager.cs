using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class healthManager : MonoBehaviour
{
    // health between 0 and 1
    public float health = 1f;

    Slider slider;
    // Start is called before the first frame update
    void Start()
    {
        slider = GameObject.Find("HealthBar").GetComponent<Slider>();
    }

    // Update is called once per frame
    void Update()
    {
        slider.value = health;
        // float x = Input.GetAxis("Horizontal");
        // if (x > 0) {
        //     health+=.05f;
        // }
        // if (x < 0) {
        //     health-=.05f;
        // }
    }
}
