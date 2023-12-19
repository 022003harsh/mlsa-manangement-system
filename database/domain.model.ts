import { Schema, models, model, Document } from "mongoose";

export interface IDomain extends Document {
  name:
    | "web"
    | "app"
    | "cloud"
    | "cyber"
    | "ml"
    | "video_editing"
    | "graphics_designing"
    | "content_writing"
    | "corporate_relations"
    | "public_relations"
    | "creative"
    | "design"
    | "ar_vr";
  description: string;
  createdOn: Date;
  events: Schema.Types.ObjectId[];
  projects: Schema.Types.ObjectId[];
}

const DomainSchema = new Schema<IDomain>({
  name: {
    type: String,
    enum: [
      "web",
      "app",
      "cloud",
      "cyber",
      "ml",
      "video_editing",
      "graphics_designing",
      "content_writing",
      "corporate_relations",
      "public_relations",
      "creative",
      "design",
      "ar_vr",
    ],
  },
  description: { type: String, required: true },
  createdOn: { type: Date, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});

const Domain = models.Domain || model<IDomain>("Domain", DomainSchema);

export default Domain;
