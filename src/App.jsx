import React from "react";
import Card from "./Components/Card.jsx";

const App = () => {
  const jobopenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Mountain View, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Product Manager",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hour",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$88/hour",
      location: "Palo Alto, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI Research Intern",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "San Jose, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "8 days ago",
      post: "Prompt Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className="parent">
      {jobopenings.map(function (elem) {
        return <Card company={elem.companyName} />;
      })}
    </div>
  );
};

export default App;
