import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,

  });

  const openai = new OpenAIApi(configuration);
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
  };
  return (
    <div>
      <input type="text" class="search-box" placeholder="Search"
        onChange={(e) => setPrompt(e.target.value)}
       
      />
      <br></br>
      <button type="submit" class="search-button"onClick={generateImage}>Generate an Image</button>
   
      <br></br>
      {result.length > 0 ? (<img src={result} alt="result" />) :( <>
      </>)}
    </div>
  );
}

export default App;
