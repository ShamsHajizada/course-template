const express = require('express')
const mongoose = require('mongoose');
const app = express()
const { Schema } = mongoose;
const port = 8080

const DB_URL="mongodb+srv://course1:azmp101@cluster0.y895bhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const CourseSchema = new Schema({
    title: { type: String, require: true },
    price: { type: Number, require: true },
    imageUrl: { type: String, require: true },
    description: { type: String, require: true },
  });

  const CourseModel = mongoose.model('Course', CourseSchema);

app.get("/api/course", async (req, res) => {
    try {
      const course = await CourseModel.find({});
  
      if (course.length > 0) {
        res.status(200).send({ message: "success", data: course });
      } else {
        res.status(204).send({
          message: "data is empty",
          data: null,
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
app.get("/api/course/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const course = await CourseModel.findById(id);
  
      if (course) {
        res.status(200).send({
          message: "success",
          data: course,
        });
      } else {
        res.status(404).send({ message: "data not found" });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  app.delete("/api/course/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCourse = await CourseModel.findByIdAndDelete(id);
  
      res.status(200).send({
        message: "deleted succesfully!",
        deletedCourse: deletedCourse,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  app.post("/api/course", async (req, res) => {
    try {
      const newCourse = new CourseModel({ ...req.body });
      await newCourse.save();
  
      res.status(201).send({ message: "created succesfully!", data: newCourse });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  mongoose.connect('DB_URL')
  .then(() => console.log('Connected!'));
  app.listen(port, () => {
    console.log(`Link:  http://localhost:${port}`);});
