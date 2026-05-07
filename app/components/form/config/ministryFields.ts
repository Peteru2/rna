export const ministryFields = [
  {
    type: "text",
    name: "eventHost",
    label: "Event host / church name",
    placeholder: "Enter organisation name",
  },

  {
    type: "text",
    name: "position",
    label: "Your position in the organisation",
    placeholder: "Enter your role",
  },

  {
    type: "text",
    name: "hostPastor",
    label: "Host pastor (first & last name)",
    placeholder: "Enter pastor name",
  },

   {
    type: "text",
    name: "eventName",
    label: "Event name and the vision/theme for the event?",
    placeholder: "Enter the event name",
  },
  {
    type: "text",
    name: "scripture",
    label: "Is there a scripture that the Lord has given you concerning this event?",
    placeholder: "Enter your scripture",
  },
  {
    type: "text",
    name: "email",
    label: "Your email",
    placeholder: "Enter your email",
  },
   {
    type: "text",
    name: "address",
    label: "Venue address",
    placeholder: "Your Address ",
  },
  {
    type: "phone",
    name: "phone",
    label: "Phone Number",
    placeholder: "8012345678",
  },
  {
    type: "text",
    name: "otherMinisters",
    label: "Are there other ministers ministering? If yes, who are they?",
    placeholder: "Enter Ministers name ",
  },
  {
    type: "date",
    name: "startDate",
    label: "Start date of event",
    placeholder: "Start Date",
  },
  {
    type: "date",
    name: "endDate",
    label: "End date of event",
    placeholder: "End Date",
  },
   {
  type: "radio",
  name: "description",
  label: "Description of event",

  options: [
    {
      label: "In-person",
      value: "in-person",
    },
    {
      label: "Virtual",
      value: "virtual",
    },
    {
      label: "Other",
      value: "other",
    },
  ],
},
{
    type: "text",
    name: "specifyOtherEvent",
    label: "Specify other (if applicable)",
    placeholder: "Please Specify",
  },
  {
    type: "text",
    name: "yourExpectation",
    label: "What are your expectations for RNA’S participation in this event? (Include details about how many sessions you want the team to minister at)",
    placeholder: "Let us know your expectation",
  },
  {
  type: "radio",
  name: "privatePublic",
  label: "Will the event be private or open to the public?",

  options: [
    {
      label: "Private",
      value: "Private",
    },
    {
      label: "Public",
      value: "Public",
    },
    
  ],
},
{
    type: "textarea",
    name: "otherDetails",
    label: "Are there any other details you think we should know?",
    placeholder: "",
  },
{
    type: "checkbox",
    name: "agreement",
    label: "I understand that this Event Request Form"
    //  will be used by Minister Dunsin Oyekan for the purpose of coordinating agendas. Submission of this form is only a request and DOES NOT CONFIRM his participation in said event. (The correct information is required to process this request. After review, a member of Team Dunsin Oyekan will contact you.)",
  },
];