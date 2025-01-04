const {EventModel,collaborationsModel, BlogModel,teamMembersModelV, FeaturedWorksModel, patroncardsModel, TestimonialsModel, teamMembersModel } = require('../model/uploads-model');

const Testimonialsuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, designation, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await TestimonialsModel({ path: filePath, filename, name, designation, description });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};
const getTestimonials = async (req, res) => {
  try {
    const oldphotos = await TestimonialsModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));
    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const deleteTestimonialsById = async (req, res) => {
  try {
    const id = req.params.id;
    await TestimonialsModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const collaborationsuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await collaborationsModel({ path: filePath, filename, name });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};
const getcollaborations = async (req, res) => {
  try {
    const oldphotos = await collaborationsModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));
    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const deletecollaborationsById = async (req, res) => {
  try {
    const id = req.params.id;
    await collaborationsModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const FeaturedWorksuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { heading } = req.body;

    if (!heading) {
      return res.status(400).json({ error: 'heading is required.' });
    }

    const photos = await FeaturedWorksModel({ path: filePath, filename, heading });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getFeaturedWorks = async (req, res) => {
  try {
    const oldphotos = await FeaturedWorksModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteFeaturedWorksById = async (req, res) => {
  try {
    const id = req.params.id;
    await FeaturedWorksModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}


const patroncardsuploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, designation, phone, email } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await patroncardsModel({ path: filePath, filename, name, designation, phone, email });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getpatroncards = async (req, res) => {
  try {
    const oldphotos = await patroncardsModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};

const deletepatroncardsById = async (req, res) => {
  try {
    const id = req.params.id;
    await patroncardsModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}



const BlogUploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, title, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photo = await BlogModel({ path: filePath, filename, name, title, description });
    await photo.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getBlog = async (req, res) => {
  try {
    const oldphotos = await BlogModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    await BlogModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}

const EventUploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { date, title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photo = await EventModel({ path: filePath, filename, title, date, description });
    await photo.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getEvent = async (req, res) => {
  try {
    const oldphotos = await EventModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteEventById = async (req, res) => {
  try {
    const id = req.params.id;
    await EventModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}


const teamMembersUploads = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, designation, phone, Linkedin, email } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await teamMembersModel({ path: filePath, filename, name, designation, phone, Linkedin, email });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getteamMembers = async (req, res) => {
  try {
    const oldphotos = await teamMembersModel.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteteamMembersById = async (req, res) => {
  try {
    const id = req.params.id;
    await teamMembersModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}


const teamMembersUploadsV = async (req, res) => {
  try {
    const { path: filePath, filename } = req.file;
    const { name, phone,vertical, Linkedin, email } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name of the person is required.' });
    }

    const photos = await teamMembersModelV({ path: filePath, filename, name,vertical, phone, Linkedin, email });
    await photos.save();

    res.status(201).json({ message: 'Photo uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to upload image.' });
  }
};

const getteamMembersV = async (req, res) => {
  try {
    const oldphotos = await teamMembersModelV.find();

    if (!oldphotos || oldphotos.length === 0) {
      return res.status(404).json({ message: 'No images found.' });
    }

    const photos = oldphotos.map(photo => ({
      ...photo._doc,
      url: `${req.protocol}://${req.get('host')}/uploads/${photo.filename}`,
    }));

    res.status(200).json({ photos });
  } catch (error) {
    console.error(`Error fetching images: ${error}`);
    res.status(500).json({ message: 'Server error.' });
  }
};


const deleteteamMembersByIdV = async (req, res) => {
  try {
    const id = req.params.id;
    await teamMembersModelV.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfuly" });
  } catch (error) {
    next(error);
  }
}


module.exports = {
  deleteEventById,
  getEvent,
  EventUploads,
  teamMembersUploadsV,
  patroncardsuploads,
  BlogUploads,
  collaborationsuploads,
  teamMembersUploads,
  Testimonialsuploads,
  FeaturedWorksuploads,
  getteamMembers,
  getteamMembersV,
  getBlog,
  getpatroncards,
  getcollaborations,
  getFeaturedWorks,
  getTestimonials,
  deleteteamMembersById,
  deleteBlogById,
  deletepatroncardsById,
  deleteFeaturedWorksById,
  deleteTestimonialsById,
  deleteteamMembersByIdV,
  deletecollaborationsById
};
