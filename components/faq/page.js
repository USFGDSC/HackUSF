"use client"

import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const faqData = [
  {
    question: "Is the event free to attend?",
    answer: "Yes! Food will be provided for the duration of the event. We will also have swag and prizes!"
  },
  {
    question: "Who can attend? What if I don't have any experience? Do I have to be 18?",
    answer: "This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project. Attendees must be at least 13 years old due to child privacy laws. If under 18, you can attend, but will need to fill out a liability form from the university."
  },
  {
    question: "What is the team size limit?",
    answer: "You can be on teams of up to 4. We will have a team building activity right after opening ceremony if you need to find team members!"
  },
  {
    question: "Are there travel reimbursements?",
    answer: "We are not able to provide travel reimbursements at this time."
  },
  {
    question: "What should I bring?",
    answer: "Your laptop, charger, headphones, deodorant, pillow/blanket."
  },
  {
    question: "When can we start working on our project? Can I work on a previous project?",
    answer: "You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used."
  },
  {
    question: "How many challenges can I apply for?",
    answer: "As many as you want!"
  },
  {
    question: "Do I have to stay overnight?",
    answer: "No, you can leave and come back if you would prefer to go to bed."
  },
  {
    question: "What kind of activities will there be?",
    answer: "We will post the schedule closer to the event. There will be workshops and activities to take a break and meet other hackers and our wonderful sponsors."
  },
  {
    question: "What is a hackathon? Will there be actual hacking?",
    answer: "A hackathon is an event where students 'hack' together and create an app, website, game, etc. in 24-48 hours. There will be no malicious 'hacking'."
  },
  {
    question: "Will hardware be available?",
    answer: "We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, please do not bring soldering kits."
  },
  {
    question: "Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?",
    answer: "We will send out acceptances XX days before the event. If you need to know before then to book travel, please reach out to our team for an early review. Applications will be closing once we reach the maximum amount of hackers we can support, but we will have a waitlist the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending."
  },
  {
    question: "How do I sign up to be a mentor/judge/volunteer?",
    answer: "You can sign up here - LINK."
  }
];

export default function FAQ() {
  return (
    <Box>
      {faqData.map((item, index) => (
        <Accordion 
          key={index}
          sx={{ 
            mb: 3, 
            borderRadius: 2, 
            overflow: "hidden", 
            boxShadow: 3, 
            transition: "0.3s",
            "&:hover": { boxShadow: 6 },
            "&:before": { display: "none" },
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "#1976D2" }} />}
            sx={{
              bgcolor: "#f5f5f5",
              paddingY: 1.5, 
              "&:hover": { bgcolor: "#ebebeb" },
            }}
          >
            <Typography 
              component="span" 
              sx={{ fontWeight: 600, fontSize: "1.1rem"}} 
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: "#ffffff", paddingY: 2 }}>
            <Typography sx={{ color: "#555", lineHeight: 1.6 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
