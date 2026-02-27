// x: {min: 0, max: 2447}
// y: {min: 0, max: 2046}
// bblen: {min: 1.73205080756888, max: 235.9322}
const CENTER_X = 1224;
const CENTER_Y = 1014;
const H = 2235; // estimate
const TARGET_SIZE = 3; // mosquito size in mm
const FOCAL_LENGTH = 8; // focal length in mm
const SENSOR_SIZE_PER_PIXEL = 0.00345; // pixel size on sensor
const FLOOR_SIZE_PER_PIXEL = SENSOR_SIZE_PER_PIXEL / FOCAL_LENGTH * H;

function getPosition(datum, settings) {
  const {x, y} = datum;
  const size = settings.smooth ? datum.size : getBBSize(datum);

  if (!settings.project3D) {
    return [(x - CENTER_X) * FLOOR_SIZE_PER_PIXEL, (y - CENTER_Y) * FLOOR_SIZE_PER_PIXEL, Math.round(size * 6)];
  }

  const sensorX = (x - CENTER_X) * SENSOR_SIZE_PER_PIXEL;
  const sensorY = (y - CENTER_Y) * SENSOR_SIZE_PER_PIXEL;
  const sensorD = Math.sqrt(sensorX * sensorX + sensorY * sensorY);
  // angle from object to camera center axis
  const a = Math.atan(sensorD / FOCAL_LENGTH);

  const sensorSize = SENSOR_SIZE_PER_PIXEL * size;
  const d = TARGET_SIZE / sensorSize / Math.cos(a) * FOCAL_LENGTH;
  
  const worldX = (x - CENTER_X) * SENSOR_SIZE_PER_PIXEL / FOCAL_LENGTH * d;
  const worldY = (y - CENTER_Y) * SENSOR_SIZE_PER_PIXEL / FOCAL_LENGTH * d

  return [worldX, worldY, H - d];
}

function trackIdToColor(id) {
  // differentiating
  return [(id >> 7) * 6, (id % 128) * 2, (id % 4) * 64];
  // gradient
  return [id >> 7, id % 256, 0];
}

function timestampToColor(timestamp) {
  timestamp *= 1e-6;
  return [0, timestamp * 25, 0];
}

function smooth(arr, numNeighbors) {
  const halfNeighbors = Math.floor(numNeighbors - 1) / 2;
  const n = arr.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < numNeighbors; j++) {
      const index = i - halfNeighbors + j;
      if (index >= 0 && index < n) {
        sum += arr[index];
        count++;
      }
    }
    result[i] = sum / count;
  }
  return result;
}

function stat(rows) {
  const columns = Object.keys(rows[0]).filter(col => Number.isFinite(rows[0][col]));
  const result = {};
  for (const col of columns) {
    result[col] = {min: Infinity, max: -Infinity, NaN: 0};
  }
  for (const row of rows) {
    for (const col of columns) {
      const value = row[col];
      const r = result[col];
      if (Number.isFinite(value)) {
        r.min = Math.min(r.min, value);
        r.max = Math.max(r.max, value);
      } else {
        r.NaN++;
      }
    }
  }
  return result;
}
