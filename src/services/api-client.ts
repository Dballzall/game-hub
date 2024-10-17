import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'cef784fff1444ffbb3e4f32568359396'
  }
})