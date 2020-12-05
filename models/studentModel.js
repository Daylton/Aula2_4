import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    // validate(value) {
    //   if (value < 0) throw new Error('Valor negativo para nota não permitido');
    // },
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

// repetir 'student' para não criar no plural
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
