import { Schema, models, model, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  description: string;
  domain: Schema.Types.ObjectId[];
  createdOn: Date;
  hosted_link: string;
  github_link: string;
  is_completed: boolean;
  is_published: boolean; // wheather it is put on website or not
  project_lead: Schema.Types.ObjectId;
  documentation_link?: string;
}

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  domain: [{ type: Schema.Types.ObjectId, ref: "Domain" }],
  createdOn: { type: Date, required: true },
  hosted_link: { type: String, required: true },
  github_link: { type: String, required: true },
  is_completed: { type: Boolean, required: true },
  is_published: { type: Boolean, required: true },
  project_lead: { type: Schema.Types.ObjectId, ref: "Member" },
  documentation_link: { type: String },
});

const Project = models.Project || model<IProject>("Project", ProjectSchema);
export default Project;
