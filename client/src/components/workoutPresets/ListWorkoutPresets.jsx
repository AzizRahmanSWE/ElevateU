import React, { useEffect, useState, Fragment } from "react";
import { Box, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";


import BasketballImg from "../../assets/images/basketball.png";
import StrengthImg from "../../assets/images/weight-training.png";
import FatLossImg from "../../assets/images/fat-loss.png";



const ListWorkoutPresets = () => {
  const { id: dayPresetId } = useParams();
  const [preset, setPreset] = useState([]);

  const presetImages = {
    "Basketball":  BasketballImg,
    "Strength Training":  StrengthImg,
    "Fat Loss":  FatLossImg
  };
  
  const getWorkoutPresets = async () => {
    try {
      const response = await fetch("http://localhost:5000/workout_preset");
      const jsonData = await response.json();
      setPreset(jsonData);
    } catch (err) {
      console.err(err.message);
    }
  };

  useEffect(() => {
    getWorkoutPresets();
  }, [dayPresetId]);

  return (
    <Box>
      <Stack
        sx={{ mt: "100px" }}
        style={{ color: "white" }}>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              {preset.map((p) => (
                <th key={p.workout_preset_id}></th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {preset.map((p) => (
                <th key={p.workout_preset_id}>
                  <Link to={`/workout_preset/${p.workout_preset_id}`}>
                    <th>{p.preset_name}</th>
                  </Link>
                  <th>{p.description}</th>
                  <br />
                  <img src={presetImages[p.preset_name]} alt="p.preset_name"
                    style={{ borderRadius: '20px' , width: '450px', height: '500px', marginTop: "40px" }}/>
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </Stack>
    </Box>
  );
};

export default ListWorkoutPresets;
