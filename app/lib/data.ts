import Artwork from  './definitions';
import fsPromises from 'fs/promises';
import path from 'path';
import probe from 'probe-image-size';


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