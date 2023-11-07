import { Schema, models, model, Document } from "mongoose";

export interface IEvent extends Document {
  name: string;
  date: Date;
  location: string;
  description: string;
  event_website_thumbnail: string;
  event_domain:
    | "all"
    | "web"
    | "app"
    | "cloud"
    | "cyber"
    | "ml"
    | "video_editing"
    | "graphics_designing"
    | "content_writing"
    | "marketing"
    | "finance"
    | "public_relations"
    | "creative"
    | "design";
  attendees: number;
  lead_organizer: Schema.Types.ObjectId;
  registrations: number;
  script_link?: string;
  drive_link?: string;
  time: string;
  duration: number;
  is_completed: boolean; // for wheather the event is completed or not
  is_published: boolean; // for wheather the event is published on website or not
  sponsors: Schema.Types.ObjectId[]; // for list of sponsors
}

const EventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  event_website_thumbnail: { type: String, required: true },
  event_domain: {
    type: String,
    enum: [
      "all",
      "web",
      "app",
      "cloud",
      "cyber",
      "ml",
      "video_editing",
      "graphics_designing",
      "content_writing",
      "marketing",
      "finance",
      "public_relations",
      "creative",
      "design",
    ],
    required: true,
  },
  attendees: { type: Number, required: true },
  lead_organizer: { type: Schema.Types.ObjectId, required: true },
  registrations: { type: Number, required: true },
  script_link: { type: String },
  drive_link: { type: String },
  time: { type: String, required: true },
  duration: { type: Number, required: true },
  is_completed: { type: Boolean, required: true },
  is_published: { type: Boolean, required: true },
  sponsors: { type: Schema.Types.ObjectId, required: true, ref: "Sponsor" },
});

const Event = models.Event || model<IEvent>("Event", EventSchema);
export default Event;
