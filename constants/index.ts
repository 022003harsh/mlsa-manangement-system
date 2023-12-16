import { SideNavItem } from "@/types/types";
import { MembersDataItem } from "@/types/types";
import { ModalItem } from "@/types/types";
import { Sponsors } from "@/types/types";
import { Events } from "@/types/types";
import { Schema } from "mongoose";
import { string, number, boolean } from "zod";


export const SIDEBAR_MENU: SideNavItem[] = [
  {
    iconURL: "/icon/home.svg",
    name: "Home",
    path: "/",
  },
  {
    iconURL: "/icon/member.svg",
    name: "Member",
    path: "/member",
  },
  {
    iconURL: "/icon/event.svg",
    name: "Event",
    path: "/event",
  },
  {
    iconURL: "/icon/sponsor.svg",
    name: "Sponsor",
    path: "/sponsor",
  },
  {
    iconURL: "/icon/profile.svg",
    name: "Profile",
    path: "/profile",
  },
];

export const MEMBERS_DATA: MembersDataItem[] = [
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Parth",
    path: "/profile",
    position: "Lead",
      kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "sachi",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harsh",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harshit",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Amaan",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Parth",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "sachi",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harsh",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harshit",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Amaan",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "sachi",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harsh",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Harshit",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
  {
    iconURL: "/logo/Ellipse 2.svg",
    name: "Amaan",
    path: "/profile",
    position: "Lead",
    kiit_email_id: 'john.doe@kiit.ac.in',
      personal_email_id: 'john.doe@example.com',
      phone: 1234567890,
      current_year: 3,
      branch: 'CSE',
      roll_number: 2023001,
      type: 'lead',
      portfolio_website: 'https://john.doe.portfolio',
      github_URL: 'https://github.com/johndoe',
      instagram_URL: 'https://instagram.com/johndoe',
      linkedIn_URL: 'https://linkedin.com/in/johndoe',
      facebook_URL: 'https://facebook.com/johndoe',
      behance_URL: 'https://behance.net/johndoe',
      dribble_URL: 'https://dribbble.com/johndoe',
      youtube_URL: 'https://youtube.com/johndoe',
      x_URL: 'https://x.johndoe.com',
      drive_URL: 'https://drive.google.com/john'
    
  },
];

export const SPONSORS: Sponsors[] = [
  {
    name: "RedBull",
    logo_URL: "/logo/Ellipse 2.svg",
    website_URL: "mlsakiit.com",
    description: "brvrage sponsored",
    signed_by: "Pranshu",
    phone: 7777777777,
    email: "john@com",
    sponsor_field: "education",
  },
  {
    name: "RedBull",
    logo_URL: "/logo/Ellipse 2.svg",
    website_URL: "mlsakiit.com",
    description: "brvrage sponsored",
    signed_by: "Pranshu",
    phone: 7777777779,
    email: "john@com",
    sponsor_field: "education",
  },
];

export const EVENTS: Events[] = [
  {
    name: "Kalki",
    location: "campus2",
    description: "web event",
    event_website_thumbnail: "/logo/Ellipse 2.svg",
    event_domain: "web", // Assuming a default value for event_domain
    attendees: 555,
    registrations: 666,
    script_link: 'https://script.com/johndoe',
    drive_link: 'https://drive.com/johndoe',
    time: "10:00 A.M",
    duration: 5,
    is_completed: true, // Use boolean value
    is_published: true, // Use boolean value
  },
  ]

export const MODAL: ModalItem[] = [
  {
    value: "member",
    topic: "Add a Member",
    description: "Add a new member or add members in batches by dragging in a csv file. Members can add details later on."
  },
  {
    value: "event",
    topic: "Add an Event",
    description: "Add basic details for the new event or add by dragging in a csv file with all data."
  },
  {
    value: "sponsor",
    topic: "Add a Sponsor",
    description: "Add details about the sponsor, upload the pdf for Memorandum of Understanding"
  },
];

// export const DROPDOWN_BUTTON: DropdownButtonItem[] = [
//   {
//     value: "member",
//     topic: "Add a Member",
//     description: "Add a new member or add members in batches by dragging in a csv file. Members can add details later on."
//   },
//   {
//     value: "event",
//     topic: "Add an Event",
//     description: "Add basic details for the new event or add by dragging in a csv file with all data."
//   },
//   {
//     value: "sponsor",
//     topic: "Add a Sponsor",
//     description: "Add details about the sponsor, upload the pdf for Memorandum of Understanding"
//   },
// ];
