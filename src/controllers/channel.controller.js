import { Video } from "../models/video.model.js";

export async function createVideo(req, res, next) {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (err) {
    next(err);
  }
}

export async function getVideo(req, res, next) {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: "Video not found" });
    res.json(video);
  } catch (err) {
    next(err);
  }
}

export async function updateVideo(req, res, next) {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!video) return res.status(404).json({ error: "Video not found" });
    res.json(video);
  } catch (err) {
    next(err);
  }
}

export async function deleteVideo(req, res, next) {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(404).json({ error: "Video not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
