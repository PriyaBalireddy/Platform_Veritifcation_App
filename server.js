const express = require("express");
const tls = require("tls");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

app.get("/check", (req, res) => {
  let host = req.query.url;
  if (!host) return res.status(400).json({ error: "URL required" });

  const socket = tls.connect(443, host, { servername: host }, () => {
    const cert = socket.getPeerCertificate();
    if (!cert || !cert.valid_to) {
      res.json({ status: "fake" });
    } else {
      let validTo = new Date(cert.valid_to);
      let validFrom = new Date(cert.valid_from);
      let daysRemaining = Math.ceil(
        (validTo.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      );

      let result = {
        organisation: host,
        validFrom: validFrom.toLocaleDateString("en-GB"), // dd-mm-yyyy
        expiry: validTo.toLocaleDateString("en-GB"),
        daysRemaining: daysRemaining,
        status: daysRemaining > 0 ? "Real (Valid)✅" : "Fake (Invalid)❌",
      };

      // Add issuer only if present
      if (cert.issuer && cert.issuer.O) {
        result.issuer = cert.issuer.O;
      }

      res.json(result);
    }
    socket.end();
  });

  socket.on("error", () => {
    res.json({ organisation: host, status: "Fake (Invalid)" });
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
