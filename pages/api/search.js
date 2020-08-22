const qs = require("query-string");

export default (req, res) => {
  if (req.method === "GET") {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const { q } = qs.parse(url.search);
    if (!q) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "No Query Received" }));
    }

    fetch(
      `http://newsapi.org/v2/everything?q=${q}&apiKey=9152561a7d9f477eabb7741f4a904434`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        res.statusCode = 200;
        res.end(JSON.stringify({ articles: response.articles }));
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: err }));
      });
  } else {
    res.statusCode = 405;
    res.end(
      JSON.stringify({ error: `Can Only GET. Received ${req.method} request` })
    );
  }
};
