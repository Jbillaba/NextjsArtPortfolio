import fsPromises from 'fs/promises';
import path from 'path';
import { useGlobal } from '../context/stateContext';

{/*
  were gonna keep logic related to logic in its component, we need to write a function here that can read the state of the system and make the appropiate call

  DynamicallyRenderArtwork
  ..psuedocode
  export function DynamicallyRenderArtwork() {
  switch case "food illustrations":
    fetchFoodIllustrations();
    break
  case "selected illustrations":
    fetchSelectedIllustrations();
    break;
  defualt "FoodIllustration"
  }

  */}


export async function fetchFoodIllustrations(){
    try {
        const filePath = path.join(process.cwd(), '/json/FoodIllustration.json');
        const jsonData = await fsPromises.readFile(filePath);
        const data = JSON.parse(jsonData);

        return data
    } catch (error) {
        throw new Error('Failed to fetch artwork data')
    }
}

export async function fetchSelectedIllustrations(){
    try {
        const filePath = path.join(process.cwd(), '/json/MisIllustrations.json');
        const jsonData = await fsPromises.readFile(filePath);
        const data = JSON.parse(jsonData);

        return data;
    } catch (error) {
        throw new Error('Failed to fetch artwork data')
    }
}
