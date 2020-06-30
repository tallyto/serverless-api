import { Schema, model, Document } from "mongoose";

interface VagaInterface extends Document {
  title?: String;
  description?: String;
  technologies?: Array<String>;
}

const VagaSchema = new Schema({
  title: String,
  description: String,
  technologies: Array,
});

export default model<VagaInterface>("Vaga", VagaSchema);
