const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const allowedTypes = [
  "audio/mpeg",
  "audio/wav",
  "audio/ogg",
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
];

const tempUploadDir = path.join(__dirname, "../uploads/temp");
if (!fs.existsSync(tempUploadDir))
  fs.mkdirSync(tempUploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, tempUploadDir),
  filename: (req, file, cb) => {
    // Generate secure unique filename, completely ignoring original name except for extension
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uuidv4()}${ext}`);
  },
});

// const fileFilter = (req, file, cb) => {
//   if (allowedTypes.includes(file.mimetype)) cb(null, true);
//   else cb(new Error(`Unsupported file format: ${file.originalname}`), false);
// };

const fileFilter = (req, file, cb) => {
  if (
    allowedTypes.includes(file.mimetype) ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(new Error(`Unsupported file format: ${file.originalname}`), false);
  }
};


const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// Export the upload object itself so we can use different methods
module.exports = upload;
