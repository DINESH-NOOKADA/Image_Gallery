const express = require('express')
const app=express();
const cors = require("cors")
cors();
const fetch = require('node-fetch')
const PORT=8000;




app.get('/',(req,res)=>{
    res.send("home page");
})
app.get('/suggest',async function fetchData(req,res) {
    try {
      console.log();
      const apiurl=`https://serpapi.com/search.json?engine=google_autocomplete&q=${req.query.parameter}&hl=en&gl=us&api_key=be2171b8e063b285e2fec26e45dd3eab0d8b19bca42276fecfc1aab187d69d1c`
      const response = await fetch(apiurl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      res.send(data);
    } catch (error) {
      console.error('Error:', error);
    }
  })

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
})