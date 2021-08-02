using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using brainflow;
using brainflow.math;

using TMPro;


public class openBCI : MonoBehaviour
{
    private BoardShim board_shim = null;
    private int sampling_rate = 0;
    int[] eeg_channels;
    public TextMeshProUGUI concentration_lvl_txt;

    // Start is called before the first frame update
    void Start()
    {
        try
        {
            BoardShim.set_log_file("brainflow_log.txt");
            BoardShim.enable_dev_board_logger();

            BrainFlowInputParams input_params = new BrainFlowInputParams();
            int board_id = (int)BoardIds.GANGLION_BOARD;
            input_params.serial_port = "COM8";
            board_shim = new BoardShim(board_id, input_params);
            board_shim.prepare_session();
            board_shim.start_stream(450000, "file://brainflow_data.csv:w");
            sampling_rate = BoardShim.get_sampling_rate(board_id);
            Debug.Log("Brainflow streaming was started");
            int nfft = DataFilter.get_nearest_power_of_two(sampling_rate);
            eeg_channels = BoardShim.get_eeg_channels(board_shim.get_board_id());
            print("sampling rate :" + sampling_rate);

        }
        catch (BrainFlowException e)
        {
            Debug.Log(e);
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (board_shim == null)
        {
            return;
        }
        int number_of_data_points = sampling_rate * 4;
        double[,] data = board_shim.get_current_board_data(number_of_data_points);
        // check https://brainflow.readthedocs.io/en/stable/index.html for api ref and more code samples
        //Debug.Log("Num elements: " + data.GetLength(1));


        Tuple<double[], double[]> bands = DataFilter.get_avg_band_powers(data, eeg_channels, sampling_rate, true);
        //print(bands.Item1.Length);
        double[] feature_vector = bands.Item1.Concatenate(bands.Item2);
        print(feature_vector.Length);
        BrainFlowModelParams model_params = new BrainFlowModelParams((int)BrainFlowMetrics.CONCENTRATION, (int)BrainFlowClassifiers.REGRESSION);
        MLModel concentration = new MLModel(model_params);
        concentration.prepare();
        var concentration_lvl = concentration.predict(feature_vector);
        concentration_lvl_txt.text = ((int)(concentration_lvl * 100f)).ToString() + " %";
        print("Concentration: " + concentration_lvl);
        concentration.release();
    }

    // you need to call release_session and ensure that all resources correctly released
    private void OnDestroy()
    {
        if (board_shim != null)
        {
            try
            {
                board_shim.release_session();
            }
            catch (BrainFlowException e)
            {
                Debug.Log(e);
            }
            Debug.Log("Brainflow streaming was stopped");
        }
    }
}