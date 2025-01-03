const express = require('express');
const multer = require('multer');
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  patroncardsuploads,
  BlogUploads,
  teamMembersUploads,
  teamMembersUploadsV,
  Testimonialsuploads,
  FeaturedWorksuploads,
  collaborationsuploads,
  getteamMembers,
  getteamMembersV,
  getBlog,
  getpatroncards,
  getFeaturedWorks,
  getTestimonials,
  getcollaborations,
  deleteteamMembersById,
  deleteteamMembersByIdV,
  deleteBlogById,
  deletepatroncardsById,
  deleteFeaturedWorksById,
  deleteTestimonialsById,
  deletecollaborationsById,
  deleteEventById,
  getEvent,
  EventUploads
} = require('../controllers/fileController');

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// patroncardsuploads
router.post('/patroncardsuploads', authMiddleware, adminMiddleware, upload.single('file'), patroncardsuploads);
router.get('/getpatroncards', getpatroncards);
router.route("/patroncardsuploads/delete/:id").delete(authMiddleware, adminMiddleware, deletepatroncardsById);


// BlogUploads
router.post('/BlogUploads', authMiddleware, adminMiddleware, upload.single('file'), BlogUploads);
router.get('/getBlog', getBlog);
router.route("/BlogUploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteBlogById);


// Testimonialuploads
router.post('/Testimonialsuploads', authMiddleware, adminMiddleware, upload.single('file'), Testimonialsuploads);
router.get('/getTestimonials', getTestimonials);
router.route("/Testimonialsuploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteTestimonialsById);


// teamMembersUploads
router.post('/teamMembersUploads', authMiddleware, adminMiddleware, upload.single('file'), teamMembersUploads);
router.get('/getteamMembers', getteamMembers);
router.route("/teamMembersUploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteteamMembersById);

// teamUploads
router.post('/teamMembersUploadsV', authMiddleware, adminMiddleware, upload.single('file'), teamMembersUploadsV);
router.get('/getteamMembersV', getteamMembersV);
router.route("/teamMembersUploadsV/delete/:id").delete(authMiddleware, adminMiddleware, deleteteamMembersByIdV);


// FeaturedWorksuploads
router.post('/FeaturedWorksuploads', authMiddleware, adminMiddleware, upload.single('file'), FeaturedWorksuploads);
router.get('/getFeaturedWorks', getFeaturedWorks);
router.route("/FeaturedWorksuploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteFeaturedWorksById);

// collaborationsuploads
router.post('/collaborationsuploads', authMiddleware, adminMiddleware, upload.single('file'), collaborationsuploads);
router.get('/getcollaborations', getcollaborations);
router.route("/collaborationsuploads/delete/:id").delete(authMiddleware, adminMiddleware, deletecollaborationsById);

// EventUploads
router.post('/EventUploads', authMiddleware, adminMiddleware, upload.single('file'), EventUploads);
router.get('/getEvent', getEvent);
router.route("/EventUploads/delete/:id").delete(authMiddleware, adminMiddleware, deleteEventById);


module.exports = router;
