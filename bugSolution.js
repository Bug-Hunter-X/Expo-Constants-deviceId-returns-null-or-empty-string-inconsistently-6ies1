// bugSolution.js
import * as Constants from 'expo-constants';
import { v4 as uuidv4 } from 'uuid';

const getDeviceId = () => {
  const deviceId = Constants.deviceId;
  if (deviceId && deviceId.length > 0) {
    return deviceId;
  } else {
    // Generate a UUID as a fallback
    const uuid = uuidv4();
    console.log('Generated UUID:', uuid);
    return uuid; // Using UUID as a unique identifier
  }
};

export default getDeviceId; 