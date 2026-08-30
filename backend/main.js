const { createServer } = require('../src/health');

const PORT = 3000;

createServer().listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});